export type JobDepartment = "Engineering" | "Marketing" | "Design" | "Operations";

export type JobFilter = "All" | JobDepartment;

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
  salaryLow: string;
  salaryHigh: string;
  salaryNote: string;
  isNew: boolean;
  about: string[];
  responsibilities: string[];
  requirements: string[];
  closingNote: string;
  meta: JobMetaRow[];
}
