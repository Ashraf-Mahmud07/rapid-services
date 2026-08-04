# Auth Module

Handles all authentication flows: login, registration, and session management.

## Public API (`index.ts`)

Import everything from the barrel — never import internal files directly from outside this module.

```ts
import { LoginForm, RegisterForm, setCredentials, resetAuth } from '@/modules/auth';
import { useLoginMutation, useRegisterMutation } from '@/modules/auth';
import type { AuthState, User } from '@/modules/auth';
```

## Data Flow

```
Component (LoginForm / RegisterForm)
    │  uses
    ▼
authApi.ts  (RTK Query mutations)
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
dispatch(setCredentials({ user, token }))  →  authSlice state updated
```

## Module Structure

```
modules/auth/
├── components/
│   ├── LoginForm.tsx       — login form, uses useLoginMutation
│   └── RegisterForm.tsx    — register form, uses useRegisterMutation
├── authApi.ts              — RTK Query endpoints (login, register)
├── authSlice.ts            — Redux slice: isAuthenticated, user, token
│                             actions: setCredentials, reset
├── types.ts                — User, AuthState interfaces
├── validation/
│   └── auth.schema.ts      — Zod schemas: loginSchema, registerSchema
├── i18n/
│   ├── en.json             — English translations (namespace: auth.*)
│   └── ar.json             — Arabic translations (namespace: auth.*)
└── index.ts                — Public barrel export
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
const t = useTranslations('auth');
t('signIn')      // → "Sign in"
t('signInTitle') // → "Welcome back"
```

## Key Gotchas

- After a successful login/register API call, you **must** dispatch `setCredentials` with the user and token from the response — otherwise `isAuthenticated` stays `false`.
- The auth token is stored in Redux state (memory only). For persistence across page refresh, also set an `httpOnly` cookie from your API server — the middleware reads `auth-token` cookie.
- Validation error messages in Zod schemas are i18n keys (e.g. `"emailInvalid"`), not literal strings — they are resolved via `t(errors.email.message)` in the component.
