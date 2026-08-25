# mdl-forms2

A React forms playground: a reusable, configurable `Input` component and two demo forms — **Sign In** and **Sign Up** — with live-editable input properties ("Properties" panel) and hand-rolled validation.

Built with React 19, TypeScript, and Vite. UI labels are in Russian («Войти», «Зарегистрироваться»).

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run lint     # eslint
npm run build    # typecheck + production build
```

## Components

### `Input`

Configurable form control supporting `text` / `password` / `email` / `checkbox` / `radio`. Refs are forwarded via the React 19 ref-as-prop pattern.

| Prop           | Type                                                | Default     | Description                          |
| -------------- | --------------------------------------------------- | ----------- | ------------------------------------ |
| `name`         | `string`                                            | required    | Input name / id                      |
| `type`         | `"text" \| "password" \| "email" \| "checkbox" \| "radio"` | `"text"` | Control type                  |
| `label`        | `string`                                            | —           | Field label (legend for radio group) |
| `description`  | `string`                                            | —           | Helper text under the label          |
| `error`        | `string`                                            | —           | Error message; also highlights the field |
| `variant`      | `"default" \| "filled" \| "unstyled"`               | `"default"` | Visual variant                       |
| `radius`       | `"sm" \| "md" \| "lg"`                              | `"sm"`      | Corner radius                        |
| `textSize`     | `"sm" \| "md" \| "lg"`                              | `"md"`      | Text size                            |
| `disabled`     | `boolean`                                           | `false`     | Disabled state                       |
| `withAsterisk` | `boolean`                                           | `false`     | Required marker on the label         |
| `icon`         | `ReactNode`                                         | —           | Icon inside the field                |
| `options`      | `string[] \| null`                                  | `null`      | Options for the radio group          |
| `ref`          | `Ref<HTMLInputElement>`                             | —           | Forwarded to the native input        |

All remaining native `<input>` attributes are passed through.

### `Signin`

Email + password form. Submit stays disabled until both fields are filled; validates email format on submit and resets after success.

```tsx
<Signin onSubmit={(data: { email: string; password: string }) => ...} />
```

### `Signup`

Form generated from a `FIELDS` config (name, nickname, email, gender radio group, password, confirm password). Validates on blur and on submit: required fields, email format, minimum password length, password match. Errors render through each field's `error` prop and clear as you type.

```tsx
<Signup onSubmit={(data: SignupData) => ...} />
```

Renders alongside a **Properties** panel that live-edits the currently focused field's props (placeholder, label, description, error text, variant, radius, size, disabled, asterisk).

## Validation utilities

See `src/utils/validation.ts`: `isRequired`, `isEmail`, `hasMinLength`, plus per-field `validateSignupField` / whole-form `validateSignup`.

## Project structure

```
src/
  components/
    Input/        # reusable configurable input
    Signin/       # sign-in form
    Signup/       # dynamic sign-up form + Properties panel
    Properties/   # live property editor for the focused field
  utils/
    validation.ts # validation helpers
  App.tsx         # tab layout («Войти» / «Зарегистрироваться»)
```
