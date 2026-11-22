import React, { useState } from 'react';
import {
  Users,
  MessageSquare,
  AlertTriangle,
  Flame,
  ShieldAlert,
  HelpCircle,
  CheckCircle2,
  Lock,
  ChevronRight,
  UserCheck,
  Eye,
  FileQuestion,
  Disc3,
  Mic
} from 'lucide-react';
import { useGame } from '../../context/GameContext';
import { Suspect, DialogueOption } from '../../types/game';
import { PresentEvidenceModal } from './PresentEvidenceModal';
import { sound } from '../../utils/audio';

export const InterrogationRoom: React.FC = () => {
  const {
    activeCase,
    caseState,
    askDialogue,
    presentClueToSuspect,
    language,
    t,
    formatNum,
    getLoc
  } = useGame();

  const [selectedSuspectId, setSelectedSuspectId] = useState<string>(() => {
    return activeCase?.suspects[0]?.id || '';
  });
  const [isPresentModalOpen, setIsPresentModalOpen] = useState(false);
  const [lastConfrontationResult, setLastConfrontationResult] = useState<{
    reaction: string;
    lieExposed: boolean;
    evidenceName: string;
  } | null>(null);

  if (!activeCase || !caseState) return null;

  const currentSuspect: Suspect | undefined =
    activeCase.suspects.find(s => s.id === selectedSuspectId) || activeCase.suspects[0];

  if (!currentSuspect) return null;

  const askedDialogueIds = caseState.askedDialogueIds[currentSuspect.id] || [];
  const currentStress = caseState.suspectStressLevels[currentSuspect.id] || 15;

  const handleAsk = (dialogue: DialogueOption) => {
    askDialogue(currentSuspect.id, dialogue.id);
  };

  const handleConfrontEvidence = (evidenceId: string) => {
    const clueObj = activeCase.evidence.find(e => e.id === evidenceId);
    const result = presentClueToSuspect(currentSuspect.id, evidenceId);
    setLastConfrontationResult({
      reaction: getLoc(result.reaction),
      lieExposed: result.lieExposed,
      evidenceName: clueObj ? getLoc(clueObj.name) : (language === 'bn' ? 'প্রমাণ আলামত' : 'Evidence Item')
    });
    setIsPresentModalOpen(false);
  };

  const isBengali = language === 'bn';

  return (
    <div className={`flex flex-col lg:flex-row h-[calc(100vh-105px)] bg-noir-950 select-none overflow-hidden ${isBengali ? 'font-bengali' : 'font-mono'}`}>
      {/* Left Column: Suspect Selector List */}
      <div className="w-full lg:w-72 bg-noir-900 border-b lg:border-b-0 lg:border-r border-noir-800 flex flex-col justify-between overflow-y-auto">
        <div className="p-4 space-y-3">
          <div className="flex items-center justify-between border-b border-noir-800 pb-2">
            <span className="text-xs uppercase font-bold text-amber-400 flex items-center gap-1.5 tracking-wider">
              <Users className="w-4 h-4 text-amber-500" /> {t('suspectRoster')}
            </span>
            <span className="text-[10px] text-noir-400 font-mono">
              {formatNum(activeCase.suspects.length)} {t('detainedLabel')}
            </span>
          </div>

          {/* Suspect Cards */}
          <div className="space-y-2">
            {activeCase.suspects.map((suspect) => {
              const isSelected = suspect.id === currentSuspect.id;
              const stress = caseState.suspectStressLevels[suspect.id] || 15;
              const suspectName = getLoc(suspect.name);
              const suspectRole = getLoc(suspect.role);

              return (
                <div
                  key={suspect.id}
                  onClick={() => {
                    sound.playPaper();
                    setSelectedSuspectId(suspect.id);
                    setLastConfrontationResult(null);
                  }}
                  className={`p-3 rounded-lg border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-blood-950/70 border-blood-600 shadow-md ring-1 ring-blood-500/50'
                      : 'bg-noir-950/80 border-noir-800 hover:border-noir-700'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    {/* Suspect Avatar Icon */}
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0 shadow-inner"
                      style={{ backgroundColor: suspect.avatarColor }}
                    >
                      {suspectName.charAt(0)}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs text-white truncate">
                          {suspectName}
                        </span>
                        <span className="text-[10px] text-noir-500 font-mono">
                          {formatNum(suspect.age)}{isBengali ? ' বছর' : 'y'}
                        </span>
                      </div>
                      <div className="text-[10px] text-amber-400/90 truncate">
                        {suspectRole}
                      </div>

                      {/* Mini Stress Bar */}
                      <div className="w-full bg-noir-800 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div
                          className={`h-full transition-all duration-500 ${
                            stress > 65
                              ? 'bg-blood-500'
                              : stress > 35
                              ? 'bg-amber-500'
                              : 'bg-green-500'
                          }`}
                          style={{ width: `${stress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Room Ambient Memo & Recording Indicator */}
        <div className="p-3 bg-noir-950 border-t border-noir-800 text-[11px] text-noir-400 flex items-center justify-between font-mono">
          <span className="flex items-center gap-1.5 text-noir-400 text-[10px]">
            <Disc3 className="w-3.5 h-3.5 text-amber-500 animate-spin" />
            <span>{t('observationMirror')}</span>
          </span>
          <span className="text-red-500 text-[10px] flex items-center gap-1 animate-pulse font-bold">
            <Mic className="w-3 h-3" />
            <span>{t('recordingLive')}</span>
          </span>
        </div>
      </div>

      {/* Center Column: Suspect Dossier & Psychological Breakdown */}
      <div className="w-full lg:w-96 bg-noir-950/90 border-b lg:border-b-0 lg:border-r border-noir-800 p-5 overflow-y-auto space-y-4">
        {/* Suspect Identification Header */}
        <div className="bg-noir-900 p-4 rounded-lg border border-noir-800 space-y-3">
          <div className="flex items-center space-x-3">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl text-white shadow-xl flex-shrink-0"
              style={{ backgroundColor: currentSuspect.avatarColor }}
            >
              {getLoc(currentSuspect.name).charAt(0)}
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-blood-400 tracking-wider">
                {t('subjectDossier')}
              </span>
              <h2 className="font-serif font-bold text-base text-white tracking-wide">
                {getLoc(currentSuspect.name)}
              </h2>
              <span className="text-xs text-noir-400 italic">
                "{getLoc(currentSuspect.alias)}"
              </span>
            </div>
          </div>

          <div className="pt-2 border-t border-noir-800 space-y-1.5 text-xs text-noir-300">
            <div>
              <strong className="text-noir-400">{t('occupationLabel')}:</strong>{' '}
              <span className="text-noir-200">{getLoc(currentSuspect.occupation)}</span>
            </div>
            <div>
              <strong className="text-noir-400">{t('relationLabel')}:</strong>{' '}
              <span className="text-noir-200">{getLoc(currentSuspect.relationshipToVictim)}</span>
            </div>
          </div>
        </div>

        {/* Psychological Stress Meter */}
        <div className="bg-noir-900 p-4 rounded-lg border border-noir-800 space-y-2">
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-amber-400 flex items-center gap-1.5 uppercase tracking-wider text-[10px]">
              <Flame className="w-3.5 h-3.5" /> {t('stressLevel')}
            </span>
            <span
              className={`font-bold font-mono text-[11px] ${
                currentStress > 65
                  ? 'text-blood-400'
                  : currentStress > 35
                  ? 'text-amber-400'
                  : 'text-green-400'
              }`}
            >
              {formatNum(currentStress)}% — {
                currentStress > 65
                  ? t('stressBreakdown')
                  : currentStress > 35
                  ? t('stressEdge')
                  : t('stressComposed')
              }
            </span>
          </div>

          <div className="w-full bg-noir-950 h-2 rounded-full overflow-hidden border border-noir-800">
            <div
              className={`h-full transition-all duration-500 ${
                currentStress > 65
                  ? 'bg-blood-500'
                  : currentStress > 35
                  ? 'bg-amber-500'
                  : 'bg-green-500'
              }`}
              style={{ width: `${currentStress}%` }}
            />
          </div>
          <p className="text-[10px] text-noir-400 leading-relaxed">
            {t('stressHint')}
          </p>
        </div>

        {/* Alibi & Motive Records */}
        <div className="space-y-3 text-xs">
          <div className="bg-noir-900 p-3.5 rounded border border-noir-800 space-y-1">
            <span className="text-[10px] uppercase font-bold text-amber-500 tracking-wider">
              {t('statedAlibi')}
            </span>
            <p className="text-noir-200 leading-relaxed italic text-[11px]">
              "{getLoc(currentSuspect.alibi)}"
            </p>
          </div>

          <div className="bg-noir-900 p-3.5 rounded border border-noir-800 space-y-1">
            <span className="text-[10px] uppercase font-bold text-blood-400 tracking-wider">
              {t('potentialMotive')}
            </span>
            <p className="text-noir-300 leading-relaxed text-[11px]">
              {getLoc(currentSuspect.motive)}
            </p>
          </div>

          <div className="bg-noir-900 p-3.5 rounded border border-noir-800 space-y-1">
            <span className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider">
              {t('personalityMannerisms')}
            </span>
            <p className="text-noir-400 leading-relaxed text-[11px]">
              {getLoc(currentSuspect.personality)}
            </p>
          </div>
        </div>

        {/* Action: Confront with Evidence Button */}
        <button
          onClick={() => {
            sound.playPaper();
            setIsPresentModalOpen(true);
          }}
          className="w-full py-2.5 px-4 bg-gradient-to-r from-blood-700 to-blood-800 hover:from-blood-600 hover:to-blood-700 text-white font-bold rounded-lg shadow-md border border-blood-500/60 text-xs flex items-center justify-center space-x-2 transition-all transform hover:-translate-y-0.5"
        >
          <ShieldAlert className="w-4 h-4 text-blood-300" />
          <span>{t('presentEvidenceBtn')}</span>
        </button>
      </div>

      {/* Right Column: Interrogation Questions & Transcript */}
      <div className="flex-1 bg-noir-900 flex flex-col justify-between overflow-hidden">
        {/* Transcript Header */}
        <div className="p-4 border-b border-noir-800 bg-noir-950 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MessageSquare className="w-4 h-4 text-amber-500" />
            <h3 className="font-serif font-bold text-sm text-white tracking-wide">
              {t('transcriptLog')}
            </h3>
          </div>
          <span className="text-[10px] text-noir-400 font-mono">
            {formatNum(askedDialogueIds.length)} {t('questionsAnswered')}
          </span>
        </div>

        {/* Dialogue Scrollable Area */}
        <div className="flex-1 p-5 overflow-y-auto space-y-4">
          {/* Confrontation Result Banner if any */}
          {lastConfrontationResult && (
            <div
              className={`p-4 rounded-lg border animate-pulse ${
                lastConfrontationResult.lieExposed
                  ? 'bg-blood-950/80 border-blood-600 text-blood-200'
                  : 'bg-amber-950/40 border-amber-700/60 text-amber-200'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] uppercase font-bold tracking-widest flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-blood-400" /> {t('confrontEvidenceTitle')}: {lastConfrontationResult.evidenceName}
                </span>
                {lastConfrontationResult.lieExposed && (
                  <span className="text-[10px] bg-blood-600 text-white font-bold px-2 py-0.5 rounded uppercase">
                    {t('contradictionExposed')}
                  </span>
                )}
              </div>
              <p className="text-xs leading-relaxed italic bg-black/40 p-3 rounded mt-2 text-noir-200">
                "{lastConfrontationResult.reaction}"
              </p>
            </div>
          )}

          {/* Asked Questions & Answers History */}
          {askedDialogueIds.length === 0 && !lastConfrontationResult ? (
            <div className="text-center py-12 text-xs text-noir-500 space-y-2">
              <FileQuestion className="w-8 h-8 mx-auto text-noir-600" />
              <div className="text-noir-400">
                {t('noQuestionsYet')}
              </div>
              <div className="text-[11px] text-noir-500 max-w-sm mx-auto">
                {t('noQuestionsHint')}
              </div>
            </div>
          ) : (
            currentSuspect.dialogueTree
              .filter(d => askedDialogueIds.includes(d.id))
              .map(dialogue => (
                <div key={dialogue.id} className="space-y-2 text-xs">
                  {/* Detective Question Bubble */}
                  <div className="flex justify-end">
                    <div className="bg-blood-950/80 border border-blood-800 text-blood-100 p-3 rounded-lg max-w-lg shadow-md">
                      <span className="text-[10px] text-blood-400 font-bold uppercase block mb-1">
                        {t('inquiryLabel')}
                      </span>
                      {getLoc(dialogue.prompt)}
                    </div>
                  </div>

                  {/* Suspect Response Bubble */}
                  <div className="flex justify-start">
                    <div className="bg-noir-950 border border-noir-800 text-noir-200 p-3.5 rounded-lg max-w-lg space-y-1.5 shadow-md">
                      <div className="flex items-center justify-between text-[10px] text-noir-400">
                        <span className="font-bold text-white uppercase">{getLoc(currentSuspect.name)}</span>
                        {dialogue.reactionMood && (
                          <span className="text-amber-400 uppercase tracking-wider text-[9px] bg-noir-800 px-1.5 py-0.5 rounded">
                            {getLoc(dialogue.reactionMood)}
                          </span>
                        )}
                      </div>
                      <p className="text-xs italic leading-relaxed text-noir-200">
                        "{getLoc(dialogue.response)}"
                      </p>

                      {dialogue.contradictionAlert && (
                        <div className="pt-2 text-[11px] text-blood-400 font-bold border-t border-noir-800/80 flex items-center gap-1">
                          <AlertTriangle className="w-3.5 h-3.5 text-blood-500 flex-shrink-0" />
                          <span>{getLoc(dialogue.contradictionAlert)}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
          )}
        </div>

        {/* Bottom: Available Inquiries Question Selector */}
        <div className="p-4 bg-noir-950 border-t border-noir-800 space-y-2">
          <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider block">
            {t('directInquiries')}
          </span>

          <div className="space-y-1.5 max-h-44 overflow-y-auto">
            {currentSuspect.dialogueTree.map((d) => {
              const isAsked = askedDialogueIds.includes(d.id);
              const promptText = getLoc(d.prompt);

              return (
                <button
                  key={d.id}
                  onClick={() => handleAsk(d)}
                  disabled={isAsked}
                  className={`w-full p-2.5 rounded text-left text-xs transition-all flex items-center justify-between ${
                    isAsked
                      ? 'bg-noir-900 border border-noir-800/60 text-noir-500 opacity-60 cursor-default'
                      : 'bg-noir-900 hover:bg-noir-850 border border-noir-700/80 hover:border-amber-600/70 text-noir-200 hover:text-white shadow-sm'
                  }`}
                >
                  <div className="flex items-center space-x-2 pr-2 min-w-0">
                    {isAsked ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                    ) : (
                      <HelpCircle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                    )}
                    <span className="truncate">{promptText}</span>
                  </div>

                  <span className="text-[10px] text-noir-500 font-mono flex-shrink-0">
                    {isAsked ? t('askedAction') : t('inquireAction')}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Present Evidence Modal */}
      <PresentEvidenceModal
        isOpen={isPresentModalOpen}
        suspect={currentSuspect}
        onClose={() => setIsPresentModalOpen(false)}
        onConfront={handleConfrontEvidence}
      />
    </div>
  );
};
