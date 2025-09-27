import { IconAt } from "@tabler/icons-react";
import { useRef, useState } from "react";
import { Input, Properties } from "../../components";
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

export const Signup = ({ onSubmit }: SignupProps) => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   nickname: "",
  //   email: "",
  //   gender: "",
  //   password: "",
  //   confirmPassword: "",
  // });
  const formData = useRef({
    name: "",
    nickname: "",
    email: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const currentInputRef = useRef<HTMLFormElement>(null);

  const handleBlur = (e: React.FocusEvent<HTMLFormElement>) => {
    const { name } = e.target;
    //setFormData((prev) => ({ ...prev, [name]: "" }));
    console.log("Input blurred:", name);
  };

  const handleFocus = (e: React.FocusEvent<HTMLFormElement>) => {
    const { name } = e.target;
    currentInputRef.current = e.target;
    //setFormData((prev) => ({ ...prev, [name]: "" }));
    console.log("Input focused:", name);
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
        <Properties />
      </div>
    </div>
  );
};
