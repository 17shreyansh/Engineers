import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Factory, CheckCircle, Target, Layers, Quote } from 'lucide-react';
import SectionWrapper from '../components/sections/SectionWrapper';
import SectionHeader from '../components/sections/SectionHeader';
import CategoryCard from '../components/ui/CategoryCard';
import HeroSlider from '../components/sections/HeroSlider';
import { productCategories, products } from '../data/products';
import {
  HomePage as StyledHomePage,
  TrustGrid,
  TrustItem,
  TrustIcon,
  CategoryGrid,
  CEOSection,
  CEOCard,
  CEOImageWrapper,
  CEOImagePlaceholder,
  CEOInitials,
  CEOBadge,
  CEOContent,
  CEOQuoteIcon,
  CEOQuote,
  CEOInfo,
  CEOName,
  CEOTitle,
  CEOCredentials,
  CredentialItem,
  CredentialDivider,
  CEOAchievements,
  AchievementItem,
  AchievementNumber,
  AchievementLabel,
  TeamGrid,
  TeamMemberCard,
  TeamMemberImage,
  TeamInitials,
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
  IndustryNumber,
  CTAContent,
  CTAText,
  CTAButton
} from './Home.styles';

export default function Home() {
  const services = ['Consultancy Services','Cold Storage Designing','Legal & Paperwork Services','Subsidy & NOC Works','Civil Construction','PEB (Pre Engineered Building)','Machine Installation & Commissioning','Cold Storage Insulation Work','Turnkey Projects','All Types of Industrial Refrigeration','Hot and Cold Industrial Insulation'];
  const serviceDescs = ['Expert consultation for cold storage planning, feasibility studies, and technical guidance','Custom-engineered cold storage facilities designed for optimal efficiency and capacity','Complete assistance with documentation, licensing, and regulatory compliance','Expert assistance in obtaining government subsidies, NOCs, and clearances','Complete civil construction services for cold storage buildings and infrastructure','Pre-engineered building solutions for rapid construction of cold storage warehouses','Professional installation and commissioning of all refrigeration equipment','Complete thermal insulation solutions for cold rooms, warehouses, and facilities','Complete end-to-end project execution from concept to commissioning','Comprehensive industrial refrigeration systems for all applications','All types of hot and cold industrial insulation solutions'];
  const industries = ['Cold Storages (Potato)','Cold Storage (Fruits & Vegetables)','CA Cold Storage','Ice Plants and Chillers','Food Processing Industries','Beverages Industry','Milk Dairy','Chemical and Pharmaceutical Industries','Agro Based Industries','Multi Commodity Stores','HVAC Segment','Supply Chain System','Soundproofing Segment','Underdeck Insulation','Textile Industries','Automobile Industries','Refinery','Metro Station'];

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
          <SectionHeader subtitle="Leadership" title="Meet Our CEO" description="Driving innovation and excellence in industrial refrigeration" align="center" />
          <CEOSection as={motion.div} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <CEOCard>
              <CEOImageWrapper>
                <CEOImagePlaceholder><CEOInitials>SK</CEOInitials></CEOImagePlaceholder>
                <CEOBadge>CEO & Founder</CEOBadge>
              </CEOImageWrapper>
              <CEOContent>
                <CEOQuoteIcon><Quote size={40} /></CEOQuoteIcon>
                <CEOQuote>"For over four decades, we've been committed to delivering world-class refrigeration solutions that power India's cold chain infrastructure. Our success is built on engineering excellence, customer trust, and an unwavering commitment to quality."</CEOQuote>
                <CEOInfo>
                  <CEOName>Surinder Kumar Singh</CEOName>
                  <CEOTitle>Chief Executive Officer</CEOTitle>
                  <CEOCredentials>
                    <CredentialItem>45+ Years Experience</CredentialItem>
                    <CredentialDivider>•</CredentialDivider>
                    <CredentialItem>B.Tech (Mechanical)</CredentialItem>
                    <CredentialDivider>•</CredentialDivider>
                    <CredentialItem>Industry Pioneer</CredentialItem>
                  </CEOCredentials>
                </CEOInfo>
                <CEOAchievements>
                  <AchievementItem><AchievementNumber>1000+</AchievementNumber><AchievementLabel>Projects Led</AchievementLabel></AchievementItem>
                  <AchievementItem><AchievementNumber>45+</AchievementNumber><AchievementLabel>Years Leadership</AchievementLabel></AchievementItem>
                  <AchievementItem><AchievementNumber>500+</AchievementNumber><AchievementLabel>Happy Clients</AchievementLabel></AchievementItem>
                </CEOAchievements>
              </CEOContent>
            </CEOCard>
          </CEOSection>
          
          <TeamGrid as={motion.div} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <TeamMemberCard><TeamMemberImage><TeamInitials>RK</TeamInitials></TeamMemberImage><TeamMemberName>Rajesh Kumar</TeamMemberName><TeamMemberRole>Chief Technical Officer</TeamMemberRole><TeamMemberDesc>30+ years in refrigeration systems design and implementation</TeamMemberDesc></TeamMemberCard>
            <TeamMemberCard><TeamMemberImage><TeamInitials>AS</TeamInitials></TeamMemberImage><TeamMemberName>Amit Sharma</TeamMemberName><TeamMemberRole>Operations Director</TeamMemberRole><TeamMemberDesc>Expert in project management and cold storage solutions</TeamMemberDesc></TeamMemberCard>
            <TeamMemberCard><TeamMemberImage><TeamInitials>PV</TeamInitials></TeamMemberImage><TeamMemberName>Priya Verma</TeamMemberName><TeamMemberRole>Head of Engineering</TeamMemberRole><TeamMemberDesc>Specialist in thermal insulation and automation systems</TeamMemberDesc></TeamMemberCard>
            <TeamMemberCard><TeamMemberImage><TeamInitials>VG</TeamInitials></TeamMemberImage><TeamMemberName>Vikram Gupta</TeamMemberName><TeamMemberRole>Business Development</TeamMemberRole><TeamMemberDesc>Building partnerships and expanding cold chain solutions</TeamMemberDesc></TeamMemberCard>
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
              <IndustryItem key={i}>
                <IndustryNumber>{String(i+1).padStart(2, '0')}</IndustryNumber>
                <h4>{industry}</h4>
              </IndustryItem>
            ))}
          </IndustriesGrid>
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
