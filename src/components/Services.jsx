import {
  Stethoscope,
  Sparkles,
  GraduationCap,
  Brain,
  Baby,
  Calendar
} from 'lucide-react';
import { serviceCategories } from '../data/services';
import './Services.css';

const iconMap = {
  "General Dental Care": Stethoscope,
  "Cosmetic Dentistry": Sparkles,
  "Restorative Dentistry": GraduationCap,
  "Advanced Dental Care": Brain,
  "Family Dentistry": Baby,
  "Other": Calendar
};

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="services-header">
          <h2 className="services-title">Dental Services</h2>
          <p className="services-subtitle">
            Comprehensive dental care for routine check-ups, restorative treatment, cosmetic needs and more.
          </p>
        </div>

        <div className="services-grid">
          {serviceCategories.map((category, categoryIndex) => {
            const IconComponent = iconMap[category.title] || Stethoscope;
            return (
              <div
                key={category.title}
                className="service-category"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="category-header">
                  <div className="category-icon">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="category-title">{category.title}</h3>
                </div>
                <ul className="service-list">
                  {category.services.map((service, serviceIndex) => (
                    <li key={service.name} className="service-item">
                      <div className="service-content">
                        <span className="service-name">{service.name}</span>
                        <span className="service-description">{service.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;