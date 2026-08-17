import './ClinicExperience.css';

// Using image 1.png for clinic experience
const clinicImage = "/image-1.png";

const ClinicExperience = () => {
  return (
    <section className="experience-section section-light">
      <div className="container">
        <div className="experience-grid">
          <div className="experience-content">
            <h2 className="experience-title">
              A Clinic You Can Reach Easily
            </h2>
            <p className="experience-text">
              This website helps you learn about the dental services we offer at Sanjeevani Dental Care in Ongole. Browse through our services to understand what treatments are available and what might be right for your needs.
            </p>
            <p className="experience-text">
              When you're ready to schedule an appointment, you can contact us directly by phone or WhatsApp. Our team will help you find a convenient time for your visit.
            </p>
            <p className="experience-text">
              We look forward to welcoming you to our clinic and helping you maintain good oral health.
            </p>
          </div>
          <div className="experience-image-wrapper">
            <img
              src={clinicImage}
              alt="Sanjeevani Dental Care Clinic"
              className="experience-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicExperience;