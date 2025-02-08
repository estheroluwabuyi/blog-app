import { Link } from "react-router-dom";
import AuthRedirect from "../components/AuthRedirect";

function WelcomePage() {
  return (
    <div className="welcome">
      <h1 className="welcome-heading">
        Hundreds of blogs.
        <br />
        One place to read them all.
      </h1>

      <div className="welcome-links">
        <div className="signup-btn">
          <Link to="signup">Sign up free</Link>
        </div>

        <AuthRedirect to="login" text="Already have an account?">
          Login
        </AuthRedirect>
      </div>
    </div>
  );
}

export default WelcomePage;
