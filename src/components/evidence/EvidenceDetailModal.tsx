import React, { useState } from 'react';
import {
  X,
  Pin,
  Microscope,
  FileSearch,
  Users,
  CheckCircle2,
  ExternalLink,
  ShieldAlert,
  Tag
} from 'lucide-react';
import { EvidenceItem } from '../../types/game';
import { useGame } from '../../context/GameContext';
import { sound } from '../../utils/audio';
import { getLocalizedCategory } from '../../i18n';

interface EvidenceDetailModalProps {
  evidence: EvidenceItem | null;
  onClose: () => void;
}

export const EvidenceDetailModal: React.FC<EvidenceDetailModalProps> = ({ evidence, onClose }) => {
  const { caseState, toggleMarkImportant, setInvestigationTab, activeCase, language, t, getLoc } = useGame();
  const [analyzingForensics, setAnalyzingForensics] = useState(false);
  const [forensicRevealed, setForensicRevealed] = useState(false);

  if (!evidence || !caseState || !activeCase) return null;

  const isMarked = caseState.markedImportantClueIds.includes(evidence.id);

  const handleRunForensicTest = () => {
    sound.playTypewriter();
    setAnalyzingForensics(true);
    setTimeout(() => {
      setAnalyzingForensics(false);
      setForensicRevealed(true);
      sound.playClueFound();
    }, 800);
  };

  const relatedSuspects = activeCase.suspects.filter(s =>
    evidence.relatedSuspectIds.includes(s.id)
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md font-mono">
      <div className="relative w-full max-w-2xl bg-noir-900 border border-noir-700 rounded shadow-2xl overflow-hidden text-noir-200 flex flex-col max-h-[85vh]">
        {/* Header - Styled like an Official Forensic Evidence Tag */}
        <div className="bg-[#12161f] px-6 py-4 border-b border-noir-750 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-xs px-2.5 py-0.5 rounded bg-blood-950 text-blood-400 border border-blood-800 font-bold uppercase tracking-wider">
              {getLocalizedCategory(evidence.category, language)}
            </span>
            <div>
              <span className="text-[10px] text-noir-500 font-mono">
                {evidence.id} • EVIDENCE SEIZED
              </span>
              <h2 className="font-serif font-bold text-sm sm:text-base text-white tracking-wide">
                {getLoc(evidence.name)}
              </h2>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => toggleMarkImportant(evidence.id)}
              className={`p-1.5 rounded border transition-colors ${
                isMarked
                  ? 'bg-blood-700 border-blood-600 text-white'
                  : 'bg-noir-850 border-noir-750 text-noir-400 hover:text-white'
              }`}
              title={isMarked ? t('unmarkCrucial') : t('markCrucial')}
            >
              <Pin className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded text-noir-400 hover:text-white hover:bg-noir-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {/* Manila Case File Card */}
          <div className="bg-[#141720] p-4 rounded border border-[#262c3a] space-y-3">
            <div className="flex justify-between items-center text-xs text-noir-400 border-b border-noir-750 pb-2">
              <span>
                <strong className="text-noir-300">{t('incidentLocation')}:</strong> {getLoc(evidence.discoveryLocation)}
              </span>
              {evidence.isCrucial && (
                <span className="text-blood-400 font-bold flex items-center gap-1">
                  <ShieldAlert className="w-3.5 h-3.5" /> {t('crucialEvidence')}
                </span>
              )}
            </div>

            <p className="text-xs text-noir-200 leading-relaxed">
              {getLoc(evidence.description)}
            </p>

            <div className="text-xs text-brass-300 italic bg-[#0f1218] p-3 rounded border border-noir-800">
              <strong className="text-brass-400 not-italic uppercase text-[10px] block mb-1">
                {t('relevanceLabel')}
              </strong>
              {getLoc(evidence.relevance)}
            </div>
          </div>

          {/* Forensic Itemized Details */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-bold text-noir-400 flex items-center gap-1.5">
              <FileSearch className="w-4 h-4 text-cyan-400" /> {t('labObservations')}
            </h4>
            <div className="bg-[#141720] p-3.5 rounded border border-[#262c3a] space-y-2">
              {evidence.details.map((detail, idx) => (
                <div key={idx} className="flex items-start space-x-2 text-xs text-noir-300">
                  <span className="text-blood-400 font-bold">•</span>
                  <span>{getLoc(detail)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Forensic Chemical / Spectroscopic Test Simulation */}
          <div className="bg-[#141720] p-4 rounded border border-[#262c3a] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-bold text-brass-400 flex items-center gap-1.5">
                <Microscope className="w-4 h-4" /> {t('reagentAnalysis')}
              </span>

              {!forensicRevealed && !analyzingForensics && (
                <button
                  onClick={handleRunForensicTest}
                  className="px-3 py-1 bg-noir-850 hover:bg-noir-800 border border-noir-700 text-cyan-300 text-xs rounded transition-colors flex items-center gap-1"
                >
                  <Microscope className="w-3.5 h-3.5" /> {t('runReagentTest')}
                </button>
              )}
            </div>

            {analyzingForensics ? (
              <div className="py-4 text-center space-y-2 text-xs text-cyan-400 animate-pulse">
                <div>{t('runningReagentTest')}</div>
                <div className="w-32 mx-auto bg-noir-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-cyan-500 h-full w-full animate-pulse" />
                </div>
              </div>
            ) : forensicRevealed ? (
              <div className="bg-cyan-950/20 border border-cyan-800/40 p-3 rounded text-xs space-y-1 text-cyan-200">
                <div className="font-bold flex items-center gap-1 text-cyan-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> {t('reagentVerified')}
                </div>
                <p className="text-[11px] leading-relaxed text-cyan-100/80">
                  {language === 'bn'
                    ? 'রাসায়নিক ও অণুবীক্ষণিক বিশ্লেষণ সফলভাবে সম্পন্ন হয়েছে। এই আলামতের প্রতিটি বিবরণ ফরেনসিক ল্যাব দ্বারা সম্পূর্ণ সত্য ও নির্ভুল হিসেবে প্রত্যায়িত।'
                    : 'Chemical mass spectrometry complete. Composition matches authentic evidentiary notes; no tampering detected.'}
                </p>
              </div>
            ) : (
              <p className="text-[11px] text-noir-500 italic">
                {language === 'bn'
                  ? 'রিএজেন্ট পরীক্ষা অপেক্ষমাণ। বিস্তারিত রাসায়নিক বিশ্লেষণ চালাতে বোতামে ক্লিক করুন।'
                  : 'Reagent test pending. Run chemical analysis to confirm microscopic and chemical traces.'}
              </p>
            )}
          </div>

          {/* Connected Suspects */}
          {relatedSuspects.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-xs uppercase font-bold text-noir-400 flex items-center gap-1.5">
                <Users className="w-4 h-4 text-brass-400" /> {t('associatedSuspects')}
              </h4>
              <div className="flex flex-wrap gap-2">
                {relatedSuspects.map(suspect => (
                  <div
                    key={suspect.id}
                    className="px-2.5 py-1 rounded bg-noir-850 border border-noir-750 text-xs flex items-center space-x-1.5"
                  >
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: suspect.avatarColor }} />
                    <span className="text-white font-bold">{getLoc(suspect.name)}</span>
                    <span className="text-noir-500 text-[10px]">({getLoc(suspect.role)})</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="bg-noir-950 px-6 py-4 border-t border-noir-800 flex items-center justify-between">
          <button
            onClick={() => {
              onClose();
              setInvestigationTab('board');
            }}
            className="px-4 py-2 bg-noir-850 hover:bg-noir-800 border border-noir-750 text-brass-300 text-xs font-mono rounded flex items-center space-x-1.5 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>{t('connectOnBoard')}</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 bg-blood-800 hover:bg-blood-700 text-white text-xs font-bold font-mono rounded transition-colors"
          >
            {t('doneBtn')}
          </button>
        </div>
      </div>
    </div>
  );
};
