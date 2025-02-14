import HeroBgImg from "./HeroBgImg";
import HeroCard from "./HeroCard";

function Hero() {
  return (
    <div className="hero">
      <HeroBgImg />
      <HeroCard heroCard="hero-card" heroCardImg="author.jpg">
        Jason Francisco
      </HeroCard>
    </div>
  );
}

export default Hero;
