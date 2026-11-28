import React, { useState } from 'react';
import {
  Clock,
  ArrowUp,
  ArrowDown,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  Info,
  Layers,
  FileCheck2
} from 'lucide-react';
import { useGame } from '../../context/GameContext';
import { TimelineEvent } from '../../types/game';
import { sound } from '../../utils/audio';

export const TimelineReconstruction: React.FC = () => {
  const {
    activeCase,
    caseState,
    updateTimelineOrder,
    language,
    t,
    formatNum,
    getLoc
  } = useGame();

  const [verificationFeedback, setVerificationFeedback] = useState<{
    correctCount: number;
    totalCount: number;
    isFlawless: boolean;
    feedbackMessage: string;
  } | null>(null);

  if (!activeCase || !caseState) return null;

  const isBengali = language === 'bn';

  const currentOrderIds = caseState.timelineOrder.length > 0
    ? caseState.timelineOrder
    : activeCase.timelineEvents.map(e => e.id);

  const orderedEvents: TimelineEvent[] = currentOrderIds
    .map(id => activeCase.timelineEvents.find(e => e.id === id))
    .filter((e): e is TimelineEvent => !!e && caseState.discoveredEvidenceIds.includes(e.evidenceId));
  const visibleIds = orderedEvents.map(e=>e.id);
  const chronological = [...orderedEvents].sort((a,b)=>a.correctIndex-b.correctIndex);
  const saveVisibleOrder = (ids: string[]) => {
    let offset=0;
    updateTimelineOrder(currentOrderIds.map(id=>visibleIds.includes(id)?ids[offset++]:id));
  };

  // Move item up in order
  const handleMoveUp = (index: number) => {
    if (index <= 0) return;
    sound.playPaper();
    const newOrder = [...visibleIds];
    const temp = newOrder[index - 1];
    newOrder[index - 1] = newOrder[index];
    newOrder[index] = temp;
    saveVisibleOrder(newOrder);
    setVerificationFeedback(null);
  };

  // Move item down in order
  const handleMoveDown = (index: number) => {
    if (index >= visibleIds.length - 1) return;
    sound.playPaper();
    const newOrder = [...visibleIds];
    const temp = newOrder[index + 1];
    newOrder[index + 1] = newOrder[index];
    newOrder[index] = temp;
    saveVisibleOrder(newOrder);
    setVerificationFeedback(null);
  };

  // Reset to original shuffled order
  const handleReset = () => {
    sound.playPaper();
    const shuffled = [...activeCase.timelineEvents]
      .sort(() => Math.random() - 0.5)
      .map(e => e.id);
    updateTimelineOrder(shuffled);
    setVerificationFeedback(null);
  };

  // Verify chronology
  const handleVerify = () => {
    let correctCount = 0;
    const totalCount = orderedEvents.length;

    // A timeline event is in correct relative position if its target index matches
    orderedEvents.forEach((ev, idx) => {
      if (ev.id === chronological[idx].id) {
        correctCount++;
      }
    });

    const isFlawless = correctCount === totalCount;

    if (isFlawless) {
      sound.playDeductionSuccess();
      setVerificationFeedback({
        correctCount,
        totalCount,
        isFlawless: true,
        feedbackMessage: isBengali
          ? 'নথিভুক্ত আলামতের ঘটনাগুলি সঠিক সময়ক্রমে আছে।'
          : 'The events currently supported by your exhibits are in chronological order.'
      });
    } else {
      sound.playContradictionBuzz();
      let guidance = isBengali
        ? 'বেশ কিছু ঘটনা সঠিক ক্রমানুসারে নেই।'
        : 'Several events are placed out of logical sequence.';

      if (correctCount >= Math.floor(totalCount / 2)) {
        guidance = isBengali
          ? 'আপনি সঠিক সমাধানের খুব কাছাকাছি! সন্দেহভাজনদের গতিবিধির সাথে ভৌত আলামতের সময়রেখা মিলিয়ে দেখুন।'
          : 'You are close! Cross-examine the physical evidence timestamps against suspect movements.';
      } else {
        guidance = isBengali
          ? 'অপরাধের আগের প্রস্তুতি ও অপরাধ পরবর্তী আলামত লোপাটের চেষ্টার সময়ের পার্থক্যগুলো ভালো করে লক্ষ্য করুন।'
          : 'Examine which actions preceded the crime versus the subsequent cover-up attempts.';
      }

      setVerificationFeedback({
        correctCount,
        totalCount,
        isFlawless: false,
        feedbackMessage: guidance
      });
    }
  };

  return (
    <div className={`min-h-[calc(100vh-105px)] bg-noir-950 p-4 sm:p-6 select-none ${isBengali ? 'font-bengali' : 'font-mono'}`}>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header & Verification Bar */}
        <div className="bg-noir-900 border border-noir-800 rounded-lg p-5 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-amber-500" />
              <h2 className="font-serif font-bold text-base text-white tracking-wide">
                {t('timelineTitle')}
              </h2>
            </div>
            <p className="text-xs text-noir-400 mt-0.5 leading-relaxed">
              {t('timelineSubtitle')}
            </p>
          </div>

          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <button
              onClick={handleReset} disabled={orderedEvents.length<2}
              className="px-3 py-2 bg-noir-950 hover:bg-noir-800 border border-noir-700 rounded text-xs text-noir-400 hover:text-white transition-colors flex items-center gap-1.5"
              title={t('shuffleBtn')}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t('shuffleBtn')}</span>
            </button>

            <button
              onClick={handleVerify} disabled={orderedEvents.length<2}
              className="flex-1 sm:flex-initial px-5 py-2 bg-blood-600 hover:bg-blood-500 text-white rounded text-xs font-bold shadow-lg flex items-center justify-center space-x-2 transition-all transform hover:-translate-y-0.5"
            >
              <FileCheck2 className="w-4 h-4" />
              <span>{t('verifySequenceBtn')}</span>
            </button>
          </div>
        </div>

        {/* Verification Result Notification */}
        {verificationFeedback && (
          <div
            className={`p-4 rounded-lg border flex items-start space-x-3 text-xs animate-fade-in ${
              verificationFeedback.isFlawless
                ? 'bg-green-950/80 border-green-600 text-green-200'
                : 'bg-amber-950/50 border-amber-700/80 text-amber-200'
            }`}
          >
            {verificationFeedback.isFlawless ? (
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
            ) : (
              <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            )}

            <div className="space-y-1">
              <div className="font-bold flex items-center gap-2">
                <span>
                  {isBengali ? 'ঘটনাক্রম নিরীক্ষা:' : 'Chronological Analysis:'} {formatNum(verificationFeedback.correctCount)} /{' '}
                  {formatNum(verificationFeedback.totalCount)} {isBengali ? 'ঘটনা সঠিক ক্রমানুসারে রয়েছে' : 'Events Properly Sequenced'}
                </span>
              </div>
              <p className="text-[11px] leading-relaxed text-noir-300">
                {verificationFeedback.feedbackMessage}
              </p>
            </div>
          </div>
        )}

        <p className="text-sm text-noir-300">{isBengali?'নথিভুক্ত আলামত থেকে পাওয়া ঘটনা':'Events sourced from your locker'} · {formatNum(orderedEvents.length)} / {formatNum(activeCase.timelineEvents.length)}</p>
        {/* Re-orderable Event Cards List */}
        <div className="space-y-3">
          {orderedEvents.map((ev, index) => {
            const isCorrectlyPlaced =
              verificationFeedback !== null && ev.id === chronological[index].id;

            return (
              <div
                key={ev.id}
                className={`group bg-noir-900 border rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all duration-200 shadow-md ${
                  isCorrectlyPlaced
                    ? 'border-green-600/80 bg-green-950/10'
                    : 'border-noir-800 hover:border-noir-700'
                }`}
              >
                {/* Event Index & Content */}
                <div className="flex items-start space-x-3 flex-1 min-w-0">
                  <div className="w-8 h-8 rounded-full bg-noir-950 border border-noir-700 flex items-center justify-center font-bold text-xs text-amber-400 flex-shrink-0 font-mono">
                    {formatNum(index + 1)}
                  </div>

                  <div className="space-y-1 min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs px-2 py-0.5 rounded bg-blood-950 text-blood-400 border border-blood-800 font-bold font-mono">
                        {getLoc(ev.timestamp)}
                      </span>
                      <h3 className="font-serif font-bold text-sm text-white truncate">
                        {getLoc(ev.title)}
                      </h3>
                    </div>

                    <p className="text-xs text-noir-300 leading-relaxed">
                      {getLoc(ev.description)}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 pt-1 text-[10px] text-noir-400">
                      <span>
                        <strong className="text-noir-300">{t('sourceLabel')}:</strong> {getLoc(ev.source)}
                      </span>
                      <span>•</span>
                      <span>
                        <strong className="text-noir-300">{isBengali ? 'ঘটনাস্থল' : 'Location'}:</strong> {getLoc(ev.verifiedLocation)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Move Controls */}
                <div className="flex sm:flex-col items-center gap-1 flex-shrink-0 self-end sm:self-center">
                  <button
                    onClick={() => handleMoveUp(index)}
                    disabled={index === 0}
                    className="p-1.5 rounded bg-noir-950 hover:bg-noir-800 border border-noir-800 text-noir-400 hover:text-white disabled:opacity-30 disabled:hover:bg-noir-950 transition-colors"
                    title={t('moveEarlier')}
                  >
                    <ArrowUp className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => handleMoveDown(index)}
                    disabled={index === orderedEvents.length - 1}
                    className="p-1.5 rounded bg-noir-950 hover:bg-noir-800 border border-noir-800 text-noir-400 hover:text-white disabled:opacity-30 disabled:hover:bg-noir-950 transition-colors"
                    title={t('moveLater')}
                  >
                    <ArrowDown className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guidance Footer */}
        <div className="bg-noir-900/60 p-4 rounded-lg border border-noir-800 text-xs text-noir-400 flex items-start space-x-2">
          <Info className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
          <p className="text-[11px] leading-relaxed">
            {t('timelineTip')}
          </p>
        </div>
      </div>
    </div>
  );
};
