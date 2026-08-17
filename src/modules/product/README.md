# Product Module

Powers the public product catalog (`/product`) and product detail (`/product/[product]`) routes, including catalog filtering, sorting, pagination, and detail tabs.

## Public API (`index.ts`)

Import everything from the barrel — never import internal files directly from outside this module.

```ts
import { ProductsFilter, ProductView, ProductHeader } from "@/modules/product";
import { ProductOverview, ProductRatings, ProductsBreadcrumb } from "@/modules/product";
import { useProductFilter, useProductView, useProductHeader } from "@/modules/product";
import { productFilterReducer, resetFilters, toggleCategory } from "@/modules/product";
import { products, filterCategories } from "@/modules/product";
import type { Product, ProductFilterState } from "@/modules/product";
```

## Module Structure

```
modules/product/
├── components/
│   ├── NoProductFound.tsx       — Empty search / filter state UI
│   ├── ProductGridCard.tsx      — Grid item card
│   ├── ProductHeader.tsx        — Title, result count, view mode toggle & page size selector
│   ├── ProductListCard.tsx      — List item card
│   ├── ProductOverview.tsx      — Product description overview tab
│   ├── ProductPagination.tsx    — Pagination bar & page buttons
│   ├── ProductRatings.tsx       — Customer reviews & star distribution
│   ├── ProductScrollspyNav.tsx  — Sticky scrollspy tab navigation
│   ├── ProductShortOverview.tsx — Price, stock, key specs & add-to-cart strip
│   ├── ProductSpecifications.tsx — Technical specs table
│   ├── ProductView.tsx          — Catalog container rendering grid/list view
│   ├── ProductsBreadcrumb.tsx   — Breadcrumb navigation
│   ├── ProductsFilter.tsx       — Sidebar filter panel
│   ├── ProductsHelp.tsx         — Talk-to-an-expert CTA card
│   └── RatingCard.tsx           — Individual review item card
├── hooks/
│   ├── useProductFilter.ts      — Manages filter state and category/rating actions
│   ├── useProductHeader.ts      — Manages header stats and page-size selector state
│   └── useProductView.ts        — Calculates filtered product list, pagination slicing & view mode
├── store/
│   └── productFilterSlice.ts    — Redux slice: categories, rating, pagination, activeView
├── constants/
│   └── product.constants.ts    — PAGE_OPTIONS and pagination defaults
├── data/
│   ├── filter.data.ts           — Filter category items and rating definitions
│   └── product.data.ts          — Sample product catalog dataset
├── icons/                       — Custom SVGs for view toggling and selection
├── skeleton/                    — Loading state cards
├── types/                       — Product & ProductFilter type contracts
├── i18n/
│   ├── en.json                  — English translations (namespace: product.*)
│   └── ar.json                  — Arabic translations (namespace: product.*)
├── README.md
└── index.ts                     — Public barrel export
```

## State

State field in Redux `state.productFilter`:

| State field | Type | Description |
|-------------|------|-------------|
| `selectedCategories` | `string[]` | Active category filters |
| `selectedRating` | `string` | Rating threshold ("any", "4", etc.) |
| `itemsPerPage` | `number` | Display limit per page (default: 20) |
| `currentPage` | `number` | 1-based active page index |
| `activeView` | `"grid" \| "list"` | Display layout mode |

Access via `useAppSelector(state => state.productFilter)`.
