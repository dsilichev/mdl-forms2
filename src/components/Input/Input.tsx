import { Ref } from "react";
import { InputProps } from "./Input.types";
import "./Input.css";

export const Input = (
  {
    label,
    description,
    error,
    variant = "default",
    radius = "sm",
    textSize = "md",
    disabled = false,
    withAsterisk = false,
    type = "text",
    ...props
  }: InputProps,
  ref?: Ref<HTMLInputElement>,
) => {
  const inputClasses = `input input--${variant} input--radius-${radius} input--size-${textSize} ${
    disabled ? "input--disabled" : ""
  }`;

  return type === "checkbox" ? (
    <div className="input-checkbox-wrapper">
      <label className="input-label">{label}</label>
      <input className="input-checkbox" type={type}></input>
    </div>
  ) : (
    <div className="input-wrapper">
      {label && (
        <label className="input-label">
          {label}
          {withAsterisk && <span className="input-asterisk"> *</span>}
        </label>
      )}
      {description && <p className="input-description">{description}</p>}
      <input
        ref={ref}
        className={inputClasses}
        disabled={disabled}
        {...props}
      />
      {error && <p className="input-error">{error}</p>}
    </div>
  );
};
