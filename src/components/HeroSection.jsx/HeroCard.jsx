function HeroCard({
  children,
  heroCard,
  heroCardText,
  heroCardImg,
  className,
}) {
  return (
    <section className={`${heroCard} ${className}`}>
      <div className="hero-card--badge">Technology</div>
      <h2 className="hero-card-heading">
        The Impact of Technology on the Workplace: How Technology is Changing
      </h2>

      <div className="hero-card--footer">
        <div className="hero-card--author">
          <div className="hero-card--author-img">
            <img src={heroCardImg} alt="avatar" width="150" height="150" />
          </div>
          <div className="hero-card--name">{children}</div>
        </div>

        <div className="hero-card--date">August 20, 2022</div>
      </div>
    </section>
  );
}

export default HeroCard;

// her-card
