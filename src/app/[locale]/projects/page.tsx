import type { Metadata } from "next";

import { ProjectsPage } from "@/modules/projects";

export const metadata: Metadata = {
  title: "Projects | Rapid",
  description:
    "The work we are booked for most often. See what each project includes, what it starts at and how long it takes on site.",
};

export default function ProjectsRoutePage() {
  return <ProjectsPage />;
}
