import { ArrowRight, MessageCircle, Phone } from 'lucide-react';
import { getWhatsAppUrl, getTelUrl } from '../utils/whatsapp';
import './AppointmentCTA.css';

const AppointmentCTA = () => {
  return (
    <section className="cta-section section-accent">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">
            Ready to Take Care of Your Smile?
          </h2>
          <p className="cta-subtitle">
            Contact Sanjeevani Dental Care to enquire about an appointment.
          </p>
          <div className="cta-actions">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              Book Appointment
              <ArrowRight size={20} />
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-white btn-lg"
            >
              <MessageCircle size={20} />
              WhatsApp Us
            </a>
            <a
              href={getTelUrl()}
              className="btn btn-call btn-lg"
            >
              <Phone size={20} />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentCTA;