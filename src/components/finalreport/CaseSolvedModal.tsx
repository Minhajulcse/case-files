import React from 'react';
import {
  Award,
  CheckCircle2,
  XCircle,
  ShieldAlert,
  ArrowRight,
  RotateCcw,
  Star,
  FileText
} from 'lucide-react';
import { FinalReportEvaluation, CaseData } from '../../types/game';
import { useGame } from '../../context/GameContext';
import { sound } from '../../utils/audio';

interface CaseSolvedModalProps {
  isOpen: boolean;
  evaluation: FinalReportEvaluation | null;
  activeCase: CaseData;
  onClose: () => void;
}

export const CaseSolvedModal: React.FC<CaseSolvedModalProps> = ({
  isOpen,
  evaluation,
  activeCase,
  onClose
}) => {
  const { setCurrentView, profile } = useGame();

  if (!isOpen || !evaluation) return null;

  const isPassed = evaluation.accuracyScore >= 60;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto font-mono text-noir-200">
      <div className="relative w-full max-w-3xl bg-noir-900 border-2 border-noir-700 rounded-lg shadow-2xl overflow-hidden my-8">
        {/* Classified Header */}
        <div className="bg-noir-950 px-6 py-5 border-b border-noir-800 flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <span className="classified-stamp text-xs">
                {isPassed ? 'CASE CLOSED' : 'INSUFFICIENT EVIDENCE'}
              </span>
              <span className="text-[10px] text-noir-400 font-bold uppercase tracking-widest">
                DEPARTMENT INDICTMENT VERDICT
              </span>
            </div>
            <h2 className="font-serif font-bold text-xl text-white tracking-wide mt-1">
              {activeCase.title} — Official Review
            </h2>
          </div>

          {/* Performance Grade Medal */}
          <div className="flex flex-col items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-600/20 to-blood-900/40 border-2 border-amber-500/80 shadow-lg">
            <span className="text-[10px] text-amber-400 font-bold uppercase">GRADE</span>
            <span className="text-2xl font-serif font-black text-amber-200">
              {evaluation.performanceGrade}
            </span>
          </div>
        </div>

        {/* Evaluation Metrics Breakdown */}
        <div className="p-6 space-y-6 max-h-[65vh] overflow-y-auto">
          {/* Top Score & Accuracy Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
            <div className="bg-noir-950 p-4 rounded-lg border border-noir-800">
              <span className="text-[10px] text-noir-400 uppercase tracking-wider">
                Accuracy Rating
              </span>
              <div className="text-2xl font-bold text-amber-400 mt-0.5">
                {evaluation.accuracyScore}%
              </div>
            </div>

            <div className="bg-noir-950 p-4 rounded-lg border border-noir-800">
              <span className="text-[10px] text-noir-400 uppercase tracking-wider">
                Investigation Points
              </span>
              <div className="text-2xl font-bold text-green-400 mt-0.5">
                +{evaluation.pointsAwarded} PTS
              </div>
            </div>

            <div className="bg-noir-950 p-4 rounded-lg border border-noir-800">
              <span className="text-[10px] text-noir-400 uppercase tracking-wider">
                Detective Rank
              </span>
              <div className="text-sm font-bold text-amber-200 mt-2 truncate">
                {profile.rank}
              </div>
            </div>
          </div>

          {/* Detailed Points of Indictment Checklist */}
          <div className="bg-noir-950 p-4 rounded-lg border border-noir-800 space-y-2 text-xs">
            <span className="text-[10px] uppercase font-bold text-noir-400 tracking-wider block mb-1">
              Bureau Audit Verification
            </span>
            <div className="space-y-1.5">
              {evaluation.feedbackNotes.map((note, idx) => (
                <div key={idx} className="flex items-start space-x-2 text-noir-300">
                  <span className="text-blood-400 font-bold">•</span>
                  <span>{note}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Canonical Debriefing Story Narrative */}
          <div className="bg-noir-950 p-5 rounded-lg border border-amber-600/40 space-y-3">
            <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
              <FileText className="w-4 h-4" />
              <span>Full Investigation Canonical Debriefing</span>
            </div>

            <div className="text-xs text-noir-200 leading-relaxed space-y-3 whitespace-pre-line font-mono bg-noir-900/80 p-4 rounded border border-noir-800/80">
              {evaluation.fullDebriefing}
            </div>
          </div>
        </div>

        {/* Footer Navigation Actions */}
        <div className="bg-noir-950 px-6 py-4 border-t border-noir-800 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-noir-800 hover:bg-noir-700 text-noir-300 text-xs font-mono rounded transition-colors flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Review Investigation</span>
          </button>

          <button
            onClick={() => {
              sound.playPaper();
              setCurrentView('cases');
            }}
            className="px-5 py-2 bg-blood-600 hover:bg-blood-500 text-white text-xs font-bold font-mono rounded shadow-lg flex items-center space-x-2 transition-all transform hover:-translate-y-0.5"
          >
            <span>Proceed to Case Files Archive</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
