import React, { useState } from 'react';
import {
  FolderOpen,
  Search,
  Pin,
  Lock,
  Filter,
  FileText,
  Smartphone,
  Eye,
  Camera,
  FileCheck2,
  Package,
  ShieldAlert
} from 'lucide-react';
import { useGame } from '../../context/GameContext';
import { EvidenceCategory, EvidenceItem } from '../../types/game';
import { EvidenceDetailModal } from './EvidenceDetailModal';
import { sound } from '../../utils/audio';

export const EvidenceRoom: React.FC = () => {
  const { activeCase, caseState, toggleMarkImportant } = useGame();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedClue, setSelectedClue] = useState<EvidenceItem | null>(null);

  if (!activeCase || !caseState) return null;

  const discoveredSet = new Set(caseState.discoveredEvidenceIds);
  const categories: ('All' | EvidenceCategory)[] = [
    'All',
    'Physical',
    'Documents',
    'Digital',
    'Witness Statements',
    'Photographs',
    'Forensic Reports'
  ];

  // Filter evidence
  const filteredAllEvidence = activeCase.evidence.filter(item => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.discoveryLocation.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  // Sort: marked important first, then discovered, then undiscovered
  const sortedEvidence = [...filteredAllEvidence].sort((a, b) => {
    const aDiscovered = discoveredSet.has(a.id);
    const bDiscovered = discoveredSet.has(b.id);
    const aMarked = caseState.markedImportantClueIds.includes(a.id);
    const bMarked = caseState.markedImportantClueIds.includes(b.id);

    if (aMarked && !bMarked) return -1;
    if (!aMarked && bMarked) return 1;
    if (aDiscovered && !bDiscovered) return -1;
    if (!aDiscovered && bDiscovered) return 1;
    return 0;
  });

  const handleClueClick = (clue: EvidenceItem) => {
    sound.playPaper();
    setSelectedClue(clue);
  };

  const getCategoryIcon = (cat: EvidenceCategory) => {
    switch (cat) {
      case 'Physical':
        return <Package className="w-3.5 h-3.5" />;
      case 'Digital':
        return <Smartphone className="w-3.5 h-3.5" />;
      case 'Documents':
        return <FileText className="w-3.5 h-3.5" />;
      case 'Witness Statements':
        return <Eye className="w-3.5 h-3.5" />;
      case 'Photographs':
        return <Camera className="w-3.5 h-3.5" />;
      case 'Forensic Reports':
        return <FileCheck2 className="w-3.5 h-3.5" />;
      default:
        return <FileText className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="min-h-[calc(100vh-105px)] bg-noir-950 p-4 sm:p-6 font-mono select-none">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Controls Header: Category Tabs & Search Bar */}
        <div className="bg-noir-900 border border-noir-800 rounded-lg p-4 space-y-4 shadow-xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="flex items-center space-x-2">
                <FolderOpen className="w-5 h-5 text-amber-500" />
                <h2 className="font-serif font-bold text-base text-white tracking-wide">
                  EVIDENCE REPOSITORY & FORENSIC ARCHIVE
                </h2>
              </div>
              <p className="text-[11px] text-noir-400 mt-0.5">
                Catalogued materials seized from crime scene and investigative interviews.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-noir-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search clues, locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-noir-950 border border-noir-700 rounded-lg pl-9 pr-3 py-1.5 text-xs text-white placeholder-noir-500 focus:outline-none focus:border-blood-600 focus:ring-1 focus:ring-blood-600"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center overflow-x-auto scrollbar-none gap-2 pt-2 border-t border-noir-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded text-xs whitespace-nowrap transition-all flex items-center space-x-1.5 ${
                  selectedCategory === cat
                    ? 'bg-blood-900/80 border border-blood-700 text-white font-bold'
                    : 'bg-noir-950 border border-noir-800 text-noir-400 hover:text-white hover:bg-noir-850'
                }`}
              >
                {cat !== 'All' && getCategoryIcon(cat as EvidenceCategory)}
                <span>{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Evidence Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {sortedEvidence.map((item) => {
            const isDiscovered = discoveredSet.has(item.id);
            const isMarked = caseState.markedImportantClueIds.includes(item.id);

            if (!isDiscovered) {
              return (
                <div
                  key={item.id}
                  className="bg-noir-950/60 border border-dashed border-noir-800/80 rounded-lg p-5 flex flex-col justify-between min-h-[170px] opacity-70"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-noir-500 uppercase tracking-widest font-bold">
                      {item.category}
                    </span>
                    <Lock className="w-3.5 h-3.5 text-noir-600" />
                  </div>

                  <div className="text-center py-4">
                    <div className="w-10 h-10 mx-auto rounded-full bg-noir-900 border border-noir-800 flex items-center justify-center text-noir-600 mb-2">
                      <Lock className="w-4 h-4" />
                    </div>
                    <span className="text-xs text-noir-400 font-bold block">
                      Undiscovered Evidence
                    </span>
                    <span className="text-[10px] text-noir-600 mt-1 block">
                      Inspect scene or interrogate suspects to unlock
                    </span>
                  </div>

                  <div className="text-[10px] text-noir-600 text-right">
                    Slot #{item.id.replace('clue-', '')}
                  </div>
                </div>
              );
            }

            return (
              <div
                key={item.id}
                onClick={() => handleClueClick(item)}
                className={`group relative bg-noir-900 border rounded-lg p-4 flex flex-col justify-between min-h-[180px] cursor-pointer transition-all duration-200 shadow-md hover:shadow-xl hover:-translate-y-0.5 ${
                  isMarked
                    ? 'border-blood-600/80 bg-noir-850'
                    : 'border-noir-700/80 hover:border-amber-500/70'
                }`}
              >
                {/* Top Badge: Category & Pin Toggle */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-noir-950 text-amber-400 border border-noir-800 flex items-center gap-1">
                    {getCategoryIcon(item.category)}
                    <span>{item.category}</span>
                  </span>

                  <div className="flex items-center space-x-1.5">
                    {item.isCrucial && (
                      <span className="text-[10px] text-blood-400 font-bold flex items-center gap-0.5" title="Crucial Case Evidence">
                        <ShieldAlert className="w-3.5 h-3.5" /> Key
                      </span>
                    )}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMarkImportant(item.id);
                      }}
                      className={`p-1 rounded transition-colors ${
                        isMarked
                          ? 'text-blood-400 hover:text-blood-300'
                          : 'text-noir-600 hover:text-noir-300'
                      }`}
                      title="Mark as Key Evidence"
                    >
                      <Pin className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Evidence Content */}
                <div className="space-y-1.5 flex-1">
                  <h3 className="font-serif font-bold text-sm text-white group-hover:text-amber-200 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-noir-400 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Card Bottom Meta */}
                <div className="pt-3 border-t border-noir-800/80 flex items-center justify-between text-[10px] text-noir-500">
                  <span className="truncate max-w-[150px]">{item.discoveryLocation}</span>
                  <span className="text-amber-500 font-mono group-hover:underline">
                    Examine →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Clue Inspector Modal */}
      <EvidenceDetailModal
        evidence={selectedClue}
        onClose={() => setSelectedClue(null)}
      />
    </div>
  );
};
