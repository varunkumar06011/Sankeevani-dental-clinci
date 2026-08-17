import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { getWhatsAppUrl, getTelUrl, getGoogleMapsUrl } from '../utils/whatsapp';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="brand-text">Sanjeevani</span>
              <span className="brand-subtext">Dental Care</span>
            </div>
            <p className="footer-description">
              Professional dental care in Ongole for routine, restorative and cosmetic dental needs.
            </p>
            <div className="footer-location">
              <MapPin size={16} />
              <span>Ongole, Andhra Pradesh</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="footer-nav">
            <h4 className="footer-heading">Quick Links</h4>
            <nav className="footer-links">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="footer-link"
                  onClick={(e) => scrollToSection(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h4 className="footer-heading">Contact</h4>
            <div className="footer-contact-items">
              <a href={getTelUrl()} className="footer-contact-item">
                <Phone size={16} />
                <span>94919 45437</span>
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-item"
              >
                <MessageCircle size={16} />
                <span>WhatsApp</span>
              </a>
              <a
                href={getGoogleMapsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-item"
              >
                <MapPin size={16} />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} Sanjeevani Dental Care. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;