import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { RTL_LOCALES } from "../../config/constants";
import { routing } from "../../i18n/routing";
import StoreProvider from "../../store/StoreProvider";
import "../globals.css";

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
    /* Prevents hydration warnings caused by browser 
       extensions injecting attributes on the <html> tag.
    */
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider messages={messages}>
          <StoreProvider>{children}</StoreProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
