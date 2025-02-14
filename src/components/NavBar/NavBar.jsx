import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SearchToggle from "./SearchToggle";

function NavBar() {
  return (
    <nav className="nav-bar">
      <Logo />
      <NavLinks />
      <SearchToggle />
    </nav>
  );
}

export default NavBar;
