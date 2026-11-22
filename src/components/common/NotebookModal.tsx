import React from 'react';
import { X, BookOpen, Target, FileText, CheckCircle2 } from 'lucide-react';
import { useGame } from '../../context/GameContext';

interface NotebookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NotebookModal: React.FC<NotebookModalProps> = ({ isOpen, onClose }) => {
  const { activeCase, caseState, updateCaseNotes } = useGame();

  if (!isOpen || !activeCase || !caseState) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl max-h-[85vh] bg-[#1a1714] border-2 border-[#544332] rounded-lg shadow-2xl overflow-hidden flex flex-col font-mono text-noir-200">
        {/* Leather Notebook Header */}
        <div className="bg-[#241e19] px-6 py-4 border-b border-[#3d3125] flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <BookOpen className="w-5 h-5 text-amber-500" />
            <div>
              <h2 className="font-serif tracking-wide text-lg text-amber-200 font-bold">
                DETECTIVE FIELD NOTEBOOK
              </h2>
              <span className="text-xs text-noir-400">
                CASE #{activeCase.caseNumber} — {activeCase.title}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-noir-400 hover:text-white hover:bg-noir-800/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notebook Body (Notebook Lined Paper Styling) */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#161311] text-sm">
          {/* Mission Briefing Section */}
          <div className="bg-[#201a15] p-4 rounded border border-[#3a2e22]">
            <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase mb-2">
              <FileText className="w-4 h-4" />
              <span>Official Department Directive</span>
            </div>
            <p className="text-xs text-noir-300 leading-relaxed italic mb-3">
              "{activeCase.briefing.chiefMemo}"
            </p>
            <div className="space-y-1.5 pt-2 border-t border-[#31261c]">
              <span className="text-[11px] uppercase tracking-wider text-amber-500 font-bold flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5" /> Key Objectives
              </span>
              <ul className="space-y-1 text-xs text-noir-300">
                {activeCase.briefing.keyObjectives.map((obj, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-blood-500 font-bold">[{i + 1}]</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Real-time Case Investigation Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="bg-[#1f1915] p-3 rounded border border-[#35281e]">
              <span className="text-[10px] text-noir-400 uppercase">Evidence Logged</span>
              <div className="text-lg font-bold text-amber-300 mt-1">
                {caseState.discoveredEvidenceIds.length} / {activeCase.evidence.length}
              </div>
            </div>
            <div className="bg-[#1f1915] p-3 rounded border border-[#35281e]">
              <span className="text-[10px] text-noir-400 uppercase">Board Connections</span>
              <div className="text-lg font-bold text-cyan-300 mt-1">
                {caseState.userConnections.length}
              </div>
            </div>
            <div className="bg-[#1f1915] p-3 rounded border border-[#35281e]">
              <span className="text-[10px] text-noir-400 uppercase">Hints Used</span>
              <div className="text-lg font-bold text-blood-400 mt-1">
                {caseState.unlockedHintLevels.length} / 3
              </div>
            </div>
            <div className="bg-[#1f1915] p-3 rounded border border-[#35281e]">
              <span className="text-[10px] text-noir-400 uppercase">Case Status</span>
              <div className="text-sm font-bold text-green-400 mt-1 flex items-center gap-1">
                {caseState.isCompleted ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-green-500" /> Solved
                  </>
                ) : (
                  'Active'
                )}
              </div>
            </div>
          </div>

          {/* Detective Freeform Case Journal / Notes */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-xs uppercase font-bold tracking-wider text-noir-300">
                Personal Field Observations & Theories
              </label>
              <span className="text-[10px] text-noir-500">Auto-saved to file</span>
            </div>
            <textarea
              value={caseState.caseNotes}
              onChange={(e) => updateCaseNotes(e.target.value)}
              placeholder="Record suspect discrepancies, timeline doubts, and evidence correlations here..."
              rows={7}
              className="w-full bg-[#1b1612] border border-[#3d3125] rounded p-3 text-xs font-mono text-amber-100 placeholder-noir-600 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
            />
          </div>
        </div>

        {/* Notebook Footer */}
        <div className="bg-[#1f1915] px-6 py-3 border-t border-[#3a2e22] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#3a2c20] hover:bg-[#4f3b2b] text-amber-200 text-xs font-mono rounded transition-colors"
          >
            Close Notebook
          </button>
        </div>
      </div>
    </div>
  );
};
