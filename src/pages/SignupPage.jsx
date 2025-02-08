import { useState } from "react";
import FormBtn from "../components/FormBtn";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="signup-form">
      <h1 className="signup-form-heading">Sign Up</h1>
      <input
        type="email"
        placeholder="Email"
        className="input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="First Name"
        className="input"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        className="input"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <FormBtn>Start Reading</FormBtn>
    </form>
  );
}

export default SignupPage;
