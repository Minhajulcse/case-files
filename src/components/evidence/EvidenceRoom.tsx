import React, { useState } from 'react';
import {
  FolderOpen,
  Search,
  Pin,
  Lock,
  FileText,
  Smartphone,
  Eye,
  Camera,
  FileCheck2,
  Package,
  ShieldAlert,
  Tag
} from 'lucide-react';
import { useGame } from '../../context/GameContext';
import { EvidenceCategory, EvidenceItem } from '../../types/game';
import { EvidenceDetailModal } from './EvidenceDetailModal';
import { sound } from '../../utils/audio';
import { getLocalizedCategory } from '../../i18n';

export const EvidenceRoom: React.FC = () => {
  const { activeCase, caseState, toggleMarkImportant, selectedClueForInspection, setSelectedClueForInspection, language, t, getLoc, formatNum } = useGame();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const selectedClue = activeCase?.evidence.find(e => e.id===selectedClueForInspection && caseState?.discoveredEvidenceIds.includes(e.id));

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
    if (searchQuery.trim() && !discoveredSet.has(item.id)) return false;
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const nameStr = getLoc(item.name).toLowerCase();
    const descStr = getLoc(item.description).toLowerCase();
    const locStr = getLoc(item.discoveryLocation).toLowerCase();
    const q = searchQuery.toLowerCase();
    const matchesSearch = searchQuery === '' || nameStr.includes(q) || descStr.includes(q) || locStr.includes(q);
    return matchesCat && matchesSearch;
  });

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
    setSelectedClueForInspection(clue.id);
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
    <div className="locker workspace-wrap">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Controls Header: Category Tabs & Search Bar */}
        <div className="bg-[#12151c] border border-[#232936] rounded p-4 space-y-4 shadow-dossier">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="flex items-center space-x-2">
                <FolderOpen className="w-5 h-5 text-brass-400" />
                <h2 className="font-serif font-bold text-base text-white tracking-wide">
                  {t('evidenceRepoTitle')}
                </h2>
              </div>
              <p className="text-[11px] text-noir-400 mt-0.5">
                {formatNum(discoveredSet.size)} / {formatNum(activeCase.evidence.length)} · {t('evidenceLogged')}
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-noir-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="search" aria-label={t('searchPlaceholder')}
                placeholder={t('searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0a0c10] border border-[#272d3c] rounded pl-9 pr-3 py-1.5 text-xs text-white placeholder-noir-500 focus:outline-none focus:border-blood-600"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center overflow-x-auto scrollbar-none gap-2 pt-2 border-t border-[#1e232e]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded text-xs whitespace-nowrap transition-all flex items-center space-x-1.5 ${
                  selectedCategory === cat
                    ? 'bg-blood-900 border border-blood-700 text-white font-bold'
                    : 'bg-[#0e1015] border border-[#242936] text-noir-400 hover:text-white hover:bg-[#161a22]'
                }`}
              >
                {cat !== 'All' && getCategoryIcon(cat as EvidenceCategory)}
                <span>{cat === 'All' ? t('catAll') : getLocalizedCategory(cat as EvidenceCategory, language)}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Evidence Grid Styled as Police Evidence Bags / Folders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {sortedEvidence.length===0 && <p role="status">{language==='bn'?'এই নির্বাচনে কোনো আলামত নেই।':'No exhibits match this selection.'}</p>}
          {sortedEvidence.map((item) => {
            const isDiscovered = discoveredSet.has(item.id);
            const isMarked = caseState.markedImportantClueIds.includes(item.id);

            if (!isDiscovered) {
              return (
                <div
                  key={item.id}
                  className="bg-[#0e1014]/60 border border-dashed border-[#232733] rounded p-5 flex flex-col justify-between min-h-[170px] opacity-65"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-noir-500 uppercase tracking-widest font-bold">
                      {getLocalizedCategory(item.category, language)}
                    </span>
                    <Lock className="w-3.5 h-3.5 text-noir-600" />
                  </div>

                  <div className="text-center py-4">
                    <div className="w-9 h-9 mx-auto rounded-full bg-[#13161d] border border-[#232936] flex items-center justify-center text-noir-600 mb-2">
                      <Lock className="w-4 h-4" />
                    </div>
                    <span className="text-xs text-noir-400 font-bold block">
                      {t('undiscoveredEvidence')}
                    </span>
                    <span className="text-[10px] text-noir-600 mt-1 block">
                      {t('undiscoveredHint')}
                    </span>
                  </div>

                  <div className="text-[10px] text-noir-600 text-right">
                    {t('slotLabel')}{formatNum(String(activeCase.evidence.indexOf(item)+1).padStart(2,'0'))}
                  </div>
                </div>
              );
            }

            return (
              <article
                key={item.id}
                onClick={() => handleClueClick(item)}
                className={`group relative bg-[#12151c] border rounded p-4 flex flex-col justify-between min-h-[180px] cursor-pointer transition-all duration-200 shadow hover:shadow-dossier hover:-translate-y-0.5 ${
                  isMarked
                    ? 'border-blood-600 bg-[#161821]'
                    : 'border-[#262c3a] hover:border-brass-600/70'
                }`}
              >
                {/* Top Badge: Category & Pin Toggle */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-[#0a0c10] text-brass-400 border border-[#202530] flex items-center gap-1">
                    {getCategoryIcon(item.category)}
                    <span>{getLocalizedCategory(item.category, language)}</span>
                  </span>

                  <div className="flex items-center space-x-1.5">
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
                      title={isMarked ? t('unmarkCrucial') : t('markCrucial')} aria-pressed={isMarked}
                    >
                      <Pin className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Evidence Content */}
                <div className="space-y-1.5 flex-1">
                  <h3 className="font-serif font-bold text-xs sm:text-sm text-white group-hover:text-brass-200 transition-colors">
                    {getLoc(item.name)}
                  </h3>
                  <p className="text-xs text-noir-400 line-clamp-2 leading-relaxed">
                    {getLoc(item.description)}
                  </p>
                </div>

                {/* Card Bottom Meta */}
                <div className="pt-3 border-t border-[#1e232e] flex items-center justify-between text-[10px] text-noir-500">
                  <span className="truncate max-w-[150px]">{getLoc(item.discoveryLocation)}</span>
                  <button onClick={event=>{event.stopPropagation();handleClueClick(item);}} aria-label={getLoc(item.name)} className="text-brass-400 font-mono group-hover:underline">
                    {t('examinePrompt')}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Clue Inspector Modal */}
      {selectedClue && <EvidenceDetailModal key={selectedClue.id}
        evidence={selectedClue}
        onClose={() => setSelectedClueForInspection(null)}
      />}
    </div>
  );
};
