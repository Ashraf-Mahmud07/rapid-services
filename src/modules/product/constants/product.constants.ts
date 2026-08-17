export const PAGE_OPTIONS = ["20", "40", "60", "80"] as const;
export type PageOption = (typeof PAGE_OPTIONS)[number];

export const DEFAULT_ITEMS_PER_PAGE = 20;
export const DEFAULT_CURRENT_PAGE = 1;
export const DEFAULT_RATING_FILTER = "any";
export const DEFAULT_VIEW_MODE = "grid";
