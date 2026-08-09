import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rapid Services",
  description: "Rapid Services Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      // Browser extensions inject attributes on <html>/<body> before React
      // hydrates; suppress those mismatches here as well as in [locale]/layout.
      suppressHydrationWarning
      // Set the CSS custom property used by globals.css for the sans font.
      // Keep the variable simple to avoid serialization differences between server and client.
      // Style typing doesn't natively include CSS variables so cast to any.
      style={
        {
          ["--font-sans" as any]:
            'Geist, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
        } as React.CSSProperties
      }
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
