export type InputVariant = "default" | "filled" | "unstyled";
export type InputRadius = "sm" | "md" | "lg";
export type InputSize = "sm" | "md" | "lg";

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
