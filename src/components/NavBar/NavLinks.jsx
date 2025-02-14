import { NavLink } from "react-router-dom";

function NavLinks() {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li className="nav-links--single">
        <NavLink to="/single">Single Post</NavLink>
        {/* <NavLink to="/single:id">Single Post</NavLink> */}
      </li>
      <li>
        <NavLink to="/author">Pages</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
  );
}

export default NavLinks;
