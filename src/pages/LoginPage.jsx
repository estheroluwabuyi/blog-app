import { useState } from "react";
import FormBtn from "../components/FormBtn";
import AuthRedirect from "../components/AuthRedirect";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="signup-form">
      <h1 className="signup-form-heading">Log in</h1>
      <input
        type="email"
        placeholder="Email"
        className="input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <FormBtn>Continue Reading</FormBtn>

      <AuthRedirect to="signup" text="Don't have an account?">
        Sign up
      </AuthRedirect>
    </form>
  );
}

export default LoginPage;
