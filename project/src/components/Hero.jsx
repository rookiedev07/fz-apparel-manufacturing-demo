import './Hero.css';
import hero from "../assets/hero.jpg"

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <img
          src={hero}
          alt="Fashion editorial"
          className="hero-image"
          loading="eager"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          Refined. Minimal.<br />Fearlessly You.
        </h1>
        <p className="hero-subtitle">
          Curated essentials with timeless appeal.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary">Shop Now</button>
          <button className="btn btn-secondary">Explore Collection</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
