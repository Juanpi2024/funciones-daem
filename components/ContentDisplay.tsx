import React from 'react';
import type { Section, SubSection, ListItem } from '../types';
import { Accordion } from './Accordion';
import { CompetencyChart } from './CompetencyChart';
import { OrganizationalChart } from './OrganizationalChart';


interface ContentDisplayProps {
  section: Section;
}

const renderDescription = (description: string | string[]) => {
    if (Array.isArray(description)) {
        return description.map((p, i) => <p key={i} className="mb-4 text-slate-700 leading-relaxed">{p}</p>);
    }
    return <p className="mb-4 text-slate-700 leading-relaxed">{description}</p>;
}

const renderList = (list: ListItem[]) => (
  <ul className="space-y-3 list-inside">
    {list.map(item => (
      <li key={item.id} className="text-slate-700">
        <span className="font-semibold">{item.id}</span> {item.text}
        {item.subItems && (
          <ul className="pl-6 mt-2 space-y-2 list-disc list-inside">
            {item.subItems.map((sub, i) => <li key={i}>{sub}</li>)}
          </ul>
        )}
      </li>
    ))}
  </ul>
);

const renderChart = (chartType: 'competency' | 'org_chart') => {
    switch(chartType) {
        case 'competency':
            return <CompetencyChart />;
        case 'org_chart':
            return <OrganizationalChart />;
        default:
            return null;
    }
}

const renderSubSection = (sub: SubSection, level: number = 0) => {
    const headerSize = level === 0 ? 'text-3xl' : level === 1 ? 'text-2xl' : 'text-xl';
    const headerColor = level === 0 ? 'text-slate-900' : level === 1 ? 'text-slate-800' : 'text-slate-700';

    return (
        <div key={sub.id} className={`mb-8 pb-8 ${level === 0 ? 'border-b border-slate-200 last:border-b-0' : 'pl-4'}`}>
            <h2 className={`font-bold ${headerSize} ${headerColor} mb-4`}>{sub.title}</h2>
            {sub.description && renderDescription(sub.description)}
            {sub.chart && (
              <div className="my-6 p-4 bg-slate-50 rounded-lg">
                {renderChart(sub.chart)}
              </div>
            )}
            {sub.list && renderList(sub.list)}
            {sub.definitions && (
                <div className="space-y-2">
                    {sub.definitions.map(def => (
                        <p key={def.term} className="text-slate-700">
                            <strong className="font-semibold text-slate-800">{def.term}:</strong> {def.definition}
                        </p>
                    ))}
                </div>
            )}
            {sub.accordionItems && (
                <div className="space-y-4">
                    {sub.accordionItems.map((item, i) => (
                        <Accordion key={i} title={item.title}>
                            {renderDescription(item.content)}
                        </Accordion>
                    ))}
                </div>
            )}
            {sub.nestedSections && sub.nestedSections.map(nested => renderSubSection(nested, level + 1))}
        </div>
    )
}

export const ContentDisplay: React.FC<ContentDisplayProps> = ({ section }) => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
      <header className="mb-8 pb-4 border-b border-slate-200">
        <h1 className="text-4xl font-extrabold text-slate-900">{section.title}</h1>
      </header>
      <div>
        {section.subSections.map(subSection => renderSubSection(subSection))}
      </div>
    </div>
  );
};