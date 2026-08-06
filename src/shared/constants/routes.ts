export const ROUTES = {
  HOME: "/",
  PRODUCT: "/products",
  PROJECT: "/project",
  SERVICE: "/service",
  INDUSTRY: "/industry",
  CAREER: "/career",
  ABOUT: "/about",
  CONTACT: "/contact-us",
  APPOINTMENT: "/appointment",
  AUTH: {
    LOGIN: "/login",
    REGISTER: "/register",
    FORGOT_PASSWORD: "/forgot-password",
  },
} as const;

export const careerDetailRoute = (slug: string) => `${ROUTES.CAREER}/${slug}`;
