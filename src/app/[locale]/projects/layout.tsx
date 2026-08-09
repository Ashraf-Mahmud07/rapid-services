import { Footer, Navbar } from "@/shared/components/layout";
import React from "react";

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#FDFDFD] font-sans">
      <Navbar />
      <main className="flex w-full flex-1 flex-col">{children}</main>
      <Footer />
    </div>
  );
}
