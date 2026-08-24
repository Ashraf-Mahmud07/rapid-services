export const ROUTES = {
  HOME: "/",
  PRODUCT: "/product",
  PROJECT: "/projects",
  SERVICE: "/services",
  INDUSTRY: "/industries",
  BLOG: "/blogs",
  MEDIA: "/media",
  CAREER: "/career",
  CERTIFICATION: "/certification",
  FAQ: "/faq",
  ABOUT: "/about",
  CONTACT: "/contact-us",
  APPOINTMENT: "/appointment",
  PRIVACY: "/privacy-policy",
  TERMS: "/terms-conditions",
  COOKIE_POLICY: "/cookie-policy",
  AUTH: {
    LOGIN: "/login",
    REGISTER: "/register",
    FORGOT_PASSWORD: "/forgot-password",
  },
} as const;

export const careerDetailRoute = (slug: string) => `${ROUTES.CAREER}/${slug}`;

export const blogDetailRoute = (id: string) => `${ROUTES.BLOG}/${id}`;

export const productDetailRoute = (slug: string) => `${ROUTES.PRODUCT}/${slug}`;

export const projectDetailRoute = (id: string) => `${ROUTES.PROJECT}/${id}`;

export const industryDetailRoute = (id: string) => `${ROUTES.INDUSTRY}/${id}`;
