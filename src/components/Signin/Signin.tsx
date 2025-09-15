import { useRef, useState } from "react";
import "./Signin.css";

interface SigninProps {
  onSubmit: (data: { email: string; password: string }) => void;
}

export const Signin = ({ onSubmit }: SigninProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const signinData = useRef({ email: "", password: "" });
  const [isDisabled, setIsDisabled] = useState(true);
  const { email, password } = signinData.current;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ email, password });
    formRef.current?.reset();
  };

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    const { name, value } = e.target;
    signinData.current = { ...signinData.current, [name]: value };

    if (signinData.current.email && signinData.current.password) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const handleReset = () => {
    signinData.current = { email: "", password: "" };
    formRef.current?.reset();
    setIsDisabled(true);
  };

  return (
    <form
      className="form-container"
      ref={formRef}
      onSubmit={handleSubmit}
      onChange={handleChange}
      onReset={handleReset}
    >
      <input
        className="input input--default input--radius-sm input--size-md "
        type="email"
        name="email"
        placeholder="Your email"
      />
      <input
        className="input input--default input--radius-sm input--size-md "
        type="password"
        name="password"
        placeholder="Your password"
      />
      <button type="submit" disabled={isDisabled}>
        Войти
      </button>
    </form>
  );
};
