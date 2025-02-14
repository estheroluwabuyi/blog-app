import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Search from "./Search";
import ThemeToggle from "./ThemeToggle";

function NavBar() {
  return (
    <nav className="nav-bar">
      <Logo />
      <NavLinks />
      <Search />
      {/* <ThemeToggle /> */}
    </nav>
  );
}

export default NavBar;
