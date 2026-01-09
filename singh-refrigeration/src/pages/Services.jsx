import SectionWrapper from '../components/sections/SectionWrapper';
import SectionHeader from '../components/sections/SectionHeader';
import { Link } from 'react-router-dom';
import {
  ServicesPage as StyledServicesPage,
  PageHero,
  PageHeroContent,
  ServicesGrid,
  ServiceCard,
  ServiceCardHeader,
  ServiceNumber,
  ServiceTitle,
  ServiceDescription,
  ServiceFeatures,
  CTAContent,
  CTAText,
  CTAButton
} from './Services.styles';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Consultancy Services',
      description: 'Expert consultation for cold storage planning, feasibility studies, and technical guidance for your refrigeration projects.',
      features: ['Project feasibility', 'Technical guidance', 'Cost estimation', 'System optimization'],
    },
    {
      id: 2,
      title: 'Cold Storage Designing',
      description: 'Custom-engineered cold storage facility designs optimized for capacity, efficiency, and operational excellence.',
      features: ['Layout design', 'Capacity planning', 'Equipment selection', '3D modeling'],
    },
    {
      id: 3,
      title: 'Legal and Paperwork Services',
      description: 'Complete assistance with documentation, licensing, and regulatory compliance for cold storage facilities.',
      features: ['License applications', 'Documentation', 'Compliance support', 'Legal assistance'],
    },
    {
      id: 4,
      title: 'Subsidy and NOC Related Works',
      description: 'Expert assistance in obtaining government subsidies, NOCs, and clearances for cold storage projects.',
      features: ['Subsidy applications', 'NOC processing', 'Government liaison', 'Documentation support'],
    },
    {
      id: 5,
      title: 'Civil Construction',
      description: 'Complete civil construction services for cold storage buildings, foundations, and infrastructure development.',
      features: ['Foundation work', 'Building construction', 'Site development', 'Quality assurance'],
    },
    {
      id: 6,
      title: 'PEB (Pre Engineered Building)',
      description: 'Pre-engineered building solutions for rapid construction of cold storage warehouses and industrial facilities.',
      features: ['Steel structures', 'Fast construction', 'Cost-effective', 'Customizable design'],
    },
    {
      id: 7,
      title: 'Complete Machine Installation and Commissioning',
      description: 'Professional installation and commissioning of all refrigeration equipment, ensuring optimal performance and reliability.',
      features: ['Equipment installation', 'System commissioning', 'Performance testing', 'Training'],
    },
    {
      id: 8,
      title: 'Complete Cold Storage Insulation Work',
      description: 'Comprehensive thermal insulation solutions using PUF panels, fiberglass, rockwool, and specialized materials.',
      features: ['Wall insulation', 'Ceiling insulation', 'Floor insulation', 'Pipe insulation'],
    },
    {
      id: 9,
      title: 'Turnkey Projects',
      description: 'Complete end-to-end project execution from concept to commissioning, delivering fully operational cold storage facilities.',
      features: ['Complete project management', 'Design to commissioning', 'Single point responsibility', 'Timely delivery'],
    },
    {
      id: 10,
      title: 'All Types of Industrial Refrigeration',
      description: 'Comprehensive industrial refrigeration systems including ammonia, freon, and CO2 based solutions for all applications.',
      features: ['Ammonia systems', 'Freon systems', 'CO2 systems', 'Custom solutions'],
    },
    {
      id: 11,
      title: 'All Types of Hot and Cold Industrial Insulation',
      description: 'Complete range of hot and cold insulation solutions for pipes, ducts, vessels, and industrial equipment.',
      features: ['Hot insulation', 'Cold insulation', 'Pipe insulation', 'Equipment insulation'],
    },
  ];

  return (
    <StyledServicesPage>
      <PageHero>
        <div className="container">
          <PageHeroContent>
            <h1>Engineering Services</h1>
            <p>Complete solutions for industrial refrigeration and cold storage infrastructure</p>
          </PageHeroContent>
        </div>
      </PageHero>

      <SectionWrapper>
        <div className="container">
          <SectionHeader
            subtitle="What We Offer"
            title="Comprehensive Cold Storage Solutions"
            description="From design to installation, automation to maintenance - we provide end-to-end engineering services"
            align="center"
          />
          <ServicesGrid>
            {services.map(service => (
              <ServiceCard key={service.id}>
                <ServiceCardHeader>
                  <ServiceNumber>{String(service.id).padStart(2, '0')}</ServiceNumber>
                  <ServiceTitle>{service.title}</ServiceTitle>
                </ServiceCardHeader>
                <ServiceDescription>{service.description}</ServiceDescription>
                <ServiceFeatures>
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ServiceFeatures>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="accent">
        <div className="container">
          <CTAContent>
            <CTAText>
              <h2>Need a Custom Solution?</h2>
              <p>Our engineering team can design and implement solutions tailored to your specific requirements</p>
            </CTAText>
            <CTAButton as={Link} to="/contact">
              Discuss Your Project
            </CTAButton>
          </CTAContent>
        </div>
      </SectionWrapper>
    </StyledServicesPage>
  );
}
