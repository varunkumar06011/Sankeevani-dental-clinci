import './TrustSection.css';

// Using image 2.png for trust section
const clinicImage = "/image-2.png";

const TrustSection = () => {
  return (
    <section id="about" className="trust-section section-light">
      <div className="container">
        <div className="trust-grid">
          <div className="trust-image-wrapper">
            <img
              src={clinicImage}
              alt="Sanjeevani Dental Care Clinic Exterior"
              className="trust-image"
            />
          </div>
          <div className="trust-content">
            <h2 className="trust-title">
              Dental Care With a Personal Approach
            </h2>
            <p className="trust-text">
              At Sanjeevani Dental Care, we believe every patient deserves individual attention and quality dental treatment. Our clinic provides comprehensive dental services designed to meet the oral health needs of patients of all ages.
            </p>
            <p className="trust-text">
              Whether you need a routine check-up, restorative treatment, or cosmetic improvements, our team is here to help you maintain a healthy and confident smile.
            </p>
            <div className="trust-features">
              <div className="trust-feature">
                <span className="trust-feature-number">5+</span>
                <span className="trust-feature-label">Service Categories</span>
              </div>
              <div className="trust-feature">
                <span className="trust-feature-number">18+</span>
                <span className="trust-feature-label">Dental Services</span>
              </div>
              <div className="trust-feature">
                <span className="trust-feature-number">1</span>
                <span className="trust-feature-label">Convenient Location</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;