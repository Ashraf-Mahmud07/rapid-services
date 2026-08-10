import { FaqSection, Footer, Navbar } from "@/shared/components/layout";
import React from "react";

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Navbar variant="solid" />
      {children}
      <div className="container-page">
        <FaqSection />
      </div>
      <Footer />
    </main>
  );
}
