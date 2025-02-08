import { useState } from "react";
import FormBtn from "../components/FormBtn";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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
    </form>
  );
}

export default LoginPage;
