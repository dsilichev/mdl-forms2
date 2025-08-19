import { Signin } from "./components";
import { Signup } from "./components";
import "./app.css";

export const App = () => {
  const handleSignin = (data: { email: string; password: string }) => {
    console.log("Signin data:", data);
  };

  const handleSignup = (data: {
    name: string;
    nickname: string;
    email: string;
    gender: string;
    password: string;
    confirmPassword: string;
  }) => {
    console.log("Signup data:", data);
  };

  return (
    <>
      <div className="form-container">
        <h1>Sign In</h1>
        <Signin onSubmit={handleSignin} />
      </div>
      <Signup onSubmit={handleSignup} />
    </>
  );
};
