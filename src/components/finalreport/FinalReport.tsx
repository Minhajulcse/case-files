import React, { useState } from 'react';
import {
  FileCheck2,
  Send,
  AlertTriangle,
  HelpCircle,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Clock,
  Pin
} from 'lucide-react';
import { useGame } from '../../context/GameContext';
import { FinalReportAnswers, FinalReportEvaluation } from '../../types/game';
import { CaseSolvedModal } from './CaseSolvedModal';
import { sound } from '../../utils/audio';
import { getLocalizedCategory } from '../../i18n';

export const FinalReport: React.FC = () => {
  const {
    activeCase,
    caseState,
    submitFinalReport,
    language,
    t,
    formatNum,
    getLoc
  } = useGame();

  const [culpritId, setCulpritId] = useState<string>('');
  const [motiveId, setMotiveId] = useState<string>('');
  const [methodId, setMethodId] = useState<string>('');
  const [timeId, setTimeId] = useState<string>('');
  const [selectedEvidenceIds, setSelectedEvidenceIds] = useState<string[]>([]);
  const [falseAlibiSuspectId, setFalseAlibiSuspectId] = useState<string>('');
  const [detectiveTheory, setDetectiveTheory] = useState<string>('');

  const [evaluationResult, setEvaluationResult] = useState<FinalReportEvaluation | null>(
    caseState?.evaluation || null
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  if (!activeCase || !caseState) return null;

  const isBengali = language === 'bn';
  const { solution } = activeCase;
  const discoveredClues = activeCase.evidence.filter(e =>
    caseState.discoveredEvidenceIds.includes(e.id)
  );

  const toggleEvidence = (id: string) => {
    sound.playPaper();
    setSelectedEvidenceIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!culpritId) {
      setValidationError(isBengali ? 'দয়া করে অপরাধের মূল অপরাধীকে চিহ্নিত করুন।' : 'Please identify the primary perpetrator of the crime.');
      return;
    }
    if (!motiveId) {
      setValidationError(isBengali ? 'দয়া করে অপরাধের পেছনে মূল উদ্দেশ্য নির্ধারণ করুন।' : 'Please specify the underlying motive for the crime.');
      return;
    }
    if (!methodId) {
      setValidationError(isBengali ? 'দয়া করে অপরাধ সংঘটনের পদ্ধতি বা কৌশল (মোডাস অপারেন্ডি) নির্বাচন করুন।' : 'Please select the operational method (Modus Operandi).');
      return;
    }
    if (!timeId) {
      setValidationError(isBengali ? 'দয়া করে অপরাধ সংঘটনের সঠিক সময় নির্বাচন করুন।' : 'Please select the verified incident time window.');
      return;
    }
    if (selectedEvidenceIds.length === 0) {
      setValidationError(isBengali ? 'অভিযোগ প্রমাণে অন্তত একটি ভৌত বা ডিজিটাল আলামত নির্বাচন করুন।' : 'Please cite at least one piece of supporting physical or digital evidence.');
      return;
    }
    if (!falseAlibiSuspectId) {
      setValidationError(isBengali ? 'কোন সন্দেহভাজন ব্যক্তি মিথ্যা বা সাজানো অ্যালিবাই দিয়েছেন তা চিহ্নিত করুন।' : 'Please designate which suspect fabricated an alibi.');
      return;
    }

    setValidationError(null);

    const answers: FinalReportAnswers = {
      culpritId,
      motiveId,
      methodId,
      timeId,
      crucialEvidenceIds: selectedEvidenceIds,
      falseAlibiSuspectId,
      detectiveTheory
    };

    const evalResult = submitFinalReport(answers);
    setEvaluationResult(evalResult);
    setIsModalOpen(true);
  };

  return (
    <div className={`min-h-[calc(100vh-105px)] bg-noir-950 p-4 sm:p-6 select-none ${isBengali ? 'font-bengali' : 'font-mono'}`}>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Indictment Header */}
        <div className="bg-noir-900 border border-noir-800 rounded-lg p-5 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <FileCheck2 className="w-5 h-5 text-blood-500" />
              <h2 className="font-serif font-bold text-base text-white tracking-wide">
                {t('indictmentTitle')}
              </h2>
            </div>
            <p className="text-xs text-noir-400 mt-0.5 leading-relaxed">
              {isBengali ? 'মামলা নং' : 'Case #'} {formatNum(activeCase.caseNumber)} — {t('indictmentSubtitle')}
            </p>
          </div>

          {caseState.isCompleted && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 bg-green-950 hover:bg-green-900 border border-green-700 text-green-300 rounded text-xs font-bold transition-colors flex items-center gap-1.5"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{t('reviewVerdictBtn')}</span>
            </button>
          )}
        </div>

        {/* Validation Error Banner */}
        {validationError && (
          <div className="bg-blood-950/80 border border-blood-700 p-4 rounded-lg flex items-center space-x-2 text-xs text-blood-200 animate-pulse">
            <AlertTriangle className="w-4 h-4 flex-shrink-0 text-blood-400" />
            <span>{validationError}</span>
          </div>
        )}

        {/* Formal Indictment Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Question 1: Culprit Identification */}
          <div className="bg-noir-900 p-5 rounded-lg border border-noir-800 space-y-3 shadow-md">
            <div className="flex items-center justify-between">
              <label className="text-xs uppercase font-bold text-amber-400 tracking-wider">
                {t('q1Culprit')}
              </label>
              <span className="text-[10px] text-noir-500">{t('requiredField')}</span>
            </div>
            <p className="text-xs text-noir-400 leading-relaxed">
              {t('q1Desc')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-1">
              {activeCase.suspects.map(suspect => {
                const isSelected = culpritId === suspect.id;
                const suspectName = getLoc(suspect.name);
                const suspectRole = getLoc(suspect.role);

                return (
                  <div
                    key={suspect.id}
                    onClick={() => {
                      sound.playPaper();
                      setCulpritId(suspect.id);
                    }}
                    className={`p-3 rounded-lg border cursor-pointer text-xs transition-all flex items-center space-x-3 ${
                      isSelected
                        ? 'bg-blood-950/80 border-blood-500 shadow-md ring-1 ring-blood-500'
                        : 'bg-noir-950 border-noir-800 hover:border-noir-700'
                    }`}
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs text-white flex-shrink-0 shadow-inner"
                      style={{ backgroundColor: suspect.avatarColor }}
                    >
                      {suspectName.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold text-white truncate">{suspectName}</div>
                      <div className="text-[10px] text-noir-400 truncate">{suspectRole}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Question 2: Underlying Motive */}
          <div className="bg-noir-900 p-5 rounded-lg border border-noir-800 space-y-3 shadow-md">
            <label className="text-xs uppercase font-bold text-amber-400 tracking-wider block">
              {t('q2Motive')}
            </label>
            <p className="text-xs text-noir-400 leading-relaxed">
              {t('q2Desc')}
            </p>

            <div className="space-y-2 pt-1">
              {solution.options.motives.map(m => {
                const isSelected = motiveId === m.id;

                return (
                  <div
                    key={m.id}
                    onClick={() => {
                      sound.playPaper();
                      setMotiveId(m.id);
                    }}
                    className={`p-3 rounded-lg border cursor-pointer text-xs transition-all flex items-center space-x-3 ${
                      isSelected
                        ? 'bg-blood-950/80 border-blood-500 text-white font-bold'
                        : 'bg-noir-950 border-noir-800 text-noir-300 hover:border-noir-700'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 ${
                        isSelected
                          ? 'border-blood-500 bg-blood-600'
                          : 'border-noir-700 bg-noir-800'
                      }`}
                    >
                      {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                    <span>{getLoc(m.label)}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Question 3: Modus Operandi (Method) */}
          <div className="bg-noir-900 p-5 rounded-lg border border-noir-800 space-y-3 shadow-md">
            <label className="text-xs uppercase font-bold text-amber-400 tracking-wider block">
              {t('q3Method')}
            </label>
            <p className="text-xs text-noir-400 leading-relaxed">
              {t('q3Desc')}
            </p>

            <div className="space-y-2 pt-1">
              {solution.options.methods.map(met => {
                const isSelected = methodId === met.id;

                return (
                  <div
                    key={met.id}
                    onClick={() => {
                      sound.playPaper();
                      setMethodId(met.id);
                    }}
                    className={`p-3 rounded-lg border cursor-pointer text-xs transition-all flex items-center space-x-3 ${
                      isSelected
                        ? 'bg-blood-950/80 border-blood-500 text-white font-bold'
                        : 'bg-noir-950 border-noir-800 text-noir-300 hover:border-noir-700'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 ${
                        isSelected
                          ? 'border-blood-500 bg-blood-600'
                          : 'border-noir-700 bg-noir-800'
                      }`}
                    >
                      {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                    <span>{getLoc(met.label)}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Question 4: Incident Time Window */}
          <div className="bg-noir-900 p-5 rounded-lg border border-noir-800 space-y-3 shadow-md">
            <label className="text-xs uppercase font-bold text-amber-400 tracking-wider block">
              {t('q4Time')}
            </label>
            <p className="text-xs text-noir-400 leading-relaxed">
              {t('q4Desc')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {solution.options.times.map(tOpt => {
                const isSelected = timeId === tOpt.id;

                return (
                  <div
                    key={tOpt.id}
                    onClick={() => {
                      sound.playPaper();
                      setTimeId(tOpt.id);
                    }}
                    className={`p-3 rounded-lg border cursor-pointer text-xs transition-all flex items-center space-x-3 ${
                      isSelected
                        ? 'bg-blood-950/80 border-blood-500 text-white font-bold'
                        : 'bg-noir-950 border-noir-800 text-noir-300 hover:border-noir-700'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 ${
                        isSelected
                          ? 'border-blood-500 bg-blood-600'
                          : 'border-noir-700 bg-noir-800'
                      }`}
                    >
                      {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                    <span>{getLoc(tOpt.label)}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Question 5: Supporting Crucial Evidence (Multi-select) */}
          <div className="bg-noir-900 p-5 rounded-lg border border-noir-800 space-y-3 shadow-md">
            <div className="flex items-center justify-between">
              <label className="text-xs uppercase font-bold text-amber-400 tracking-wider">
                {t('q5Evidence')}
              </label>
              <span className="text-[10px] text-noir-400">
                {formatNum(selectedEvidenceIds.length)} {t('selectedCount')}
              </span>
            </div>
            <p className="text-xs text-noir-400 leading-relaxed">
              {t('q5Desc')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {discoveredClues.map(clue => {
                const isChecked = selectedEvidenceIds.includes(clue.id);

                return (
                  <div
                    key={clue.id}
                    onClick={() => toggleEvidence(clue.id)}
                    className={`p-3 rounded-lg border cursor-pointer text-xs transition-all flex items-start space-x-3 ${
                      isChecked
                        ? 'bg-blood-950/70 border-blood-500 text-white'
                        : 'bg-noir-950 border-noir-800 text-noir-400 hover:border-noir-700'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => {}}
                      className="mt-0.5 accent-blood-600 rounded cursor-pointer"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="font-bold truncate text-white">{getLoc(clue.name)}</div>
                      <div className="text-[10px] text-noir-500 truncate">{getLocalizedCategory(clue.category, language)}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Question 6: False Alibi Identification */}
          <div className="bg-noir-900 p-5 rounded-lg border border-noir-800 space-y-3 shadow-md">
            <label className="text-xs uppercase font-bold text-amber-400 tracking-wider block">
              {t('q6FalseAlibi')}
            </label>
            <p className="text-xs text-noir-400 leading-relaxed">
              {t('q6Desc')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
              {activeCase.suspects.map(suspect => {
                const isSelected = falseAlibiSuspectId === suspect.id;

                return (
                  <div
                    key={suspect.id}
                    onClick={() => {
                      sound.playPaper();
                      setFalseAlibiSuspectId(suspect.id);
                    }}
                    className={`p-3 rounded-lg border cursor-pointer text-xs transition-all flex items-center space-x-2.5 ${
                      isSelected
                        ? 'bg-blood-950/80 border-blood-500 text-white font-bold'
                        : 'bg-noir-950 border-noir-800 text-noir-300 hover:border-noir-700'
                    }`}
                  >
                    <div
                      className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center flex-shrink-0 ${
                        isSelected
                          ? 'border-blood-500 bg-blood-600'
                          : 'border-noir-700 bg-noir-800'
                      }`}
                    >
                      {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                    <span className="truncate">{getLoc(suspect.name)}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detective Freeform Case Summary Notes */}
          <div className="bg-noir-900 p-5 rounded-lg border border-noir-800 space-y-2 shadow-md">
            <label className="text-xs uppercase font-bold text-noir-300 tracking-wider block">
              {t('detectiveTheoryLabel')}
            </label>
            <textarea
              value={detectiveTheory}
              onChange={(e) => setDetectiveTheory(e.target.value)}
              placeholder={t('detectiveTheoryPlaceholder')}
              rows={4}
              className="w-full bg-noir-950 border border-noir-700 rounded p-3 text-xs text-white placeholder-noir-600 focus:outline-none focus:border-blood-600 leading-relaxed"
            />
          </div>

          {/* Submit Action */}
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="px-8 py-3.5 bg-gradient-to-r from-blood-700 to-blood-800 hover:from-blood-600 hover:to-blood-700 text-white font-serif font-bold text-sm tracking-wider uppercase rounded-lg shadow-xl border border-blood-500/80 flex items-center space-x-2 transition-all transform hover:-translate-y-0.5"
            >
              <Send className="w-4 h-4" />
              <span>{t('deliverIndictmentBtn')}</span>
            </button>
          </div>
        </form>
      </div>

      {/* Case Solved Debriefing Modal */}
      <CaseSolvedModal
        isOpen={isModalOpen}
        evaluation={evaluationResult}
        activeCase={activeCase}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
