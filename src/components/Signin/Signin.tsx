import { useRef, useState } from "react";
import { Input } from "..";
import "./Signin.css";

interface SigninProps {
  onSubmit: (data: { email: string; password: string }) => void;
}

export const Signin = ({ onSubmit }: SigninProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const signinData = useRef({ email: "", password: "" });
  const [isDisabled, setIsDisabled] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = signinData.current;
    onSubmit({ email, password });
    formRef.current?.reset();
    setIsDisabled(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    const { name, value } = e.target;
    signinData.current = { ...signinData.current, [name]: value };
    setIsDisabled(!(signinData.current.email && signinData.current.password));
  };

  return (
    <form
      className="form-container"
      ref={formRef}
      onSubmit={handleSubmit}
      onChange={handleChange}
    >
      <Input
        type="email"
        name="email"
        label="Email"
        placeholder="Your email"
        withAsterisk
      />
      <Input
        type="password"
        name="password"
        label="Password"
        placeholder="Your password"
        withAsterisk
      />
      <button type="submit" disabled={isDisabled}>
        Войти
      </button>
    </form>
  );
};
