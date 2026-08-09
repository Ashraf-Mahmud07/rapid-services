export const ROUTES = {
  HOME: "/",
  PRODUCT: "/product",
  PROJECT: "/projects",
  SERVICE: "/services",
  INDUSTRY: "/industries",
  BLOG: "/blogs",
  CAREER: "/career",
  CERTIFICATION: "/certification",
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

export const blogDetailRoute = (id: string) => `${ROUTES.BLOG}/${id}`;

export const productDetailRoute = (slug: string) => `${ROUTES.PRODUCT}/${slug}`;
