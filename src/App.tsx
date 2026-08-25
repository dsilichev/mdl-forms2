import { useState } from "react";
import "./app.css";
import { Signin, Signup } from "./components";

type Tab = "signin" | "signup";

const TABS: { id: Tab; label: string }[] = [
  { id: "signin", label: "Войти" },
  { id: "signup", label: "Зарегистрироваться" },
];

export const App = () => {
  const [activeTab, setActiveTab] = useState<Tab>("signup");
  const [message, setMessage] = useState("");

  const handleSignin = (data: { email: string; password: string }) => {
    console.log("Signin data:", data);
    setMessage(`Signed in as ${data.email}`);
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
    setMessage(`Account created for ${data.nickname}`);
  };

  return (
    <div className="app">
      <nav className="tabs" role="tablist">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            className={`tab ${activeTab === tab.id ? "tab--active" : ""}`}
            onClick={() => {
              setActiveTab(tab.id);
              setMessage("");
            }}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {activeTab === "signin" ? (
        <section className="form-container form-container--card">
          <h1>Sign In</h1>
          <Signin onSubmit={handleSignin} />
        </section>
      ) : (
        <>
          <Signup onSubmit={handleSignup} />
        </>
      )}

      {message && <p className="form-message">{message}</p>}
    </div>
  );
};
