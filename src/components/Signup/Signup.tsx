import { IconAt } from "@tabler/icons-react";
import { useRef, useState } from "react";
import { Input, Properties } from "../../components";
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

const FIELDS = [
  "name",
  "nickname",
  "email",
  "gender",
  "password",
  "confirmPassword",
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

  // const genDefaultFormProps = (props: FormProps) => ({
  //   placeholder: props.placeholder,
  //   label: props.label,
  //   description: "",
  //   error: "",
  //   variant: "default",
  //   radius: "sm",
  //   size: "md",
  //   isDisabled: false,
  //   withAsterisk: false,
  // });

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
  });

  //const currentInputRef = useRef<HTMLFormElement>(null);
  //const currentInputNameRef = useRef<keyof FormProps>("default");
  const [currentInputName, setCurrentInputName] =
    useState<keyof FormProps>("default");

  const handleBlur = (e: React.FocusEvent<HTMLFormElement>) => {
    const { name } = e.target;
    //setFormData((prev) => ({ ...prev, [name]: "" }));
    //console.log("Input blurred:", e.target);
  };

  const handleFocus = (e: React.FocusEvent<HTMLFormElement>) => {
    const { name } = e.target;
    //currentInputRef.current = e.target;
    //currentInputNameRef.current = name;
    setCurrentInputName(name);
    //setFormData((prev) => ({ ...prev, [name]: "" }));
    setFormProperties((prev) => ({
      ...prev,
      [name]: {
        placeholder: `Your ${name}`,
        label: `${name[0].toUpperCase() + name.slice(1)}`,
        description: "Your description",
        error: "",
        variant: "default",
        radius: "sm",
        textSize: "md",
        disabled: false,
        withAsterisk: false,
      },
    }));
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
          <Input
            name="name"
            label="Name"
            placeholder="Your name"
            //value={formData.name}
            //onChange={handleChange}
            withAsterisk
          />
          <Input
            name="nickname"
            label="Nickname"
            placeholder="Your nickname"
            //value={formData.nickname}
            //onChange={handleChange}
            icon={<IconAt size="1rem" />}
          />
          <Input
            name="email"
            type="email"
            label="Email"
            placeholder="your@email.com"
            //value={formData.email}
            //onChange={handleChange}
            withAsterisk
          />
          <div>
            <span>Gender:</span>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                readOnly
                checked={formData.gender === "male"}
              //onChange={handleChange}
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                readOnly
                checked={formData.gender === "female"}
              //onChange={handleChange}
              />{" "}
              Female
            </label>
          </div>
          <Input
            name="password"
            type="password"
            label="Password"
            placeholder="Your password"
            //value={formData.password}
            //onChange={handleChange}
            withAsterisk
          />
          <Input
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            placeholder="Repeat your password"
            //value={formData.confirmPassword}
            //onChange={handleChange}
            withAsterisk
          />
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
