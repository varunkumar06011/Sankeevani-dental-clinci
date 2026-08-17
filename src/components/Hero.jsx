import { ArrowRight } from 'lucide-react';
import { getWhatsAppUrl, getTelUrl } from '../utils/whatsapp';
import './Hero.css';

// Using image 3.png for hero
const clinicImage = "/image-3.png";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-eyebrow">SANJEEVANI DENTAL CARE</span>
          <h1 className="hero-title">
            Complete Dental Care for You and Your Family
          </h1>
          <p className="hero-description">
            One of Ongole's trusted destinations for comprehensive dental care, from routine check-ups to advanced treatments.
          </p>
          <div className="hero-actions">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Book an Appointment
              <ArrowRight size={20} />
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              WhatsApp Us
            </a>
          </div>
          <div className="hero-location">
            <span className="location-dot"></span>
            <span>Ongole, Andhra Pradesh</span>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img
            src={clinicImage}
            alt="Sanjeevani Dental Care Clinic"
            className="hero-image"
          />
          <div className="hero-image-overlay"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;