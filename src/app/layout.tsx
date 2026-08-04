import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rapid ERP",
  description: "Rapid ERP Application",
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
      // Set the CSS custom property used by globals.css for the sans font.
      // Keep the variable simple to avoid serialization differences between server and client.
      // Style typing doesn't natively include CSS variables so cast to any.
      style={{ ["--font-sans" as any]: 'Geist, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif' } as React.CSSProperties}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
