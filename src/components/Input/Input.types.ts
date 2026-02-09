export type InputVariant = "default" | "filled" | "unstyled";
export type InputRadius = "xs" | "sm" | "md" | "lg" | "xl";
export type InputSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  error?: string;
  variant?: InputVariant;
  radius?: InputRadius;
  textSize?: InputSize;
  disabled?: boolean;
  withAsterisk?: boolean;
  icon?: React.ReactNode;
  type?: string;
  options?: string[] | null;
}
