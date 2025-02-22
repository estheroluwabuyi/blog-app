import HeroBgImg from "./HeroBgImg";
import HeroCard from "./HeroCard";
import AdCard from "../AdCard/AdCard";

function Hero() {
  return (
    <div className="hero">
      <HeroBgImg />
      <HeroCard heroCard="hero-card" heroCardImg="author.jpg">
        Jason Francisco
      </HeroCard>
      <AdCard />
    </div>
  );
}

export default Hero;
