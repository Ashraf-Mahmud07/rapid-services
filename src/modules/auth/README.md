# Auth Module

Handles all authentication flows: login, registration, and session management.

## Public API (`index.ts`)

Import everything from the barrel — never import internal files directly from outside this module.

```ts
import { LoginForm, RegisterForm, setCredentials, resetAuth } from "@/modules/auth";
import { useLoginMutation, useRegisterMutation } from "@/modules/auth";
import { useLoginForm, useRegisterForm } from "@/modules/auth";
import type { AuthState, User } from "@/modules/auth";
```

## Data Flow

```
Component (LoginForm / RegisterForm)
    │  uses
    ▼
Hook (useLoginForm / useRegisterForm)
    │  uses
    ▼
services/authApi.ts  (RTK Query mutations + Zod response boundary validation)
    │  built on
    ▼
store/api/baseApi.ts  (axiosBaseQuery)
    │  uses
    ▼
shared/services/http.service.ts  (Axios instance)
    │
    ▼
API Server
    │
    ▼
dispatch(setCredentials({ user, token }))  →  store/authSlice state updated
```

## Module Structure

```
modules/auth/
├── components/
│   ├── LoginForm.tsx          — Presentational login form UI
│   └── RegisterForm.tsx       — Presentational register form UI
├── hooks/
│   ├── useLoginForm.ts        — Encapsulates login form state & submission logic
│   └── useRegisterForm.ts     — Encapsulates register form state & submission logic
├── services/
│   └── authApi.ts             — RTK Query endpoints with Zod response validation
├── store/
│   └── authSlice.ts           — Redux slice: isAuthenticated, user, token
├── constants/
│   └── auth.constants.ts      — Default form values & module config
├── types/
│   └── auth.types.ts          — User, LoginResponse, RegisterResponse, AuthState
├── validation/
│   └── auth.schema.ts         — Zod schemas: loginSchema, registerSchema, response schemas
├── i18n/
│   ├── en.json                — English translations (namespace: auth.*)
│   └── ar.json                — Arabic translations (namespace: auth.*)
├── README.md
└── index.ts                   — Public barrel export
```

## State

| State field | Type | Set by |
|-------------|------|--------|
| `isAuthenticated` | `boolean` | `setCredentials` action |
| `user` | `User \| null` | `setCredentials` action |
| `token` | `string \| null` | `setCredentials` action |

Access via `useAppSelector(state => state.auth)`.

## i18n Keys

All keys live under the `auth` namespace. Usage:

```ts
const t = useTranslations("auth");
t("signIn")      // → "Sign in"
t("signInTitle") // → "Welcome back"
```

## Key Gotchas

- After a successful login/register API call, dispatch `setCredentials` with the user and token from the response — otherwise `isAuthenticated` stays `false`.
- The auth token is stored in Redux state (memory only). For persistence across page refresh, set an `httpOnly` cookie from your API server — middleware reads `auth-token` cookie.
- Validation error messages in Zod schemas are i18n keys (e.g. `"emailInvalid"`), resolved via `getFieldError` helper in custom hooks.
