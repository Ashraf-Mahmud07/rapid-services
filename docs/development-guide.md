# Feature & API Integration Guide

A complete walkthrough — from git branching to working UI — for every new feature in Rapid ERP.

> Example: **Login** (auth module) and **Profile Page** (account module)

---

## Part 1 — Feature Writing Journey

### Step 1 — Git: Create Your Branches

```bash
# Sync module branch with dev first
git checkout dev
git pull origin dev
git checkout -b module/account   # skip if already exists

# Create feature branch off the module branch
git checkout -b feature/account/profile-page
```

---

### Step 2 — Scaffold the Module Skeleton

```
src/modules/account/
├── components/
│   └── ProfileCard.tsx
├── types/
│   └── account.types.ts
├── validation/
│   └── account.schema.ts
├── i18n/
│   └── en.json
├── README.md
└── index.ts
```

---

### Step 3 — Types First

Model both the request body and API response shape before anything else.

```ts
// modules/account/types/account.types.ts
export interface Profile {
  id: string;
  fullName: string;
  email: string;
  avatarUrl: string | null;
}

export interface UpdateProfileResponse {
  profile: Profile;
}
```

---

### Step 4 — Add Endpoint URL to Shared Constants

Never hardcode a URL string in a component or service — always go through `URLS`.

```ts
// shared/constants/urls.ts
export const URLS = {
  AUTH: { LOGIN: "/auth/login", REGISTER: "/auth/register" },
  ACCOUNT: {
    PROFILE: "/account/profile", // GET + PUT
  },
} as const;
```

---

### Step 5 — Add Route to Shared Constants

```ts
// shared/constants/routes.ts
export const ROUTES = {
  AUTH: { LOGIN: "/login", REGISTER: "/register", FORGOT_PASSWORD: "/forgot-password" },
  ACCOUNT: {
    PROFILE: "/account/profile",
  },
} as const;
```

---

### Step 6 — Write the Zod Schema

Validates what the user submits before it reaches the network. Error messages are i18n keys, not literal strings.

```ts
// modules/account/validation/account.schema.ts
import { z } from "zod";

export const updateProfileSchema = z.object({
  fullName: z.string().min(2, "fullNameMin"),
  email: z.string().email("emailInvalid"),
});

export type UpdateProfileFormData = z.infer<typeof updateProfileSchema>;
```

---

### Step 7 — Write the RTK Query Endpoints

RTK Query handles loading state, caching, and error normalization automatically.

```ts
// modules/account/accountApi.ts
import { baseApi } from "@/store/api/baseApi";
import { URLS } from "@/shared/constants/urls";
import type { Profile } from "./types/account.types";

export const accountApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProfile: build.query<Profile, void>({
      query: () => ({ url: URLS.ACCOUNT.PROFILE, method: "GET" }),
      providesTags: ["Profile"],
    }),
    updateProfile: build.mutation<Profile, Partial<Profile>>({
      query: (data) => ({ url: URLS.ACCOUNT.PROFILE, method: "PUT", data }),
      invalidatesTags: ["Profile"],
    }),
  }),
});

export const { useGetProfileQuery, useUpdateProfileMutation } = accountApi;
```

---

### Step 8 — Add i18n Keys

```json
// modules/account/i18n/en.json
{
  "profileTitle": "My Profile",
  "fullName": "Full name",
  "email": "Email",
  "saveChanges": "Save changes",
  "saving": "Saving...",
  "updateSuccess": "Profile updated successfully"
}
```

Register in `src/i18n/request.ts`:

```ts
const [auth, account] = await Promise.all([
  import(`../modules/auth/i18n/${locale}.json`),
  import(`../modules/account/i18n/${locale}.json`),
]);
messages: { auth: auth.default, account: account.default }
```

---

### Step 9 — Build the Component

```tsx
// modules/account/components/ProfileCard.tsx
"use client";
import { useTranslations } from "next-intl";
import { useGetProfileQuery, useUpdateProfileMutation } from "../accountApi";
import { getErrorMessage } from "@/shared/utils";

export default function ProfileCard() {
  const t = useTranslations("account");
  const { data: profile, isLoading } = useGetProfileQuery();
  const [updateProfile, { isLoading: isSaving }] = useUpdateProfileMutation();

  if (isLoading) return <ProfileSkeleton />;

  async function onSubmit(data: UpdateProfileFormData) {
    try {
      await updateProfile(data).unwrap();
    } catch (err: unknown) {
      setApiError(getErrorMessage(err, "Update failed."));
    }
  }

  return (
    <div>
      <h1>{t("profileTitle")}</h1>
      {/* form fields */}
    </div>
  );
}
```

---

### Step 10 — Add Route Page (thin — no logic)

```ts
// src/app/[locale]/account/profile/page.tsx
import { ProfileCard } from '@/modules/account';

export default function ProfilePage() {
  return <ProfileCard />;
}
```

Also add `error.tsx` and `loading.tsx` in `app/[locale]/account/`.

---

### Step 11 — Barrel Export

```ts
// modules/account/index.ts
export { default as ProfileCard } from "./components/ProfileCard";
export * from "./accountApi";
export * from "./types/account.types";
export * from "./validation/account.schema";
```

---

### Step 12 — Commit and Push

```bash
git add -A
git commit -m "feat(account): add user profile page"
# Husky: lint-staged ✅  commitlint validates scope ✅

git push origin feature/account/profile-page
# Open PR → targeting module/account
```

---

### Feature Order Summary

```
types → urls → routes → Zod schema → RTK Query → i18n → component → route page → barrel → commit
```

---

---

## Part 2 — API Integration Process

### Step 0 — Know Your API Contract First

Before writing any code, get the spec from the backend team.

```
POST /auth/login
Content-Type: application/json

Request:
{ "email": "user@example.com", "password": "secret123" }

Success 200:
{ "user": { "id": "u_123", "email": "...", "fullName": "John Doe" }, "token": "eyJ..." }

Error 401:
{ "message": "Invalid credentials", "code": "AUTH_INVALID_CREDENTIALS" }
```

---

### Step 1 — Define Types from the Contract

```ts
// modules/auth/types/auth.types.ts
export interface User {
  id: string;
  email: string;
  fullName: string;
}

export interface LoginResponse {
  user: User;
  token: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
}
```

---

### Step 2 — Confirm Base URL

```ts
// shared/services/http.service.ts
const httpService = axios.create({
  baseURL: env.NEXT_PUBLIC_API_BASE_URL,
});
```

`.env.local` → `NEXT_PUBLIC_API_BASE_URL=https://api.rapid-erp.com`

`POST /auth/login` → `https://api.rapid-erp.com/auth/login` ✅

---

### Step 3 — Full Runtime Data Flow

```
User clicks "Sign in"
        │
        ▼
React Hook Form + Zod validate the form
        │  ✅ valid
        ▼
login(data).unwrap()  →  useLoginMutation  [authApi.ts]
        │
        ▼
axiosBaseQuery()  [baseApi.ts]
  http.instance({ url, method: 'POST', data })
        │
        ▼
Request interceptor  [http.service.ts]
  → attaches Authorization: Bearer <token> if exists
        │
        ▼
🌐 POST https://api.rapid-erp.com/auth/login
        │
        ├── 401 → interceptor normalizes error
        │          .unwrap() throws → catch → setApiError("Invalid credentials")
        │
        └── 200 → { user, token }
                        │
                        ▼
             dispatch(setCredentials({ user, token }))
                        │
                        ▼
             authSlice: isAuthenticated: true, user, token set
                        │
                        ▼
             router.push(ROUTES.DASHBOARD)  →  ✅ User is in
```

---

### Step 4 — Token Injection (Request Interceptor)

```ts
// shared/services/http.service.ts
httpService.interceptors.request.use((config) => {
  const token = store.getState().auth.token;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
```

---

### Step 5 — Error Normalization (Response Interceptor)

```ts
httpService.interceptors.response.use(
  (res) => res,
  (err: AxiosError<{ message: string; code: string }>) => {
    const normalizedError = {
      message: err.response?.data?.message ?? "Unexpected error",
      code: err.response?.data?.code ?? "UNKNOWN",
      status: err.response?.status ?? 0,
    };
    if (err.response?.status === 401) store.dispatch(reset()); // auto logout
    return Promise.reject(normalizedError);
  }
);
```

---

### Layer Responsibility Map

| Layer                       | Owns                                                   |
| --------------------------- | ------------------------------------------------------ |
| `http.service.ts`           | Axios instance, token injection, error normalization   |
| `baseApi.ts`                | RTK Query setup, converts Axios to RTK error shape     |
| `module/authApi.ts`         | Typed endpoints scoped to this module only             |
| `validation/auth.schema.ts` | What the form sends — Zod validates it                 |
| `types.ts`                  | What the API returns — TypeScript types it             |
| `component`                 | Calls mutation, dispatches to slice, handles UI states |
| `authSlice.ts`              | Stores result in Redux after a successful call         |

---

### Rules

- Never call `fetch()` or `axios` directly inside a component or page.
- Never trust API response types without Zod validation at the service boundary.
- Never hardcode API paths — always use `URLS` from `shared/constants/urls.ts`.
- Always use `.unwrap()` on mutations so errors are catchable in try/catch.
- Always dispatch `setCredentials` after a successful auth response.

---

## Part 3 — UI Components with Shadcn UI (Tailwind CSS v4)

This project integrates **Shadcn UI** for accessible, customizable, and consistent UI components.

### Core Architecture & Packages

All of the following libraries are installed and mandatory for the UI components to function properly:

1. **`class-variance-authority` (CVA)**: Powers CSS class generation for component state/size/variant variations (e.g., Buttons).
2. **`lucide-react`**: The standard icon library used across all UI components.
3. **`radix-ui`**: The accessible primitives wrapper that provides the logic/behavior for complex components like Checkboxes, Selects, and Switches.
4. **`tw-animate-css`**: Provides animation classes for transitions (e.g., dropdowns, slide-ins) working alongside Tailwind CSS v4.

### Folder Structure & Aliases

Shadcn is configured via [components.json](file:///Users/sumon/Downloads/Rapid/components.json) to place all new elements directly into the project's shared UI directory:

- Component files: `src/shared/components/ui/*.tsx`
- Utility/helpers: `src/shared/utils/cn.ts`

### Adding & Updating Components

To add a new component from Shadcn:

```bash
pnpm dlx shadcn@latest add <component-name>
```

> [!IMPORTANT]
> **Custom Properties Preservation**
> The project's UI components are tailored with common extensions (such as `isLoading` for `Button`, `error` props for validation feedback on `Input`/`Textarea`, and asterisk rendering on `Label`).
> If you overwrite or update existing components via the CLI, make sure to preserve these props and interfaces so you do not break the forms or typescript validation.
