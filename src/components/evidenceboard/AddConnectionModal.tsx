import { Dialog } from '../common/Dialog';
import React, { useState } from 'react';
import { X, Network, Pin, ArrowRight, AlertTriangle, Sparkles } from 'lucide-react';
import { useGame } from '../../context/GameContext';
import { EvidenceBoardNode } from '../../types/game';

interface AddConnectionModalProps {
  isOpen: boolean;
  nodes: EvidenceBoardNode[];
  onClose: () => void;
  onConnect: (sourceId: string, targetId: string, note?: string) => void;
}

export const AddConnectionModal: React.FC<AddConnectionModalProps> = ({
  isOpen,
  nodes,
  onClose,
  onConnect
}) => {
  const { language, t } = useGame();
  const [sourceId, setSourceId] = useState<string>('');
  const [targetId, setTargetId] = useState<string>('');
  const [note, setNote] = useState<string>('');

  if (!isOpen) return null;

  const handleConnect = () => {
    if (sourceId && targetId && sourceId !== targetId) {
      onConnect(sourceId, targetId, note.trim() || undefined);
      setSourceId('');
      setTargetId('');
      setNote('');
      onClose();
    }
  };

  const isBengali = language === 'bn';

  return (
    <Dialog label={t('connectCluesTitle')} onClose={onClose}>
      <div className="relative w-full max-w-xl bg-noir-900 border-2 border-noir-700 rounded-lg shadow-2xl overflow-hidden text-noir-200">
        {/* Header */}
        <div className="bg-noir-950 px-6 py-4 border-b border-noir-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-blood-950 border border-blood-800 flex items-center justify-center">
              <Network className="w-4 h-4 text-blood-400" />
            </div>
            <div>
              <span className="text-[10px] text-blood-400 uppercase font-bold tracking-widest font-mono">
                {t('investigationWall')}
              </span>
              <h2 className="font-serif font-bold text-base text-white tracking-wide">
                {t('connectCluesTitle')}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose} aria-label={t('closeBtn')}
            className="p-1 rounded text-noir-400 hover:text-white hover:bg-noir-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 space-y-4 text-xs">
          <p className="text-noir-400 leading-relaxed">
            {t('connectCluesDesc')}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Primary Node */}
            <div className="space-y-1.5">
              <label className="text-[10px] uppercase font-bold text-amber-400 block tracking-wider">
                {t('sourceItem')}
              </label>
              <select
                aria-label={t('sourceItem')} value={sourceId}
                onChange={e=>{setSourceId(e.target.value);if(e.target.value===targetId)setTargetId('');}}
                className="w-full bg-noir-950 border border-noir-700 rounded p-2.5 text-xs text-white focus:outline-none focus:border-blood-600"
              >
                <option value="">-- {isBengali ? 'প্রথম সূত্র নির্বাচন করুন' : 'Choose Item A'} --</option>
                {nodes.map(node => (
                  <option key={node.targetId} value={node.targetId}>
                    [{node.type === 'suspect' ? t('suspectTag') : t('clueTag')}] {node.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Target Node */}
            <div className="space-y-1.5">
              <label className="text-[10px] uppercase font-bold text-amber-400 block tracking-wider">
                {t('targetItem')}
              </label>
              <select
                aria-label={t('targetItem')} value={targetId}
                onChange={(e) => setTargetId(e.target.value)}
                className="w-full bg-noir-950 border border-noir-700 rounded p-2.5 text-xs text-white focus:outline-none focus:border-blood-600"
              >
                <option value="">-- {isBengali ? 'দ্বিতীয় সূত্র নির্বাচন করুন' : 'Choose Item B'} --</option>
                {nodes
                  .filter(node => node.targetId !== sourceId)
                  .map(node => (
                    <option key={node.targetId} value={node.targetId}>
                      [{node.type === 'suspect' ? t('suspectTag') : t('clueTag')}] {node.title}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          {/* Player Hypothesis Note */}
          <div className="space-y-1.5">
            <label className="text-[10px] uppercase font-bold text-noir-400 block tracking-wider">
              {t('hypothesisNote')}
            </label>
            <input
              type="text"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder={t('hypothesisPlaceholder')}
              className="w-full bg-noir-950 border border-noir-700 rounded p-2.5 text-xs text-white placeholder-noir-600 focus:outline-none focus:border-amber-600"
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-noir-950 px-6 py-4 border-t border-noir-800 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-noir-800 hover:bg-noir-700 text-noir-300 text-xs rounded transition-colors"
          >
            {t('cancelBtn')}
          </button>

          <button
            onClick={handleConnect}
            disabled={!sourceId || !targetId || sourceId === targetId}
            className="px-5 py-2 bg-blood-600 hover:bg-blood-500 disabled:opacity-40 disabled:hover:bg-blood-600 text-white text-xs font-bold rounded shadow-lg transition-all flex items-center gap-1.5"
          >
            <Pin className="w-3.5 h-3.5" />
            <span>{t('pinStringBtn')}</span>
          </button>
        </div>
      </div>
    </Dialog>
  );
};
