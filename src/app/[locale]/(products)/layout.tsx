import { Footer, Navbar } from "@/shared/components/layout";
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
      <Footer />
    </main>
  );
}
