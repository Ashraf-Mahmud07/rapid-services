import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import { NotFoundContent } from "@/shared/components/layout";

/* The global 404. Unmatched URLs resolve here rather than to
   [locale]/not-found.tsx, and only this file makes Next answer with a real 404
   status. It sits outside the [locale] segment, so the intl provider the navbar
   and footer links depend on has to be supplied here. */
export default async function NotFound() {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <NotFoundContent />
    </NextIntlClientProvider>
  );
}
