const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-banner">
        <h1>backroads app</h1>
        <p>
          {/* a brief hero for the app */}
          You can find the best tours and travel packages with Backroads, the
          best app for traveler, adventurer, and explorer.
        </p>
        <a href="#tours" className="btn hero-btn">
          explore tours
        </a>
      </div>
    </section>
  );
};
export default Hero;
