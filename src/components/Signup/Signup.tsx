import { IconAt } from "@tabler/icons-react";
import { useRef, useState } from "react";
import { Input, Properties } from "..";
import type * as InputTypes from "../Input/Input.types";
import {
  type SignupData,
  validateSignup,
  validateSignupField,
} from "../../utils/validation";
import "./Signup.css";

interface SignupProps {
  onSubmit: (data: SignupData) => void;
}

export interface FormProps {
  [propName: string]: InputTypes.InputProps;
}

interface FieldConfig {
  name: string;
  type: InputTypes.InputType;
  icon?: React.ReactNode;
  options?: string[];
}

const FIELDS: FieldConfig[] = [
  { name: "name", type: "text" },
  { name: "nickname", type: "text", icon: <IconAt size="1rem" /> },
  { name: "email", type: "email" },
  { name: "gender", type: "radio", options: ["Male", "Female", "Other"] },
  { name: "password", type: "password" },
  { name: "confirmPassword", type: "password" },
];

const initialFormProperties: FormProps = FIELDS.reduce(
  (acc, field) => ({
    ...acc,
    [field.name]: {
      name: field.name,
      placeholder: `Your ${field.name}`,
      label: `${field.name[0].toUpperCase() + field.name.slice(1)}`,
      description: "",
      error: "",
      variant: "default",
      radius: "sm",
      textSize: "md",
      disabled: false,
      withAsterisk: false,
      type: field.type,
      options: field.options || null,
    },
  }),
  {} as FormProps,
);

export const Signup = ({ onSubmit }: SignupProps) => {
  const formData = useRef<SignupData>({
    name: "",
    nickname: "",
    email: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const [formProperties, setFormProperties] = useState<FormProps>({
    default: {
      placeholder: "Your placeholder",
      label: "Your label",
      description: "Your description",
      error: "",
      variant: "default",
      radius: "sm",
      textSize: "md",
      disabled: false,
      withAsterisk: false,
    },
    ...initialFormProperties,
  });

  const [currentInputName, setCurrentInputName] =
    useState<keyof FormProps>("default");

  const setFieldError = (name: string, message: string) => {
    setFormProperties((prev) => ({
      ...prev,
      [name]: { ...prev[name], error: message },
    }));
  };

  const handleFocus = (e: React.FocusEvent<HTMLFormElement>) => {
    const { name } = e.target;
    if (!name || !(name in formProperties)) return;
    setCurrentInputName(name);
  };

  const handleBlur = (e: React.FocusEvent<HTMLFormElement>) => {
    const { name } = e.target;
    if (!(name in formData.current)) return;
    setFieldError(
      name,
      validateSignupField(name as keyof SignupData, formData.current),
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    const { name, value } = e.target;
    formData.current = { ...formData.current, [name]: value };
    if (formProperties[name]?.error) {
      setFieldError(name, "");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateSignup(formData.current);
    for (const [name, message] of Object.entries(errors)) {
      if (message) setFieldError(name, message);
    }
    const hasErrors = Object.values(errors).some(Boolean);
    if (hasErrors) return;
    onSubmit(formData.current);
  };

  return (
    <div className="form-container-wrap">
      <div className="form-container">
        <h1>Sign Up</h1>
        <form
          onSubmit={handleSubmit}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          {FIELDS.map((field) => {
            const props = formProperties[field.name];
            return (
              <Input
                key={field.name}
                name={field.name}
                label={props.label || `${field.name[0].toUpperCase() + field.name.slice(1)}`}
                placeholder={props.placeholder}
                description={props.description}
                error={props.error}
                variant={props.variant}
                radius={props.radius}
                textSize={props.textSize}
                disabled={props.disabled}
                withAsterisk={props.withAsterisk}
                type={field.type}
                options={field?.options || null}
                icon={field.icon}
              />
            );
          })}
          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>
      <div className="form-container">
        <h1>Properties</h1>
        <Properties
          formProperties={formProperties}
          setFormProperties={setFormProperties}
          currentInputName={currentInputName}
        />
      </div>
    </div>
  );
};
