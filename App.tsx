
import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { ContentDisplay } from './components/ContentDisplay';
import { MenuIcon, XIcon } from './components/Icons';
import { SECTIONS } from './constants/data';
import type { Section } from './types';

const App: React.FC = () => {
  const [activeSectionId, setActiveSectionId] = useState<string>(SECTIONS[0].id);
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const activeSection = SECTIONS.find(section => section.id === activeSectionId) || SECTIONS[0];

  const handleSectionSelect = (id: string) => {
    setActiveSectionId(id);
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSectionId]);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <header className="md:hidden sticky top-0 bg-white shadow-md z-20 flex justify-between items-center p-4">
        <h1 className="text-lg font-bold text-slate-700">DAEM Parral</h1>
        <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="p-2">
          {isSidebarOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </header>
      
      <div className="flex">
        <Sidebar
          sections={SECTIONS}
          activeSectionId={activeSectionId}
          onSectionSelect={handleSectionSelect}
          isOpen={isSidebarOpen}
          setIsOpen={setSidebarOpen}
        />
        <main className="flex-1 p-4 sm:p-6 md:p-8 lg:p-12 transition-all duration-300">
           <ContentDisplay section={activeSection} />
        </main>
      </div>
    </div>
  );
};

export default App;
