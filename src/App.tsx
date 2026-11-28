import React, { useEffect } from 'react';
import { useGame } from './context/GameContext';
import { MainMenu } from './components/mainmenu/MainMenu';
import { CaseSelect } from './components/caseselect/CaseSelect';
import { Navbar } from './components/common/Navbar';
import { CrimeScene } from './components/crimescene/CrimeScene';
import { EvidenceRoom } from './components/evidence/EvidenceRoom';
import { InterrogationRoom } from './components/interrogation/InterrogationRoom';
import { EvidenceBoard } from './components/evidenceboard/EvidenceBoard';
import { TimelineReconstruction } from './components/timeline/TimelineReconstruction';
import { FinalReport } from './components/finalreport/FinalReport';

export const AppContent: React.FC = () => {
  const { currentView, investigationTab } = useGame();

  useEffect(() => { window.scrollTo(0,0); }, [currentView, investigationTab]);

  if (currentView === 'menu') {
    return <MainMenu />;
  }

  if (currentView === 'cases' || currentView === 'archive') {
    return <CaseSelect />;
  }

  if (currentView === 'investigation') {
    return (
      <div className="investigation-app min-h-screen flex flex-col text-noir-100">
        <Navbar />
        <main key={investigationTab} className="work-area flex-1">
          {investigationTab === 'scene' && <CrimeScene />}
          {investigationTab === 'evidence' && <EvidenceRoom />}
          {investigationTab === 'interrogation' && <InterrogationRoom />}
          {investigationTab === 'board' && <EvidenceBoard />}
          {investigationTab === 'timeline' && <TimelineReconstruction />}
          {investigationTab === 'report' && <FinalReport />}
        </main>
      </div>
    );
  }

  return <MainMenu />;
};

export const App: React.FC = () => {
  return <AppContent />;
};

export default App;
