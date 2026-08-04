import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as (typeof routing.locales)[number])) {
    locale = routing.defaultLocale;
  }

  // Load each module's dictionary and merge under its namespace.
  // Pattern: { auth: { ...auth/i18n/en.json }, account: { ... }, ... }
  // When adding a new module, import its dictionary here and add it below.
  const [auth, common] = await Promise.all([
    import(`../modules/auth/i18n/${locale}.json`),
    import(`../shared/i18n/${locale}.json`),
    // import(`../modules/account/i18n/${locale}.json`),
    // import(`../modules/product/i18n/${locale}.json`),
    // import(`../modules/blogs/i18n/${locale}.json`),
    // import(`../modules/support/i18n/${locale}.json`),
  ]);

  return {
    locale,
    messages: {
      auth: auth.default,
      common: common.default,
      // account: account.default,
      // product: product.default,
      // blogs: blogs.default,
      // support: support.default,
    },
  };
});
