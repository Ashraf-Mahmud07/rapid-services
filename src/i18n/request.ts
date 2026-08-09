import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as (typeof routing.locales)[number])) {
    locale = routing.defaultLocale;
  }

  const [auth, common, product, blogs, industries, service, projects] = await Promise.all([
    import(`../modules/auth/i18n/${locale}.json`),
    import(`../shared/i18n/${locale}.json`),
    import(`../modules/product/i18n/${locale}.json`),
    import(`../modules/blogs/i18n/${locale}.json`),
    import(`../modules/industries/i18n/${locale}.json`),
    import(`../modules/service/i18n/${locale}.json`),
    import(`../modules/projects/i18n/${locale}.json`),
  ]);

  return {
    locale,
    messages: {
      auth: auth.default,
      common: common.default,
      product: product.default,
      blogs: blogs.default,
      industries: industries.default,
      service: service.default,
      projects: projects.default,
    },
  };
});
