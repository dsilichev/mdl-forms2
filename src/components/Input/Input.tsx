import "./Input.css";
import type * as InputTypes from "./Input.types";

export const Input = ({
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
  ref,
  ...props
}: InputTypes.InputProps) => {
  const inputClasses = `input input--${variant} input--radius-${radius} input--size-${textSize} ${
    disabled ? "input--disabled" : ""
  } ${icon ? "input--with-icon" : ""} ${error ? "input--error" : ""}`;

  return type === "checkbox" ? (
    <div className="input-checkbox-wrapper">
      <label className="input-label" htmlFor={name}>
        {label}
        {withAsterisk && <span className="input-asterisk"> *</span>}
      </label>
      <input
        ref={ref}
        className="input-checkbox"
        type={type}
        id={name}
        name={name}
        disabled={disabled}
        {...props}
      />
    </div>
  ) : type === "radio" ? (
    <fieldset className="input-radio-group-wrapper">
      {label && (
        <legend className="input-label">
          {label}
          {withAsterisk && <span className="input-asterisk"> *</span>}
        </legend>
      )}
      {description && <p className="input-description">{description}</p>}
      <div className="input-radio-options">
        {options?.map((option) => (
          <div key={option} className="input-radio-option">
            <input
              type="radio"
              id={`${name}-${option}`}
              name={name}
              value={option}
              disabled={disabled}
              {...props}
            />
            <label htmlFor={`${name}-${option}`}>{option}</label>
          </div>
        ))}
      </div>
      {error && <p className="input-error">{error}</p>}
    </fieldset>
  ) : (
    <div className="input-wrapper">
      {label && (
        <label className="input-label" htmlFor={name}>
          {label}
          {withAsterisk && <span className="input-asterisk"> *</span>}
        </label>
      )}
      {description && <p className="input-description">{description}</p>}
      <div className="input-with-icon-wrapper">
        {icon && <div className="input-icon">{icon}</div>}
        <input
          ref={ref}
          type={type}
          id={name}
          className={inputClasses}
          name={name}
          disabled={disabled}
          {...props}
        />
      </div>
      {error && <p className="input-error">{error}</p>}
    </div>
  );
};
