import { Link } from "react-router-dom";

function WelcomePage() {
  return (
    <div className="welcome">
      <h1 className="welcome-heading">
        Hundreds of blogs.
        <br />
        One place to read them all.
      </h1>
      <ul className="welcome-links">
        <li className="signup-btn">
          <Link to="signup">Sign up free</Link>
        </li>
        <li className="login-btn">
          <Link to="login">Login</Link>
        </li>
      </ul>
    </div>
  );
}

export default WelcomePage;
