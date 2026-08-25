export type InputVariant = "default" | "filled" | "unstyled";
export type InputRadius = "sm" | "md" | "lg";
export type InputSize = "sm" | "md" | "lg";
export type InputType = "text" | "password" | "email" | "checkbox" | "radio";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  description?: string;
  error?: string;
  variant?: InputVariant;
  radius?: InputRadius;
  textSize?: InputSize;
  disabled?: boolean;
  withAsterisk?: boolean;
  icon?: React.ReactNode;
  type?: InputType;
  options?: string[] | null;
  ref?: React.Ref<HTMLInputElement>;
}
