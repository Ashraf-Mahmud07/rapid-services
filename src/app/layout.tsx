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
    // The only <html>/<body> in the app. [locale]/layout renders the locale
    // wrapper inside this one — it used to emit a second <html>/<body> pair,
    // which the HTML parser merged away, silently dropping the locale's lang
    // and dir attributes and leaving Arabic rendering left-to-right.
    <html
      lang="en"
      dir="ltr"
      // Browser extensions inject attributes on <html>/<body> before React
      // hydrates; suppress those mismatches here as well as in [locale]/layout.
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* Poppins was requested here too, but the reference designs are set
            entirely in a neo-grotesque — every `a` is double-story, which
            Poppins is not — so nothing on the site rendered in it. Dropping it
            saves four font files on first paint. `font-poppins` markup still
            works; the token now points at the sans stack. */}
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
