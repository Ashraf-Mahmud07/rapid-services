export interface WhyChooseUsFeature {
  id: string;
  title: string;
  description: string;
}

export interface WhyChooseUsData {
  eyebrow: string;
  title: string;
  features: WhyChooseUsFeature[];
  cta: {
    label: string;
    href: string;
  };
}
