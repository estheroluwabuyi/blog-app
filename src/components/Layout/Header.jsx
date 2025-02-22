import Hero from "../HeroSection/Hero";
import NavBar from "../NavBar/NavBar";

function Header() {
  return (
    <div className="header">
      <NavBar />
      <Hero />
    </div>
  );
}

export default Header;
