export type EngineeringSafetyItem = {
  title: string;
  descriptionLine1: string;
  descriptionLine2: string;
  icon: "residential" | "commercial" | "industrial" | "aviation" | "infrastructure" | "government";
};

export const engineeringSafetyIntro = {
  title: "Engineering Safety Across",
  highlight: "Every Industry",
  description:
    "At Rapid, we provide expert waterproofing and structural solutions tailored to the needs of diverse industries, ensuring long-lasting protection, safety, and reliable performance.",
};

export const engineeringSafetyItems: EngineeringSafetyItem[] = [
  {
    title: "Residential Spaces",
    descriptionLine1: "Crafting Comfortable, Functional & Elegant",
    descriptionLine2: "Homes",
    icon: "residential",
  },
  {
    title: "Commercial Projects",
    descriptionLine1: "Innovative Spaces Designed for Business",
    descriptionLine2: "Success",
    icon: "commercial",
  },
  {
    title: "Industrial Facilities",
    descriptionLine1: "Engineered for Efficiency, Safety & Operational",
    descriptionLine2: "Excellence",
    icon: "industrial",
  },
  {
    title: "Aviation & Transport",
    descriptionLine1: "Precision Solutions for Critical Transit",
    descriptionLine2: "Infrastructure",
    icon: "aviation",
  },
  {
    title: "Civil Infrastructure",
    descriptionLine1: "Building Strong Foundations for Sustainable",
    descriptionLine2: "Communities",
    icon: "infrastructure",
  },
  {
    title: "Government Projects",
    descriptionLine1: "Delivering Trusted Infrastructure for Public",
    descriptionLine2: "Excellence",
    icon: "government",
  },
];
