import { CheckCircle } from 'lucide-react';
import { whyChooseUs } from '../data/services';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section className="why-section section-white">
      <div className="container">
        <div className="why-header">
          <h2 className="why-title">Why Choose Sanjeevani Dental Care</h2>
          <p className="why-subtitle">
            We are committed to providing quality dental care for you and your family.
          </p>
        </div>

        <div className="why-grid">
          {whyChooseUs.map((item, index) => (
            <div
              key={item.title}
              className="why-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="why-icon">
                <CheckCircle size={24} />
              </div>
              <h3 className="why-card-title">{item.title}</h3>
              <p className="why-card-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;