import './Editorial.css';

const Editorial = () => {
  return (
    <section className="editorial" id="about">
      <div className="editorial-container">
        <div className="editorial-image">
          <img
            src="https://images.pexels.com/photos/2112651/pexels-photo-2112651.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="FZ Apparel philosophy"
            loading="lazy"
          />
        </div>

        <div className="editorial-content">
          <div className="editorial-accent-line"></div>
          <h2 className="editorial-title">We design for those who dare to stand out quietly.</h2>
          <p className="editorial-text">
            At FZ Apparel, we believe that true luxury lies in simplicity. Each piece is meticulously crafted to embody timeless elegance and uncompromising quality. Our philosophy is rooted in mindful design, where every stitch tells a story of refinement.
          </p>
          <p className="editorial-text">
            From the finest fabrics to the cleanest silhouettes, we create clothing that transcends seasons and trends. This is fashion for those who value substance over spectacle.
          </p>
          <button className="btn-text">Discover Our Story</button>
        </div>
      </div>
    </section>
  );
};

export default Editorial;
