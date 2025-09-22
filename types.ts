export interface AccordionItem {
  title: string;
  content: string | string[];
}

export interface Definition {
  term: string;
  definition: string;
}

export interface ListItem {
    id: string;
    text: string;
    subItems?: string[];
}

export interface SubSection {
  id: string;
  title: string;
  description?: string | string[];
  list?: ListItem[];
  definitions?: Definition[];
  accordionItems?: AccordionItem[];
  nestedSections?: SubSection[];
  chart?: 'competency' | 'org_chart';
}

export interface Section {
  id: string;
  title: string;
  subSections: SubSection[];
}