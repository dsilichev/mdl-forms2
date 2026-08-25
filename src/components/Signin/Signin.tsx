import { useRef, useState } from "react";
import { Input } from "..";
import { isEmail, isRequired } from "../../utils/validation";
import "./Signin.css";

interface SigninProps {
  onSubmit: (data: { email: string; password: string }) => void;
}

export const Signin = ({ onSubmit }: SigninProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const signinData = useRef({ email: "", password: "" });
  const [isDisabled, setIsDisabled] = useState(true);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {},
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: typeof errors = {};
    if (!isEmail(signinData.current.email)) {
      nextErrors.email = "Enter a valid email";
    }
    if (!isRequired(signinData.current.password)) {
      nextErrors.password = "Password is required";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    onSubmit({ ...signinData.current });
    formRef.current?.reset();
    setIsDisabled(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    const { name, value } = e.target;
    signinData.current = { ...signinData.current, [name]: value };
    setErrors((prev) => ({ ...prev, [name]: undefined }));
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
        error={errors.email}
        withAsterisk
      />
      <Input
        type="password"
        name="password"
        label="Password"
        placeholder="Your password"
        error={errors.password}
        withAsterisk
      />
      <button type="submit" disabled={isDisabled}>
        Войти
      </button>
    </form>
  );
};
