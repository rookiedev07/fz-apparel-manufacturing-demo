import { useState, useEffect } from 'react';
import './Lookbook.css';

const lookbookImages = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Autumn Collection',
    subtitle: 'Timeless Sophistication'
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Essential Layers',
    subtitle: 'Modern Minimalism'
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/2112651/pexels-photo-2112651.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Evening Edit',
    subtitle: 'Refined Elegance'
  },
  {
    id: 4,
    url: 'https://images.pexels.com/photos/5710082/pexels-photo-5710082.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Casual Luxury',
    subtitle: 'Effortless Style'
  }
];

const Lookbook = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % lookbookImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="lookbook">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Lookbook</h2>
          <p className="section-subtitle">Explore our latest seasonal collection</p>
        </div>

        <div className="lookbook-carousel">
          <div className="lookbook-slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {lookbookImages.map((image) => (
              <div key={image.id} className="lookbook-slide">
                <img src={image.url} alt={image.title} loading="lazy" />
                <div className="lookbook-overlay">
                  <div className="lookbook-caption">
                    <h3>{image.title}</h3>
                    <p>{image.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lookbook-indicators">
            {lookbookImages.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lookbook;
