import { useState } from "react";
import { Input } from "../../components";

interface SigninProps {
  onSubmit: (data: { email: string; password: string }) => void;
}

export const Signin = ({ onSubmit }: SigninProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="email"
        label="Email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        withAsterisk
      />
      <Input
        type="password"
        label="Password"
        placeholder="Your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        withAsterisk
      />
      <button type="submit">Войти</button>
    </form>
  );
};
