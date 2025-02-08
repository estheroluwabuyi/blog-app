import { Link } from "react-router-dom";

function AuthRedirect({ to, children, text }) {
  return (
    <div className="auth-redirect">
      {text}{" "}
      <span>
        <Link to={`/${to}`}>{children}</Link>
      </span>
    </div>
  );
}

export default AuthRedirect;
