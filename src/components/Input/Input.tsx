//import { Ref } from "react";
import "./Input.css";
import type * as InputTypes from "./Input.types";

export const Input = (
  {
    name,
    label,
    description,
    error,
    variant = "default",
    radius = "sm",
    textSize = "md",
    disabled = false,
    withAsterisk = false,
    type = "text",
    options = null,
    icon,
    ...props
  }: InputTypes.InputProps,
  //ref?: Ref<HTMLInputElement>,
) => {
  const Sizes: Record<string, string> = {
    "0": "sm",
    "100": "md",
    "200": "lg",
  };

  const inputClasses = `input input--${variant} input--radius-${Sizes[radius]} input--size-${Sizes[textSize]} ${disabled ? "input--disabled" : ""
    } ${icon ? "input--with-icon" : ""}`;

  return type === "checkbox" ? (
    <div className="input-checkbox-wrapper">
      <label className="input-label" htmlFor={name}>
        {label}
      </label>
      <input
        className="input-checkbox"
        type={type}
        id={name}
        name={name}
        disabled={disabled}
        {...props}
      />
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
      <div className="input-with-icon-wrapper">
        {icon && <div className="input-icon">{icon}</div>}
        <input
          //ref={ref}
          className={inputClasses}
          name={name}
          disabled={disabled}
          //placeholder={props.placeholder}
          {...props}
        />
      </div>
      {error && <p className="input-error">{error}</p>}
    </div>
  );
};
