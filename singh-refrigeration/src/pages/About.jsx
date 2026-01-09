import { motion } from 'framer-motion';
import { Factory, Snowflake, Layers, Settings, Wrench, HeadphonesIcon } from 'lucide-react';
import SectionWrapper from '../components/sections/SectionWrapper';
import SectionHeader from '../components/sections/SectionHeader';
import {
  AboutPage as StyledAboutPage,
  PageHero,
  PageHeroContent,
  AboutGrid,
  AboutContent,
  AboutText,
  StatsCard,
  StatLarge,
  StatValue,
  StatLabel,
  CapabilitiesGrid,
  CapabilityCard,
  CapabilityIcon,
  ValuesGrid,
  ValueItem
} from './About.styles';

export default function About() {
  return (
    <StyledAboutPage>
      <PageHero>
        <div className="container">
          <PageHeroContent>
            <h1>About Us</h1>
            <p>45+ years of engineering excellence in industrial refrigeration and cold storage solutions</p>
          </PageHeroContent>
        </div>
      </PageHero>

      <SectionWrapper>
        <div className="container">
          <AboutGrid>
            <AboutContent>
              <SectionHeader
                subtitle="Our Story"
                title="Engineering Excellence Since 1978"
              />
              <AboutText>
                <p>
                  Singh Refrigeration & Engineers was established in 1978 in Agra, India, with a vision to provide 
                  comprehensive industrial refrigeration solutions to the growing cold storage and food processing industries.
                </p>
                <p>
                  Over four decades, we have evolved from a regional supplier to a trusted one-stop solution provider 
                  for complete cold chain infrastructure. Our expertise spans across industrial refrigeration systems, 
                  thermal insulation, automation, and turnkey cold storage projects.
                </p>
                <p>
                  Today, we serve industries across India, delivering engineered solutions that combine reliability, 
                  efficiency, and long-term value. Our commitment to quality and customer satisfaction has made us 
                  a preferred partner for businesses requiring industrial-grade cold storage infrastructure.
                </p>
              </AboutText>
            </AboutContent>

            <StatsCard>
              <StatLarge>
                <StatValue>45+</StatValue>
                <StatLabel>Years in Business</StatLabel>
              </StatLarge>
              <StatLarge>
                <StatValue>1000+</StatValue>
                <StatLabel>Projects Completed</StatLabel>
              </StatLarge>
              <StatLarge>
                <StatValue>100%</StatValue>
                <StatLabel>Client Satisfaction</StatLabel>
              </StatLarge>
            </StatsCard>
          </AboutGrid>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="elevated">
        <div className="container">
          <SectionHeader
            subtitle="What We Do"
            title="Our Core Capabilities"
            align="center"
          />
          <CapabilitiesGrid>
            <CapabilityCard as={motion.div} whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
              <CapabilityIcon>
                <Factory size={48} />
              </CapabilityIcon>
              <h3>Industrial Refrigeration</h3>
              <p>Complete ammonia and freon-based refrigeration systems for large-scale industrial applications</p>
            </CapabilityCard>
            <CapabilityCard as={motion.div} whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
              <CapabilityIcon>
                <Snowflake size={48} />
              </CapabilityIcon>
              <h3>Cold Storage Solutions</h3>
              <p>Design, installation, and commissioning of cold storage warehouses and blast freezing facilities</p>
            </CapabilityCard>
            <CapabilityCard as={motion.div} whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
              <CapabilityIcon>
                <Layers size={48} />
              </CapabilityIcon>
              <h3>Insulation Works</h3>
              <p>Comprehensive thermal insulation solutions using PUF panels, fiberglass, and specialized materials</p>
            </CapabilityCard>
            <CapabilityCard as={motion.div} whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
              <CapabilityIcon>
                <Settings size={48} />
              </CapabilityIcon>
              <h3>Automation Systems</h3>
              <p>PLC-based automation for temperature control, monitoring, and energy management</p>
            </CapabilityCard>
            <CapabilityCard as={motion.div} whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
              <CapabilityIcon>
                <Wrench size={48} />
              </CapabilityIcon>
              <h3>Equipment Supply</h3>
              <p>Trading and supply of industrial refrigeration equipment, compressors, and components</p>
            </CapabilityCard>
            <CapabilityCard as={motion.div} whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
              <CapabilityIcon>
                <HeadphonesIcon size={48} />
              </CapabilityIcon>
              <h3>Maintenance & Support</h3>
              <p>Preventive maintenance, emergency repairs, and technical support services</p>
            </CapabilityCard>
          </CapabilitiesGrid>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="dark">
        <div className="container">
          <SectionHeader
            subtitle="Our Values"
            title="What Drives Us"
            align="center"
          />
          <ValuesGrid>
            <ValueItem>
              <h3>Quality First</h3>
              <p>We never compromise on the quality of products and services we deliver to our clients</p>
            </ValueItem>
            <ValueItem>
              <h3>Engineering Excellence</h3>
              <p>Every solution is engineered with precision, backed by decades of technical expertise</p>
            </ValueItem>
            <ValueItem>
              <h3>Customer Trust</h3>
              <p>Building long-term relationships through reliability, transparency, and consistent performance</p>
            </ValueItem>
            <ValueItem>
              <h3>Innovation</h3>
              <p>Continuously adopting new technologies and methods to deliver better solutions</p>
            </ValueItem>
          </ValuesGrid>
        </div>
      </SectionWrapper>
    </StyledAboutPage>
  );
}
