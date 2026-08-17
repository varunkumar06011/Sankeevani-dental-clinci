import { ArrowRight } from 'lucide-react';
import { featuredServices } from '../data/services';
import { getWhatsAppUrl } from '../utils/whatsapp';
import './FeaturedServices.css';

const FeaturedServices = () => {
  return (
    <section className="featured-section section-accent">
      <div className="container">
        <div className="featured-header">
          <h2 className="featured-title">Featured Dental Care</h2>
          <p className="featured-subtitle">
            Advanced treatments and procedures to restore and enhance your smile.
          </p>
        </div>

        <div className="featured-grid">
          {featuredServices.map((service, index) => (
            <div
              key={service.name}
              className="featured-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="featured-card-content">
                <h3 className="featured-card-title">{service.name}</h3>
                <p className="featured-card-description">{service.description}</p>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="featured-link"
                >
                  Enquire Now
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="featured-cta">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            Book an Appointment
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;