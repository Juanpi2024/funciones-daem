
import React from 'react';
import type { Section } from '../types';

interface SidebarProps {
  sections: Section[];
  activeSectionId: string;
  onSectionSelect: (id: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ sections, activeSectionId, onSectionSelect, isOpen, setIsOpen }) => {
  const sidebarClasses = `
    fixed md:relative inset-y-0 left-0 z-30
    w-72 md:w-80 lg:w-96 
    bg-white border-r border-slate-200 shadow-xl md:shadow-none
    transform transition-transform duration-300 ease-in-out
    ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    md:translate-x-0
  `;

  return (
    <>
      <aside className={sidebarClasses}>
        <div className="p-6">
          <h1 className="text-2xl font-bold text-slate-800">Manual de Funciones</h1>
          <p className="text-sm text-slate-500 mt-1">DAEM Parral</p>
        </div>
        <nav className="mt-4 px-4 pb-8 h-[calc(100vh-100px)] overflow-y-auto">
          <ul>
            {sections.map(section => (
              <li key={section.id}>
                <button
                  onClick={() => onSectionSelect(section.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 text-base font-medium ${
                    activeSectionId === section.id
                      ? 'bg-sky-100 text-sky-700'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden" 
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};
