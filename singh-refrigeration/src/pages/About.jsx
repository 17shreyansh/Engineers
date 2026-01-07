import { motion } from 'framer-motion';
import { Factory, Snowflake, Layers, Settings, Wrench, HeadphonesIcon } from 'lucide-react';
import SectionWrapper from '../components/sections/SectionWrapper';
import SectionHeader from '../components/sections/SectionHeader';

export default function About() {
  return (
    <div className="about-page">
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <h1>About Us</h1>
            <p>45+ years of engineering excellence in industrial refrigeration and cold storage solutions</p>
          </div>
        </div>
      </div>

      <SectionWrapper>
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <SectionHeader
                subtitle="Our Story"
                title="Engineering Excellence Since 1978"
              />
              <div className="about-text">
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
              </div>
            </div>

            <div className="about-stats-card">
              <div className="stat-large">
                <div className="stat-value">45+</div>
                <div className="stat-label">Years in Business</div>
              </div>
              <div className="stat-large">
                <div className="stat-value">1000+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-large">
                <div className="stat-value">100%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="elevated">
        <div className="container">
          <SectionHeader
            subtitle="What We Do"
            title="Our Core Capabilities"
            align="center"
          />
          <div className="capabilities-grid">
            <motion.div className="capability-card" whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
              <Factory className="capability-icon" size={48} />
              <h3>Industrial Refrigeration</h3>
              <p>Complete ammonia and freon-based refrigeration systems for large-scale industrial applications</p>
            </motion.div>
            <motion.div className="capability-card" whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
              <Snowflake className="capability-icon" size={48} />
              <h3>Cold Storage Solutions</h3>
              <p>Design, installation, and commissioning of cold storage warehouses and blast freezing facilities</p>
            </motion.div>
            <motion.div className="capability-card" whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
              <Layers className="capability-icon" size={48} />
              <h3>Insulation Works</h3>
              <p>Comprehensive thermal insulation solutions using PUF panels, fiberglass, and specialized materials</p>
            </motion.div>
            <motion.div className="capability-card" whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
              <Settings className="capability-icon" size={48} />
              <h3>Automation Systems</h3>
              <p>PLC-based automation for temperature control, monitoring, and energy management</p>
            </motion.div>
            <motion.div className="capability-card" whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
              <Wrench className="capability-icon" size={48} />
              <h3>Equipment Supply</h3>
              <p>Trading and supply of industrial refrigeration equipment, compressors, and components</p>
            </motion.div>
            <motion.div className="capability-card" whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
              <HeadphonesIcon className="capability-icon" size={48} />
              <h3>Maintenance & Support</h3>
              <p>Preventive maintenance, emergency repairs, and technical support services</p>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="dark">
        <div className="container">
          <SectionHeader
            subtitle="Our Values"
            title="What Drives Us"
            align="center"
          />
          <div className="values-grid">
            <div className="value-item">
              <h3>Quality First</h3>
              <p>We never compromise on the quality of products and services we deliver to our clients</p>
            </div>
            <div className="value-item">
              <h3>Engineering Excellence</h3>
              <p>Every solution is engineered with precision, backed by decades of technical expertise</p>
            </div>
            <div className="value-item">
              <h3>Customer Trust</h3>
              <p>Building long-term relationships through reliability, transparency, and consistent performance</p>
            </div>
            <div className="value-item">
              <h3>Innovation</h3>
              <p>Continuously adopting new technologies and methods to deliver better solutions</p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
