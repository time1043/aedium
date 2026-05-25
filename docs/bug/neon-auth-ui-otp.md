# Bug

## Case 1

- Turn on `Verify at Sign-up` in neon console
- The UI links `/auth/sign-in` instead of `/auth/email-otp`(**expect**) when user sign up first time
- The user don't know how to do in `/auth/sign-in`, although verify email already send

# Background

## Dependency

- `node_modules/@neondatabase/auth-ui/package.json`

- `@neondatabase/auth@0.4.1-beta` -> `better-auth@1.4.18`
- `@neondatabase/auth-ui@0.2.0-beta` -> `@daveyplate/better-auth-ui@3.3.9`
- `NeonAuthUIProvider` -> `AuthUIProvider`

# OTP

## Better Auth

```ts
const types = ['email-verification', 'sign-in', 'forget-password'];
```

| Endpoint                           | Identifier                       | Explain                     |
| ---------------------------------- | -------------------------------- | --------------------------- |
| `/email-otp/send-verification-otp` | `{type}-otp-{email}`             | send OTP with specific type |
| `/email-otp/verify-email`          | `email-verification-otp-{email}` | verify email                |
| `/sign-in/email-otp`               | `sign-in-otp-{email}`            | OTP login                   |

## Neon Auth
