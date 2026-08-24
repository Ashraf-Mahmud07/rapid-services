import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { RTL_LOCALES } from "../../config/constants";
import { routing } from "../../i18n/routing";
import OverlayProvider from "../../shared/components/overlays/OverlayProvider";
import StoreProvider from "../../store/StoreProvider";
import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }
  const messages = await getMessages();
  const dir = RTL_LOCALES.includes(locale) ? "rtl" : "ltr";

  return (
    /* This layout nests inside the root layout in app/layout.tsx, which owns
       the single <html>/<body>. It previously rendered its own pair; browsers
       merge a nested <html> into the existing one and keep the *first*
       element's attributes, so lang and dir set here never reached the page
       and /ar rendered as lang="en" dir="ltr".

       Carrying them on a wrapper element instead is valid HTML, resolves
       server-side with no direction flash, and drives both text direction and
       every CSS logical property inside. */
    <div lang={locale} dir={dir} className="contents">
      <NextIntlClientProvider messages={messages}>
        <StoreProvider>
          <OverlayProvider>{children}</OverlayProvider>
        </StoreProvider>
      </NextIntlClientProvider>
    </div>
  );
}
