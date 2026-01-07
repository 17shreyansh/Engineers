import SectionWrapper from '../components/sections/SectionWrapper';
import SectionHeader from '../components/sections/SectionHeader';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Cold Storage Design & Installation',
      description: 'Complete turnkey solutions for cold storage warehouses, including design, equipment supply, installation, and commissioning.',
      features: ['Capacity planning', 'Layout design', 'Equipment selection', 'Installation & commissioning'],
    },
    {
      id: 2,
      title: 'Industrial Refrigeration Systems',
      description: 'Ammonia and freon-based refrigeration plants for large-scale industrial applications and food processing facilities.',
      features: ['Ammonia systems', 'Compressor selection', 'System design', 'Safety compliance'],
    },
    {
      id: 3,
      title: 'Insulation Works',
      description: 'Comprehensive thermal insulation solutions using PUF panels, fiberglass, rockwool, and specialized insulation materials.',
      features: ['Wall insulation', 'Ceiling insulation', 'Pipe insulation', 'Custom solutions'],
    },
    {
      id: 4,
      title: 'Automation & Control Systems',
      description: 'PLC-based automation systems for temperature control, monitoring, data logging, and energy management.',
      features: ['PLC programming', 'SCADA systems', 'Remote monitoring', 'Energy optimization'],
    },
    {
      id: 5,
      title: 'Cold Chain Infrastructure',
      description: 'End-to-end cold chain solutions including transportation, storage, and distribution infrastructure.',
      features: ['Cold warehouses', 'Distribution centers', 'Transport solutions', 'Integration'],
    },
    {
      id: 6,
      title: 'Maintenance & Support',
      description: 'Preventive maintenance, emergency repairs, spare parts supply, and technical support services.',
      features: ['Preventive maintenance', 'Emergency repairs', 'Spare parts', '24/7 support'],
    },
  ];

  return (
    <div className="services-page">
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <h1>Engineering Services</h1>
            <p>Complete solutions for industrial refrigeration and cold storage infrastructure</p>
          </div>
        </div>
      </div>

      <SectionWrapper>
        <div className="container">
          <SectionHeader
            subtitle="What We Offer"
            title="Comprehensive Cold Storage Solutions"
            description="From design to installation, automation to maintenance - we provide end-to-end engineering services"
            align="center"
          />
          <div className="services-grid-page">
            {services.map(service => (
              <div key={service.id} className="service-card-detailed">
                <div className="service-card-header">
                  <div className="service-number-large">{String(service.id).padStart(2, '0')}</div>
                  <h3>{service.title}</h3>
                </div>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index}>✓ {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="accent">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2>Need a Custom Solution?</h2>
              <p>Our engineering team can design and implement solutions tailored to your specific requirements</p>
            </div>
            <Link to="/contact" className="btn-cta">
              Discuss Your Project
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
