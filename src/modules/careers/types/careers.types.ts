export type JobDepartment = "Engineering" | "Marketing" | "Design" | "Operations";

export type JobFilter = "All" | JobDepartment;

export interface CareerHighlight {
  title: string;
  description: string;
}

export interface JobMetaRow {
  label: string;
  value: string;
}

export interface Job {
  slug: string;
  title: string;
  department: JobDepartment;
  location: string;
  employmentType: string;
  about: string[];
  responsibilities: string[];
  requirements: string[];
  closingNote?: string;
  salaryLow?: string;
  salaryHigh?: string;
  salaryNote?: string;
  isNew?: boolean;
  meta?: JobMetaRow[];
}
