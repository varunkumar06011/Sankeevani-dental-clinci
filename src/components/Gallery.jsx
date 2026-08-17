import { Image } from 'lucide-react';
import './Gallery.css';

// Using all clinic images for gallery
const galleryImages = [
  "/image-4.png",
  "/image-5.png",
  "/image-1.png",
  "/image-2.png"
];

const Gallery = () => {
  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="gallery-header">
          <h2 className="gallery-title">Our Clinic</h2>
          <p className="gallery-subtitle">
            A look at Sanjeevani Dental Care in Ongole.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image}
                alt={`Sanjeevani Dental Care ${index + 1}`}
                className="gallery-image"
              />
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Gallery;