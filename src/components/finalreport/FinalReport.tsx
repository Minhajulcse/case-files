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

export const FinalReport: React.FC = () => {
  const { activeCase, caseState, submitFinalReport } = useGame();

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
      setValidationError('Please identify the primary perpetrator of the crime.');
      return;
    }
    if (!motiveId) {
      setValidationError('Please specify the underlying motive for the crime.');
      return;
    }
    if (!methodId) {
      setValidationError('Please select the operational method (Modus Operandi).');
      return;
    }
    if (!timeId) {
      setValidationError('Please select the verified incident time window.');
      return;
    }
    if (selectedEvidenceIds.length === 0) {
      setValidationError('Please cite at least one piece of supporting physical or digital evidence.');
      return;
    }
    if (!falseAlibiSuspectId) {
      setValidationError('Please designate which suspect fabricated an alibi.');
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
    <div className="min-h-[calc(100vh-105px)] bg-noir-950 p-4 sm:p-6 font-mono select-none">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Indictment Header */}
        <div className="bg-noir-900 border border-noir-800 rounded-lg p-5 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <FileCheck2 className="w-5 h-5 text-blood-500" />
              <h2 className="font-serif font-bold text-base text-white tracking-wide">
                OFFICIAL INDICTMENT & FINAL DEDUCTION REPORT
              </h2>
            </div>
            <p className="text-xs text-noir-400 mt-0.5">
              Case #{activeCase.caseNumber} — Submit your formal findings to the District Attorney.
            </p>
          </div>

          {caseState.isCompleted && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 bg-green-950 hover:bg-green-900 border border-green-700 text-green-300 rounded text-xs font-bold transition-colors flex items-center gap-1.5"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Review Solved Verdict</span>
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
                1. Identify the Primary Perpetrator / Culprit
              </label>
              <span className="text-[10px] text-noir-500">Required</span>
            </div>
            <p className="text-xs text-noir-400">
              Based on the physical clues, witness statements, and contradictions, who is responsible?
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-1">
              {activeCase.suspects.map(suspect => {
                const isSelected = culpritId === suspect.id;

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
                      className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs text-white flex-shrink-0"
                      style={{ backgroundColor: suspect.avatarColor }}
                    >
                      {suspect.name.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold text-white truncate">{suspect.name}</div>
                      <div className="text-[10px] text-noir-400 truncate">{suspect.role}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Question 2: Underlying Motive */}
          <div className="bg-noir-900 p-5 rounded-lg border border-noir-800 space-y-3 shadow-md">
            <label className="text-xs uppercase font-bold text-amber-400 tracking-wider block">
              2. True Underlying Motive
            </label>
            <p className="text-xs text-noir-400">
              What compelled the perpetrator to execute this crime at this exact moment?
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
                    <span>{m.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Question 3: Modus Operandi (Method) */}
          <div className="bg-noir-900 p-5 rounded-lg border border-noir-800 space-y-3 shadow-md">
            <label className="text-xs uppercase font-bold text-amber-400 tracking-wider block">
              3. Modus Operandi (Execution Method & Technique)
            </label>
            <p className="text-xs text-noir-400">
              How did the perpetrator overcome security, poison the victim, or stage the impossible scenario?
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
                    <span>{met.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Question 4: Incident Time Window */}
          <div className="bg-noir-900 p-5 rounded-lg border border-noir-800 space-y-3 shadow-md">
            <label className="text-xs uppercase font-bold text-amber-400 tracking-wider block">
              4. Verified Crime / Execution Time Window
            </label>
            <p className="text-xs text-noir-400">
              Pinpoint the authentic time of the critical event based on physical evidence and timeline reconstruction.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {solution.options.times.map(t => {
                const isSelected = timeId === t.id;

                return (
                  <div
                    key={t.id}
                    onClick={() => {
                      sound.playPaper();
                      setTimeId(t.id);
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
                    <span>{t.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Question 5: Supporting Crucial Evidence (Multi-select) */}
          <div className="bg-noir-900 p-5 rounded-lg border border-noir-800 space-y-3 shadow-md">
            <div className="flex items-center justify-between">
              <label className="text-xs uppercase font-bold text-amber-400 tracking-wider">
                5. Corroborating Physical & Digital Evidence
              </label>
              <span className="text-[10px] text-noir-400">
                {selectedEvidenceIds.length} Selected
              </span>
            </div>
            <p className="text-xs text-noir-400">
              Select all key pieces of evidence from your locker that substantiate this indictment in a court of law.
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
                      <div className="font-bold truncate text-white">{clue.name}</div>
                      <div className="text-[10px] text-noir-500 truncate">{clue.category}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Question 6: False Alibi Identification */}
          <div className="bg-noir-900 p-5 rounded-lg border border-noir-800 space-y-3 shadow-md">
            <label className="text-xs uppercase font-bold text-amber-400 tracking-wider block">
              6. False Alibi Exposure
            </label>
            <p className="text-xs text-noir-400">
              Which suspect presented an alibi that was directly shattered by contradictions in the evidence?
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
                    <span className="truncate">{suspect.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detective Freeform Case Summary Notes */}
          <div className="bg-noir-900 p-5 rounded-lg border border-noir-800 space-y-2 shadow-md">
            <label className="text-xs uppercase font-bold text-noir-300 tracking-wider block">
              Detective Theory & Closing Argument (Optional)
            </label>
            <textarea
              value={detectiveTheory}
              onChange={(e) => setDetectiveTheory(e.target.value)}
              placeholder="Draft your overarching deductive closing argument summarizing how the evidence seals the verdict..."
              rows={4}
              className="w-full bg-noir-950 border border-noir-700 rounded p-3 text-xs text-white placeholder-noir-600 focus:outline-none focus:border-blood-600"
            />
          </div>

          {/* Submit Action */}
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="px-8 py-3.5 bg-gradient-to-r from-blood-700 to-blood-800 hover:from-blood-600 hover:to-blood-700 text-white font-serif font-bold text-sm tracking-wider uppercase rounded-lg shadow-xl border border-blood-500/80 flex items-center space-x-2 transition-all transform hover:-translate-y-0.5"
            >
              <Send className="w-4 h-4" />
              <span>Deliver Official Indictment</span>
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
