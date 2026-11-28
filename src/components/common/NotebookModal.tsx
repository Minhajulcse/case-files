import { Dialog } from './Dialog';
import React from 'react';
import { X, BookOpen, Target, FileText, CheckCircle2 } from 'lucide-react';
import { useGame } from '../../context/GameContext';

interface NotebookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NotebookModal: React.FC<NotebookModalProps> = ({ isOpen, onClose }) => {
  const { activeCase, caseState, updateCaseNotes, t, getLoc, formatNum } = useGame();

  if (!isOpen || !activeCase || !caseState) return null;

  return (
    <Dialog label={t('notebookTitle')} onClose={onClose}>
      <div className="relative w-full max-w-3xl max-h-[85vh] bg-[#141210] border border-[#3e342a] rounded shadow-2xl overflow-hidden flex flex-col font-mono text-noir-200">
        {/* Leather Notebook Header */}
        <div className="bg-[#1c1814] px-6 py-4 border-b border-[#30271f] flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <BookOpen className="w-5 h-5 text-brass-400" />
            <div>
              <h2 className="font-serif tracking-wide text-base text-parchment-100 font-bold">
                {t('notebookTitle')}
              </h2>
              <span className="text-xs text-noir-400">
                {activeCase.caseNumber} — {getLoc(activeCase.title)}
              </span>
            </div>
          </div>
          <button
            onClick={onClose} aria-label={t('closeBtn')}
            className="p-1 rounded text-noir-400 hover:text-white hover:bg-noir-800/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notebook Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#110f0d] text-sm">
          {/* Mission Briefing Section */}
          <div className="bg-[#181512] p-4 rounded border border-[#2b221a]">
            <div className="flex items-center space-x-2 text-brass-400 text-xs font-bold uppercase mb-2">
              <FileText className="w-4 h-4" />
              <span>{t('notebookDirective')}</span>
            </div>
            <p className="text-xs text-noir-300 leading-relaxed italic mb-3">
              "{getLoc(activeCase.briefing.chiefMemo)}"
            </p>
            <div className="space-y-1.5 pt-2 border-t border-[#261f18]">
              <span className="text-[11px] uppercase tracking-wider text-brass-400 font-bold flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5" /> {t('objectives')}
              </span>
              <ul className="space-y-1 text-xs text-noir-300">
                {activeCase.briefing.keyObjectives.map((obj, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-blood-400 font-bold">[{formatNum(i + 1)}]</span>
                    <span>{getLoc(obj)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Real-time Case Investigation Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="bg-[#181512] p-3 rounded border border-[#2b221a]">
              <span className="text-[10px] text-noir-400 uppercase">{t('evidenceLogged')}</span>
              <div className="text-base font-bold text-brass-300 mt-1">
                {formatNum(caseState.discoveredEvidenceIds.length)} / {formatNum(activeCase.evidence.length)}
              </div>
            </div>
            <div className="bg-[#181512] p-3 rounded border border-[#2b221a]">
              <span className="text-[10px] text-noir-400 uppercase">{t('boardConnectionsCount')}</span>
              <div className="text-base font-bold text-cyan-300 mt-1">
                {formatNum(caseState.userConnections.length)}
              </div>
            </div>
            <div className="bg-[#181512] p-3 rounded border border-[#2b221a]">
              <span className="text-[10px] text-noir-400 uppercase">{t('hintsUsedCount')}</span>
              <div className="text-base font-bold text-blood-400 mt-1">
                {formatNum(caseState.unlockedHintLevels.length)} / {formatNum(3)}
              </div>
            </div>
            <div className="bg-[#181512] p-3 rounded border border-[#2b221a]">
              <span className="text-[10px] text-noir-400 uppercase">{t('caseStatusLabel')}</span>
              <div className="text-xs font-bold text-green-400 mt-1 flex items-center gap-1">
                {caseState.isCompleted ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500" /> {t('solved')}
                  </>
                ) : (
                  t('active')
                )}
              </div>
            </div>
          </div>

          {/* Detective Freeform Case Journal / Notes */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-xs uppercase font-bold tracking-wider text-noir-300">
                {t('notebookFieldNotes')}
              </label>
              <span className="text-[10px] text-noir-500">{t('autoSaved')}</span>
            </div>
            <textarea
              value={caseState.caseNotes}
              onChange={(e) => updateCaseNotes(e.target.value)}
              placeholder={t('notebookNotesPlaceholder')}
              rows={7}
              className="w-full bg-[#161310] border border-[#2e251d] rounded p-3 text-xs font-mono text-parchment-100 placeholder-noir-600 focus:outline-none focus:border-brass-600"
            />
          </div>
        </div>

        {/* Notebook Footer */}
        <div className="bg-[#181512] px-6 py-3 border-t border-[#261f18] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#2b221a] hover:bg-[#382d23] text-parchment-100 text-xs font-mono rounded transition-colors"
          >
            {t('closeNotebook')}
          </button>
        </div>
      </div>
    </Dialog>
  );
};
