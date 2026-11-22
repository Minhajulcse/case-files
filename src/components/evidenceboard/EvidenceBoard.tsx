import React, { useState, useMemo } from 'react';
import {
  Network,
  Pin,
  Trash2,
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  Plus,
  Info,
  Maximize2,
  Users,
  FolderOpen
} from 'lucide-react';
import { useGame } from '../../context/GameContext';
import { EvidenceBoardNode, CanonConnection, UserConnection } from '../../types/game';
import { AddConnectionModal } from './AddConnectionModal';
import { sound } from '../../utils/audio';

export const EvidenceBoard: React.FC = () => {
  const { activeCase, caseState, addUserConnection, removeUserConnection } = useGame();
  const [selectedSourceNodeId, setSelectedSourceNodeId] = useState<string | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [activeDeductionNote, setActiveDeductionNote] = useState<{
    title: string;
    text: string;
    isContradiction: boolean;
  } | null>(null);

  if (!activeCase || !caseState) return null;

  // Build the list of active board nodes (all 5 suspects + all discovered evidence items)
  const discoveredClues = activeCase.evidence.filter(e =>
    caseState.discoveredEvidenceIds.includes(e.id)
  );

  const nodes: EvidenceBoardNode[] = useMemo(() => {
    const list: EvidenceBoardNode[] = [];

    // 1. Suspect nodes (placed on top/sides)
    activeCase.suspects.forEach((suspect, idx) => {
      // Circular or staggered arrangement coordinates (0 - 100%)
      const x = 12 + idx * 19;
      const y = 14 + (idx % 2 === 0 ? 0 : 8);
      list.push({
        id: `node-suspect-${suspect.id}`,
        type: 'suspect',
        targetId: suspect.id,
        title: suspect.name,
        subtitle: suspect.role,
        x,
        y
      });
    });

    // 2. Discovered clue nodes (arranged across lower corkboard area)
    discoveredClues.forEach((clue, idx) => {
      const col = idx % 4;
      const row = Math.floor(idx / 4);
      const x = 14 + col * 24;
      const y = 45 + row * 24;
      list.push({
        id: `node-clue-${clue.id}`,
        type: 'evidence',
        targetId: clue.id,
        title: clue.name,
        subtitle: clue.category,
        category: clue.category,
        x,
        y
      });
    });

    return list;
  }, [activeCase, discoveredClues]);

  // Handle direct node click for 2-step point-and-click linking
  const handleNodeClick = (node: EvidenceBoardNode) => {
    if (!selectedSourceNodeId) {
      sound.playPin();
      setSelectedSourceNodeId(node.targetId);
    } else if (selectedSourceNodeId === node.targetId) {
      // Deselect
      sound.playPaper();
      setSelectedSourceNodeId(null);
    } else {
      // Connect Source to Target
      const res = addUserConnection(selectedSourceNodeId, node.targetId);
      if (res.isCanon && res.canon) {
        setActiveDeductionNote({
          title: res.canon.label,
          text: res.canon.deductionNotes,
          isContradiction: res.canon.isContradiction
        });
      }
      setSelectedSourceNodeId(null);
    }
  };

  const handleModalConnect = (sourceId: string, targetId: string, note?: string) => {
    const res = addUserConnection(sourceId, targetId, note);
    if (res.isCanon && res.canon) {
      setActiveDeductionNote({
        title: res.canon.label,
        text: res.canon.deductionNotes,
        isContradiction: res.canon.isContradiction
      });
    }
  };

  // Find coordinates for user connection lines
  const connectionLines = useMemo(() => {
    return caseState.userConnections.map(conn => {
      const nodeA = nodes.find(n => n.targetId === conn.sourceId);
      const nodeB = nodes.find(n => n.targetId === conn.targetId);
      const canon = activeCase.canonConnections.find(
        c => (c.sourceId === conn.sourceId && c.targetId === conn.targetId) ||
             (c.sourceId === conn.targetId && c.targetId === conn.sourceId)
      );

      return {
        conn,
        nodeA,
        nodeB,
        canon,
        isCanon: !!canon
      };
    }).filter(c => c.nodeA && c.nodeB);
  }, [caseState.userConnections, nodes, activeCase]);

  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-105px)] bg-noir-950 font-mono select-none overflow-hidden">
      {/* Interactive Corkboard Surface */}
      <div className="flex-1 relative corkboard-texture overflow-auto p-4 sm:p-8 flex items-center justify-center">
        {/* Board Top Header Bar */}
        <div className="absolute top-4 left-4 right-4 z-30 flex items-center justify-between pointer-events-none">
          <div className="bg-noir-950/90 border border-amber-900/60 px-3.5 py-1.5 rounded-lg shadow-xl backdrop-blur pointer-events-auto">
            <span className="text-[10px] uppercase font-bold text-amber-500 tracking-wider">
              INVESTIGATION WALL
            </span>
            <div className="font-serif font-bold text-xs sm:text-sm text-amber-100">
              Red Thread Link Matrix
            </div>
          </div>

          <div className="flex items-center space-x-2 pointer-events-auto">
            {selectedSourceNodeId && (
              <div className="bg-blood-950 border border-blood-600 px-3 py-1 rounded text-xs text-white animate-pulse flex items-center gap-1.5 shadow-lg">
                <Pin className="w-3.5 h-3.5 text-blood-400" />
                <span>Select 2nd pin to connect...</span>
                <button
                  onClick={() => setSelectedSourceNodeId(null)}
                  className="ml-2 text-noir-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
            )}

            <button
              onClick={() => setIsAddModalOpen(true)}
              className="px-3.5 py-1.5 bg-blood-700 hover:bg-blood-600 border border-blood-500/80 rounded-lg text-xs font-bold text-white shadow-lg flex items-center space-x-1.5 transition-all transform hover:-translate-y-0.5"
            >
              <Plus className="w-4 h-4" />
              <span>Link Nodes</span>
            </button>
          </div>
        </div>

        {/* Board Canvas Area */}
        <div className="relative w-full max-w-5xl h-[560px] sm:h-[620px] rounded-lg border-4 border-[#33251c] shadow-2xl overflow-hidden bg-[#181310]/90">
          {/* SVG Yarn / String Layer */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
            {connectionLines.map(({ conn, nodeA, nodeB, isCanon, canon }) => {
              if (!nodeA || !nodeB) return null;

              // Bezier curve control points
              const x1 = `${nodeA.x}%`;
              const y1 = `${nodeA.y}%`;
              const x2 = `${nodeB.x}%`;
              const y2 = `${nodeB.y}%`;

              return (
                <g key={conn.id}>
                  {/* Subtle shadow string */}
                  <line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="rgba(0,0,0,0.6)"
                    strokeWidth="4"
                  />
                  {/* Crimson String line */}
                  <line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={isCanon ? (canon?.isContradiction ? '#ef4444' : '#22c55e') : '#dc2626'}
                    strokeWidth={isCanon ? '3' : '2'}
                    strokeDasharray={isCanon ? 'none' : '4 2'}
                  />
                </g>
              );
            })}
          </svg>

          {/* Pinned Nodes on the Board */}
          {nodes.map(node => {
            const isSelected = selectedSourceNodeId === node.targetId;
            const isSuspect = node.type === 'suspect';

            return (
              <div
                key={node.id}
                onClick={() => handleNodeClick(node)}
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                className={`absolute z-20 cursor-pointer p-1 transition-all duration-200 ${
                  isSelected ? 'scale-110 z-30' : 'hover:scale-105 hover:z-30'
                }`}
              >
                {/* Vintage Push-Pin */}
                <div
                  className={`w-4 h-4 rounded-full mx-auto -mb-2 border-2 shadow-md relative z-30 ${
                    isSelected
                      ? 'bg-blood-500 border-white animate-bounce'
                      : isSuspect
                      ? 'bg-amber-500 border-amber-900'
                      : 'bg-blood-600 border-blood-950'
                  }`}
                />

                {/* Node Card / Polaroid */}
                <div
                  className={`rounded p-2.5 shadow-xl text-center max-w-[130px] sm:max-w-[150px] transition-all ${
                    isSuspect
                      ? 'bg-[#221c17] border-2 border-[#544335] text-amber-100'
                      : 'bg-[#1c1815] border border-[#3d3126] text-noir-200'
                  } ${
                    isSelected ? 'ring-2 ring-blood-500 shadow-blood-950/80 shadow-2xl' : ''
                  }`}
                >
                  <span
                    className={`text-[9px] uppercase font-bold tracking-wider block mb-0.5 ${
                      isSuspect ? 'text-amber-400' : 'text-blood-400'
                    }`}
                  >
                    {isSuspect ? 'SUSPECT' : node.subtitle}
                  </span>
                  <div className="font-serif font-bold text-[11px] leading-tight text-white line-clamp-2">
                    {node.title}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Column: Connection Matrix & Canon Deductions */}
      <div className="w-full lg:w-80 bg-noir-900 border-t lg:border-t-0 border-noir-800 p-4 flex flex-col justify-between overflow-y-auto">
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-noir-800 pb-2">
            <span className="text-xs uppercase font-bold text-amber-400 flex items-center gap-1.5">
              <Network className="w-4 h-4" /> Deduction Connections
            </span>
            <span className="text-[10px] text-noir-400 font-mono">
              {caseState.userConnections.length} Active Strings
            </span>
          </div>

          {/* Active Revelation Card if Unlocked */}
          {activeDeductionNote && (
            <div
              className={`p-3.5 rounded-lg border text-xs space-y-1.5 shadow-lg animate-fade-in ${
                activeDeductionNote.isContradiction
                  ? 'bg-blood-950/80 border-blood-600 text-blood-200'
                  : 'bg-green-950/70 border-green-700/80 text-green-200'
              }`}
            >
              <div className="flex items-center justify-between font-bold text-[11px]">
                <span className="flex items-center gap-1">
                  {activeDeductionNote.isContradiction ? (
                    <AlertTriangle className="w-3.5 h-3.5 text-blood-400" />
                  ) : (
                    <Sparkles className="w-3.5 h-3.5 text-green-400" />
                  )}
                  {activeDeductionNote.title}
                </span>
                <button
                  onClick={() => setActiveDeductionNote(null)}
                  className="text-noir-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
              <p className="text-[11px] leading-relaxed text-noir-200 italic">
                "{activeDeductionNote.text}"
              </p>
            </div>
          )}

          {/* List of Connected Pairs */}
          <div className="space-y-2">
            {connectionLines.length === 0 ? (
              <div className="text-center py-8 text-xs text-noir-500 space-y-1">
                <Network className="w-6 h-6 mx-auto text-noir-600" />
                <div>No connections pinned yet.</div>
                <div className="text-[10px] text-noir-600">
                  Click a pin, then click another to thread a connection string.
                </div>
              </div>
            ) : (
              connectionLines.map(({ conn, nodeA, nodeB, isCanon, canon }) => (
                <div
                  key={conn.id}
                  className={`p-3 rounded-lg border text-xs space-y-1.5 ${
                    isCanon
                      ? canon?.isContradiction
                        ? 'bg-blood-950/40 border-blood-800 text-white'
                        : 'bg-green-950/30 border-green-800 text-white'
                      : 'bg-noir-950 border-noir-800 text-noir-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold text-noir-400">
                      {isCanon ? (
                        canon?.isContradiction ? (
                          <span className="text-blood-400 flex items-center gap-1">
                            <AlertTriangle className="w-3 h-3" /> Contradiction Detected
                          </span>
                        ) : (
                          <span className="text-green-400 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" /> Corroborated Link (+{canon?.bonusPoints} PTS)
                          </span>
                        )
                      ) : (
                        'Investigative Link'
                      )}
                    </span>

                    <button
                      onClick={() => removeUserConnection(conn.id)}
                      className="text-noir-500 hover:text-blood-400 p-0.5"
                      title="Sever String Connection"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="font-bold text-[11px] text-noir-100">
                    {nodeA?.title} ⟷ {nodeB?.title}
                  </div>

                  {conn.note && (
                    <p className="text-[10px] text-amber-300/80 italic">
                      Note: {conn.note}
                    </p>
                  )}
                </div>
              ))
            )}
          </div>
        </div>

        {/* Guidance Footer */}
        <div className="p-3 bg-noir-950 border-t border-noir-800 text-[11px] text-noir-400 space-y-1">
          <div className="flex items-center gap-1 text-amber-400 font-bold">
            <Info className="w-3.5 h-3.5" />
            <span>Detective Tip:</span>
          </div>
          <p className="text-[10px] text-noir-500 leading-relaxed">
            Link physical evidence with suspect statements to uncover lies and false alibis before submitting your indictment.
          </p>
        </div>
      </div>

      {/* Connection Builder Modal */}
      <AddConnectionModal
        isOpen={isAddModalOpen}
        nodes={nodes}
        onClose={() => setIsAddModalOpen(false)}
        onConnect={handleModalConnect}
      />
    </div>
  );
};
