import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Factory, CheckCircle, Target, Layers } from 'lucide-react';
import dpImage from '../assets/DP.jpeg';
import amitImage from '../assets/Amit.jpeg';
import SectionWrapper from '../components/sections/SectionWrapper';
import SectionHeader from '../components/sections/SectionHeader';
import CategoryCard from '../components/ui/CategoryCard';
import HeroSlider from '../components/sections/HeroSlider';
import LogoCarousel from '../components/sections/LogoCarousel';
import { productCategories, products } from '../data/products';

import dealer1 from '../assets/Authorised Dealership/24.jpeg';
import dealer2 from '../assets/Authorised Dealership/25.jpeg';
import dealer3 from '../assets/Authorised Dealership/26.jpeg';
import dealer4 from '../assets/Authorised Dealership/27.jpeg';

import coldStoragePotato from '../assets/weserve/Cold Storages (Potato).jpeg';
import coldStorageFruits from '../assets/weserve/Cold Storage (Fruits & Vegetables).jpeg';
import caColdStorage from '../assets/weserve/CA Cold Storage.jpeg';
import icePlants from '../assets/weserve/Ice Plants and Chillers.jpeg';
import foodProcessing from '../assets/weserve/Food Processing Industries.jpeg';
import beverages from '../assets/weserve/Beverages Industry.jpeg';
import milkDairy from '../assets/weserve/Milk Dairy.jpeg';
import chemical from '../assets/weserve/Chemical and Pharmaceutical Industries.jpeg';
import agroBased from '../assets/weserve/Agro Based Industries.jpeg';
import multiCommodity from '../assets/weserve/Multi Commodity Stores.jpeg';
import hvac from '../assets/weserve/HVAC Segment.jpeg';
import supplyChain from '../assets/weserve/Supply Chain.jpeg';
import soundproofing from '../assets/weserve/Soundproofing Segment.jpeg';
import underdeck from '../assets/weserve/Underdeck Insulation.jpeg';
import textile from '../assets/weserve/Textile Industries.jpeg';
import automobile from '../assets/weserve/Automobile Industries.jpeg';
import refinery from '../assets/weserve/Refinery.jpeg';
import metroStation from '../assets/weserve/Metro Station.jpeg';

import partner1 from '../assets/Channel Partner Slider/1.jpeg';
import partner2 from '../assets/Channel Partner Slider/2.jpeg';
import partner3 from '../assets/Channel Partner Slider/3.jpeg';
import partner4 from '../assets/Channel Partner Slider/4.jpeg';
import partner5 from '../assets/Channel Partner Slider/5.jpeg';
import partner6 from '../assets/Channel Partner Slider/6.jpeg';
import partner7 from '../assets/Channel Partner Slider/7.jpeg';
import partner8 from '../assets/Channel Partner Slider/8.jpeg';
import partner9 from '../assets/Channel Partner Slider/9.jpeg';
import partner10 from '../assets/Channel Partner Slider/10.jpeg';
import partner11 from '../assets/Channel Partner Slider/11.jpeg';
import partner12 from '../assets/Channel Partner Slider/12.jpeg';
import partner13 from '../assets/Channel Partner Slider/13.jpeg';
import partner14 from '../assets/Channel Partner Slider/14.jpeg';
import partner15 from '../assets/Channel Partner Slider/15.jpeg';
import partner16 from '../assets/Channel Partner Slider/16.jpeg';
import partner17 from '../assets/Channel Partner Slider/17.jpeg';
import partner18 from '../assets/Channel Partner Slider/18.jpeg';
import partner19 from '../assets/Channel Partner Slider/19.jpeg';
import partner20 from '../assets/Channel Partner Slider/20.jpeg';
import partner21 from '../assets/Channel Partner Slider/21.jpeg';
import partner22 from '../assets/Channel Partner Slider/22.jpeg';
import partner23 from '../assets/Channel Partner Slider/23.jpeg';
import {
  HomePage as StyledHomePage,
  TrustGrid,
  TrustItem,
  TrustIcon,
  CategoryGrid,
  TeamGrid,
  TeamMemberCard,
  TeamMemberImage,
  TeamMemberName,
  TeamMemberRole,
  TeamMemberDesc,
  ServicesGrid,
  ServiceCard,
  ServiceNumber,
  ServicesCTA,
  ServicesButton,
  IndustriesGrid,
  IndustryItem,
  CTAContent,
  CTAText,
  CTAButton
} from './Home.styles';

export default function Home() {
  const services = ['Consultancy Services','Cold Storage Designing','Legal & Paperwork Services','Subsidy & NOC Works','Civil Construction','PEB (Pre Engineered Building)','Machine Installation & Commissioning','Cold Storage Insulation Work','Turnkey Projects','All Types of Industrial Refrigeration','Hot and Cold Industrial Insulation'];
  const serviceDescs = ['Expert consultation for cold storage planning, feasibility studies, and technical guidance','Custom-engineered cold storage facilities designed for optimal efficiency and capacity','Complete assistance with documentation, licensing, and regulatory compliance','Expert assistance in obtaining government subsidies, NOCs, and clearances','Complete civil construction services for cold storage buildings and infrastructure','Pre-engineered building solutions for rapid construction of cold storage warehouses','Professional installation and commissioning of all refrigeration equipment','Complete thermal insulation solutions for cold rooms, warehouses, and facilities','Complete end-to-end project execution from concept to commissioning','Comprehensive industrial refrigeration systems for all applications','All types of hot and cold industrial insulation solutions'];
  const industries = [
    { name: 'Cold Storages (Potato)', image: coldStoragePotato },
    { name: 'Cold Storage (Fruits & Vegetables)', image: coldStorageFruits },
    { name: 'CA Cold Storage', image: caColdStorage },
    { name: 'Ice Plants and Chillers', image: icePlants },
    { name: 'Food Processing Industries', image: foodProcessing },
    { name: 'Beverages Industry', image: beverages },
    { name: 'Milk Dairy', image: milkDairy },
    { name: 'Chemical and Pharmaceutical Industries', image: chemical },
    { name: 'Agro Based Industries', image: agroBased },
    { name: 'Multi Commodity Stores', image: multiCommodity },
    { name: 'HVAC Segment', image: hvac },
    { name: 'Supply Chain', image: supplyChain },
    { name: 'Soundproofing Segment', image: soundproofing },
    { name: 'Underdeck Insulation', image: underdeck },
    { name: 'Textile Industries', image: textile },
    { name: 'Automobile Industries', image: automobile },
    { name: 'Refinery', image: refinery },
    { name: 'Metro Station', image: metroStation }
  ];

  const dealerLogos = [dealer1, dealer2, dealer3, dealer4];
  const partnerLogos = [partner1, partner2, partner3, partner4, partner5, partner6, partner7, partner8, partner9, partner10, partner11, partner12, partner13, partner14, partner15, partner16, partner17, partner18, partner19, partner20, partner21, partner22, partner23];

  return (
    <StyledHomePage>
      <HeroSlider />

      <SectionWrapper variant="elevated">
        <div className="container">
          <TrustGrid>
            <TrustItem as={motion.div} whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
              <TrustIcon><Factory size={48} /></TrustIcon>
              <h3>Industrial Grade</h3>
              <p>Heavy-duty equipment built for continuous industrial operations</p>
            </TrustItem>
            <TrustItem as={motion.div} whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
              <TrustIcon><Layers size={48} /></TrustIcon>
              <h3>Complete Solutions</h3>
              <p>From design to installation, maintenance to automation</p>
            </TrustItem>
            <TrustItem as={motion.div} whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
              <TrustIcon><CheckCircle size={48} /></TrustIcon>
              <h3>Proven Reliability</h3>
              <p>45+ years of engineering excellence and customer trust</p>
            </TrustItem>
            <TrustItem as={motion.div} whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
              <TrustIcon><Target size={48} /></TrustIcon>
              <h3>One-Stop Provider</h3>
              <p>Complete product range for all cold industry requirements</p>
            </TrustItem>
          </TrustGrid>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="container">
          <SectionHeader subtitle="Our Products" title="Industrial Cold Solutions" description="Comprehensive range of insulation materials and refrigeration machinery for industrial applications" align="center" />
          <CategoryGrid>
            {productCategories.map(category => (
              <CategoryCard key={category.id} category={category} productCount={products[category.slug].length} />
            ))}
          </CategoryGrid>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="container">
          <SectionHeader subtitle="Leadership" title="Our Leadership Team" description="Driving innovation and excellence in industrial refrigeration" align="center" />
          <TeamGrid as={motion.div} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <TeamMemberCard>
              <TeamMemberImage>
                <img src={dpImage} alt="Er. Shri D.P. Singh" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </TeamMemberImage>
              <TeamMemberName>Er. Shri D.P. Singh</TeamMemberName>
              <TeamMemberRole>Chairman</TeamMemberRole>
              <TeamMemberDesc>50+ years of experience in industrial refrigeration and cold storage solutions</TeamMemberDesc>
            </TeamMemberCard>
            <TeamMemberCard>
              <TeamMemberImage>
                <img src={amitImage} alt="Shri Amit Singh" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </TeamMemberImage>
              <TeamMemberName>Shri Amit Singh</TeamMemberName>
              <TeamMemberRole>Managing Director</TeamMemberRole>
              <TeamMemberDesc>30+ years of experience in project management and cold storage solutions</TeamMemberDesc>
            </TeamMemberCard>
          </TeamGrid>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="dark">
        <div className="container">
          <SectionHeader subtitle="What We Do" title="Engineering Services" description="End-to-end solutions for industrial refrigeration and cold storage infrastructure" align="center" />
          <ServicesGrid>
            {services.map((service, i) => (
              <ServiceCard key={i}>
                <ServiceNumber>{String(i+1).padStart(2, '0')}</ServiceNumber>
                <h3>{service}</h3>
                <p>{serviceDescs[i]}</p>
              </ServiceCard>
            ))}
          </ServicesGrid>
          <ServicesCTA>
            <ServicesButton as={Link} to="/services">View All Services →</ServicesButton>
          </ServicesCTA>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="container">
          <SectionHeader subtitle="Industries We Serve" title="Trusted Across Multiple Sectors" description="Delivering specialized cold storage and refrigeration solutions to diverse industries" align="center" />
          <IndustriesGrid>
            {industries.map((industry, i) => (
              <IndustryItem key={i} as={motion.div} whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                <div className="industry-image">
                  <img src={industry.image} alt={industry.name} />
                </div>
                <h4>{industry.name}</h4>
              </IndustryItem>
            ))}
          </IndustriesGrid>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="elevated">
        <div className="container">
          <LogoCarousel logos={dealerLogos} title="Authorised Dealership" />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="container">
          <LogoCarousel logos={partnerLogos} title="Channel Partners" />
        </div>
      </SectionWrapper>

      <SectionWrapper variant="accent">
        <div className="container">
          <CTAContent>
            <CTAText>
              <h2>Ready to Build Your Cold Storage Solution?</h2>
              <p>Talk to our engineering team for custom solutions tailored to your requirements</p>
            </CTAText>
            <CTAButton as={Link} to="/contact">Talk to an Engineer</CTAButton>
          </CTAContent>
        </div>
      </SectionWrapper>
    </StyledHomePage>
  );
}
