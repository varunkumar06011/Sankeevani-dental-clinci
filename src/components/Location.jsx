import { MapPin } from 'lucide-react';
import { getGoogleMapsUrl, getTelUrl } from '../utils/whatsapp';
import './Location.css';

const Location = () => {
  return (
    <section id="contact" className="location-section">
      <div className="container">
        <div className="location-grid">
          <div className="location-info">
            <h2 className="location-title">Visit Us</h2>
            <p className="location-subtitle">
              Sanjeevani Dental Care is conveniently located in Ongole, Andhra Pradesh.
            </p>
            
            <div className="location-details">
              <div className="location-item">
                <div className="location-icon">
                  <MapPin size={20} />
                </div>
                <div className="location-text">
                  <span className="location-label">Address</span>
                  <span className="location-value">Ongole, Andhra Pradesh, India</span>
                </div>
              </div>
              
              <div className="location-item">
                <div className="location-icon">
                  <MapPin size={20} />
                </div>
                <div className="location-text">
                  <span className="location-label">Location</span>
                  <span className="location-value">Ongole</span>
                </div>
              </div>
            </div>

            <div className="location-actions">
              <a
                href={getGoogleMapsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Get Directions
              </a>
              <a
                href={getTelUrl()}
                className="btn btn-secondary"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;