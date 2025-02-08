import { Link } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

function WelcomePage() {
  return (
    <div className="welcome">
      <h1 className="welcome-heading">
        Hundreds of blogs.
        <br />
        One place to read them all.
      </h1>
      <ul className="welcome-links">
        <li className="signup">
          <Link to="signup">Sign up free</Link>
        </li>
        <li className="login">
          <Link to="login">Login</Link>
        </li>
      </ul>
    </div>
  );
}

export default WelcomePage;
