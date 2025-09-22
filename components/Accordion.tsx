
import React, { useState } from 'react';
import { ChevronDownIcon } from './Icons';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-lg bg-slate-50 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left font-semibold text-slate-800 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
      >
        <span>{title}</span>
        <ChevronDownIcon
          className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4 bg-white border-t border-slate-200">
          {children}
        </div>
      </div>
    </div>
  );
};
