import React, { useState } from 'react';
import { X, Shield, Award, CheckCircle2, Star, Edit3, Check } from 'lucide-react';
import { useGame } from '../../context/GameContext';
import { ALL_CASES } from '../../data/cases';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  const { profile, updateProfileName } = useGame();
  const [isEditing, setIsEditing] = useState(false);
  const [nameInput, setNameInput] = useState(profile.name);

  if (!isOpen) return null;

  const handleSaveName = () => {
    updateProfileName(nameInput);
    setIsEditing(false);
  };

  const allAchievementsList = [
    { id: 'Badge Issued', title: 'Badge Issued', desc: 'Sworn in as a recognized detective at the bureau.' },
    { id: 'Master Deductive Mind', title: 'Master Deductive Mind', desc: 'Achieve a 100% accuracy score on any case indictment.' },
    { id: 'Independent Inquirer (No Hints)', title: 'Independent Inquirer', desc: 'Solve a case without consulting any department hints.' },
    { id: 'Trilogy of Justice', title: 'Trilogy of Justice', desc: 'Successfully close all three major fictional case files.' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-noir-900 border border-noir-700 rounded-lg shadow-2xl overflow-hidden font-mono text-noir-200 flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="bg-noir-950 px-6 py-4 border-b border-noir-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Shield className="w-5 h-5 text-amber-500" />
            <div>
              <h2 className="font-serif font-bold text-base text-amber-200 tracking-wide">
                BUREAU PERSONNEL DOSSIER
              </h2>
              <span className="text-xs text-noir-400">
                Official Credential File — ID #{profile.badgeNumber}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-noir-400 hover:text-white hover:bg-noir-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Badge & Credentials Card */}
          <div className="bg-noir-950 p-5 rounded-lg border border-noir-800 flex flex-col sm:flex-row items-center gap-5">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-600/30 to-blood-800/40 border-2 border-amber-500/60 flex items-center justify-center shadow-inner flex-shrink-0">
              <Shield className="w-10 h-10 text-amber-400" />
            </div>

            <div className="flex-1 text-center sm:text-left space-y-1">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                {isEditing ? (
                  <div className="flex items-center gap-1.5">
                    <input
                      type="text"
                      value={nameInput}
                      onChange={(e) => setNameInput(e.target.value)}
                      className="bg-noir-900 border border-amber-600 rounded px-2 py-0.5 text-sm text-white focus:outline-none"
                    />
                    <button
                      onClick={handleSaveName}
                      className="p-1 bg-amber-600 text-white rounded hover:bg-amber-700"
                    >
                      <Check className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="font-serif font-bold text-lg text-white tracking-wide">
                      {profile.name}
                    </h3>
                    <button
                      onClick={() => setIsEditing(true)}
                      className="text-noir-500 hover:text-amber-400 p-0.5"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                  </>
                )}
              </div>

              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-blood-950 text-blood-300 border border-blood-800 font-bold uppercase tracking-wider">
                  {profile.rank}
                </span>
                <span className="text-xs text-noir-400">Badge #{profile.badgeNumber}</span>
              </div>

              <p className="text-[11px] text-noir-500 pt-1">
                Department of Homicide & Major Crimes Investigation Division
              </p>
            </div>
          </div>

          {/* Career Metrics Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="bg-noir-950 p-3.5 rounded border border-noir-800 text-center">
              <span className="text-[10px] text-noir-400 uppercase tracking-wider">Total Score</span>
              <div className="text-xl font-bold text-amber-400 mt-1">{profile.totalPoints}</div>
            </div>
            <div className="bg-noir-950 p-3.5 rounded border border-noir-800 text-center">
              <span className="text-[10px] text-noir-400 uppercase tracking-wider">Cases Solved</span>
              <div className="text-xl font-bold text-green-400 mt-1">
                {profile.completedCaseIds.length} / {ALL_CASES.length}
              </div>
            </div>
            <div className="bg-noir-950 p-3.5 rounded border border-noir-800 text-center">
              <span className="text-[10px] text-noir-400 uppercase tracking-wider">Hints Used</span>
              <div className="text-xl font-bold text-blood-400 mt-1">{profile.totalHintsUsed}</div>
            </div>
            <div className="bg-noir-950 p-3.5 rounded border border-noir-800 text-center">
              <span className="text-[10px] text-noir-400 uppercase tracking-wider">Bonus Clues</span>
              <div className="text-xl font-bold text-cyan-400 mt-1">{profile.totalOptionalCluesFound}</div>
            </div>
          </div>

          {/* Department Commendations / Achievements */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-amber-400 flex items-center gap-1.5 mb-3">
              <Award className="w-4 h-4" /> Official Commendations & Medals
            </h4>
            <div className="space-y-2">
              {allAchievementsList.map((ach) => {
                const isEarned = profile.achievements.includes(ach.id);
                return (
                  <div
                    key={ach.id}
                    className={`p-3 rounded-lg border flex items-center space-x-3 text-xs ${
                      isEarned
                        ? 'bg-noir-850 border-amber-600/30 text-noir-200'
                        : 'bg-noir-950/40 border-noir-800 text-noir-500 opacity-60'
                    }`}
                  >
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                        isEarned ? 'bg-amber-500/20 text-amber-400' : 'bg-noir-800 text-noir-600'
                      }`}
                    >
                      <Star className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-noir-200 flex items-center gap-2">
                        <span>{ach.title}</span>
                        {isEarned && (
                          <span className="text-[10px] text-green-400 flex items-center gap-0.5">
                            <CheckCircle2 className="w-3 h-3" /> Awarded
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-noir-400">{ach.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-noir-950 px-6 py-3 border-t border-noir-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-noir-800 hover:bg-noir-700 text-noir-200 text-xs font-mono rounded transition-colors"
          >
            Dismiss Dossier
          </button>
        </div>
      </div>
    </div>
  );
};
