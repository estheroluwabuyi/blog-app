import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <div className="logo">
      <NavLink to="/">
        <img src="logo.png" alt="logo" />
      </NavLink>
    </div>
  );
}

export default Logo;
