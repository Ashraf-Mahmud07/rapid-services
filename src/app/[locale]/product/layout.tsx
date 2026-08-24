import { FaqSection, Footer, Navbar } from "@/shared/components/layout";
import React from "react";

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Navbar variant="solid" />
      <div className="bg-white">
        {children}
        <div className="container-page">
          <FaqSection />
        </div>
      </div>
      <Footer />
    </main>
  );
}
