import { IconAt } from "@tabler/icons-react";
import { useRef, useState } from "react";
import { Input, Properties } from "..";
import type * as InputTypes from "../Input/Input.types";
import "./Signup.css";

interface SignupProps {
  onSubmit: (data: {
    name: string;
    nickname: string;
    email: string;
    gender: string;
    password: string;
    confirmPassword: string;
  }) => void;
}

export interface FormProps {
  [propName: string]: InputTypes.InputProps;
}

// TODO: use this structure to generate Signup form
const FIELDS = [
  { name: "name", type: "input" },
  { name: "nickname", type: "input", icon: <IconAt size="1rem" /> },
  { name: "email", type: "input" },
  { name: "gender", type: "select", options: ["Male", "Female", "Other"] },
  { name: "password", type: "password" },
  { name: "confirmPassword", type: "password" },
];

export const Signup = ({ onSubmit }: SignupProps) => {
  const formData = useRef({
    name: "",
    nickname: "",
    email: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  // fill formProperties
  let initialFormProperties: FormProps = {};
  for (const field of FIELDS) {
    initialFormProperties = {
      ...initialFormProperties,
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
    };
  }

  const [formProperties, setFormProperties] = useState<FormProps>({
    default: {
      placeholder: "Your placeholder",
      label: "Your label  ",
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
  console.log("Form properties:", formProperties);

  const [currentInputName, setCurrentInputName] =
    useState<keyof FormProps>("default");

  const handleBlur = (_e: React.FocusEvent<HTMLFormElement>) => {
    // Logic for blur can be added here if needed
  };

  const handleFocus = (e: React.FocusEvent<HTMLFormElement>) => {
    const { name } = e.target;
    setCurrentInputName(name);
    console.log("Input focused:", e.target);
  };

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    const { name, value } = e.target;
    formData.current = { ...formData.current, [name]: value };
    //setFormData((prev) => ({ ...prev, [name]: value }));
    console.log("Input changed:", name, value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
