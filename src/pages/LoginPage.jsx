import { useState } from "react";
import FormBtn from "../components/FormBtn";
import AuthRedirect from "../components/AuthRedirect";
import { useNavigate } from "react-router-dom";

const URL = "https://artistic-insights-alley-api.onrender.com/api";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleFocus = () => {
    setErrorMessage("");
      setErrorMessage("")
  };

  const handleSubmit = async (e) => {
   

    setLoading(true);

    try {
      const response = await fetch(`${URL}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("accessToken", data.access);
        localStorage.setItem("refreshToken", data.refresh);
        navigate("/dashboard");
      } else {
        setError(true);
        setEmail("");
        setPassword("");
        setErrorMessage("Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      setErrorMessage("Network error. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h1 className="signup-form-heading">Log in</h1>
      <input
        type="email"
        placeholder="Email"
        className="input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        onFocus={handleFocus}
      />

      <input
        type="password"
        placeholder="Password"
        className="input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        onFocus={handleFocus}
      />

      {loading ? (
        <FormBtn loading={loading}>Loading...</FormBtn>
      ) : (
        <FormBtn>Continue Reading</FormBtn>
      )}

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {error && (
        <AuthRedirect to="signup" text="Don't have an account?">
          Sign up
        </AuthRedirect>
      )}
    </form>
  );
}

export default LoginPage;
