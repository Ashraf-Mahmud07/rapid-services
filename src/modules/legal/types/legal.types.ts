export interface LegalBlock {
  heading?: string;
  body: string;
}

export interface LegalSection {
  id: string;
  title: string;
  blocks: LegalBlock[];
}

export interface LegalCallout {
  title: string;
  body: string;
  actionLabelKey: string;
  href: string;
}

export interface LegalDocument {
  sections: LegalSection[];
  callout: LegalCallout;
}
