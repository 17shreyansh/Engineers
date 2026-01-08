import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Factory, Snowflake, CheckCircle, Target, Layers, Box, Quote } from 'lucide-react';
import SectionWrapper from '../components/sections/SectionWrapper';
import SectionHeader from '../components/sections/SectionHeader';
import CategoryCard from '../components/ui/CategoryCard';
import { productCategories, products } from '../data/products';

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="hero-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              Since 1978
            </motion.div>
            <h1 className="hero-title">
              Industrial Refrigeration<br />
              <span className="hero-title-accent">Engineered for Excellence</span>
            </h1>
            <p className="hero-description">
              Complete cold storage solutions, industrial refrigeration systems, and thermal insulation products. 
              Trusted by industries across India for over 45 years.
            </p>
            <div className="hero-actions">
              <Link to="/products" className="btn-hero-primary">
                Explore Products
              </Link>
              <Link to="/contact" className="btn-hero-secondary">
                Get Consultation
              </Link>
            </div>
            <motion.div 
              className="hero-stats"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="hero-stat">
                <div className="hero-stat-value">45+</div>
                <div className="hero-stat-label">Years Experience</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">1000+</div>
                <div className="hero-stat-label">Projects Delivered</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">100%</div>
                <div className="hero-stat-label">Client Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <SectionWrapper variant="elevated">
        <div className="container">
          <div className="trust-grid">
            <motion.div className="trust-item" whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
              <Factory className="trust-icon" size={48} />
              <h3>Industrial Grade</h3>
              <p>Heavy-duty equipment built for continuous industrial operations</p>
            </motion.div>
            <motion.div className="trust-item" whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
              <Layers className="trust-icon" size={48} />
              <h3>Complete Solutions</h3>
              <p>From design to installation, maintenance to automation</p>
            </motion.div>
            <motion.div className="trust-item" whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
              <CheckCircle className="trust-icon" size={48} />
              <h3>Proven Reliability</h3>
              <p>45+ years of engineering excellence and customer trust</p>
            </motion.div>
            <motion.div className="trust-item" whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
              <Target className="trust-icon" size={48} />
              <h3>One-Stop Provider</h3>
              <p>Complete product range for all cold industry requirements</p>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Product Categories */}
      <SectionWrapper>
        <div className="container">
          <SectionHeader
            subtitle="Our Products"
            title="Industrial Cold Solutions"
            description="Comprehensive range of insulation materials and refrigeration machinery for industrial applications"
            align="center"
          />
          <div className="category-grid">
            {productCategories.map(category => (
              <CategoryCard
                key={category.id}
                category={category}
                productCount={products[category.slug].length}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Team Section - CEO */}
      <SectionWrapper>
        <div className="container">
          <SectionHeader
            subtitle="Leadership"
            title="Meet Our CEO"
            description="Driving innovation and excellence in industrial refrigeration"
            align="center"
          />
          <motion.div 
            className="ceo-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="ceo-card">
              <div className="ceo-image-wrapper">
                <div className="ceo-image-placeholder">
                  <div className="ceo-initials">SK</div>
                </div>
                <div className="ceo-badge">CEO & Founder</div>
              </div>
              <div className="ceo-content">
                <div className="ceo-quote-icon">
                  <Quote size={40} />
                </div>
                <blockquote className="ceo-quote">
                  "For over four decades, we've been committed to delivering world-class refrigeration solutions that power India's cold chain infrastructure. Our success is built on engineering excellence, customer trust, and an unwavering commitment to quality."
                </blockquote>
                <div className="ceo-info">
                  <h3 className="ceo-name">Surinder Kumar Singh</h3>
                  <p className="ceo-title">Chief Executive Officer</p>
                  <div className="ceo-credentials">
                    <span className="credential-item">45+ Years Experience</span>
                    <span className="credential-divider">•</span>
                    <span className="credential-item">B.Tech (Mechanical)</span>
                    <span className="credential-divider">•</span>
                    <span className="credential-item">Industry Pioneer</span>
                  </div>
                </div>
                <div className="ceo-achievements">
                  <div className="achievement-item">
                    <div className="achievement-number">1000+</div>
                    <div className="achievement-label">Projects Led</div>
                  </div>
                  <div className="achievement-item">
                    <div className="achievement-number">45+</div>
                    <div className="achievement-label">Years Leadership</div>
                  </div>
                  <div className="achievement-item">
                    <div className="achievement-number">500+</div>
                    <div className="achievement-label">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Team Members */}
          <motion.div 
            className="team-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="team-member-card">
              <div className="team-member-image">
                <div className="team-initials">RK</div>
              </div>
              <h4 className="team-member-name">Rajesh Kumar</h4>
              <p className="team-member-role">Chief Technical Officer</p>
              <p className="team-member-desc">30+ years in refrigeration systems design and implementation</p>
            </div>
            <div className="team-member-card">
              <div className="team-member-image">
                <div className="team-initials">AS</div>
              </div>
              <h4 className="team-member-name">Amit Sharma</h4>
              <p className="team-member-role">Operations Director</p>
              <p className="team-member-desc">Expert in project management and cold storage solutions</p>
            </div>
            <div className="team-member-card">
              <div className="team-member-image">
                <div className="team-initials">PV</div>
              </div>
              <h4 className="team-member-name">Priya Verma</h4>
              <p className="team-member-role">Head of Engineering</p>
              <p className="team-member-desc">Specialist in thermal insulation and automation systems</p>
            </div>
            <div className="team-member-card">
              <div className="team-member-image">
                <div className="team-initials">VG</div>
              </div>
              <h4 className="team-member-name">Vikram Gupta</h4>
              <p className="team-member-role">Business Development</p>
              <p className="team-member-desc">Building partnerships and expanding cold chain solutions</p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Services Section */}
      <SectionWrapper variant="dark">
        <div className="container">
          <SectionHeader
            subtitle="What We Do"
            title="Engineering Services"
            description="End-to-end solutions for industrial refrigeration and cold storage infrastructure"
            align="center"
          />
          <div className="services-grid">
            <div className="service-card">
              <div className="service-number">01</div>
              <h3>Consultancy Services</h3>
              <p>Expert consultation for cold storage planning, feasibility studies, and technical guidance</p>
            </div>
            <div className="service-card">
              <div className="service-number">02</div>
              <h3>Cold Storage Designing</h3>
              <p>Custom-engineered cold storage facilities designed for optimal efficiency and capacity</p>
            </div>
            <div className="service-card">
              <div className="service-number">03</div>
              <h3>Legal & Paperwork Services</h3>
              <p>Complete assistance with documentation, licensing, and regulatory compliance</p>
            </div>
            <div className="service-card">
              <div className="service-number">04</div>
              <h3>Subsidy & NOC Works</h3>
              <p>Expert assistance in obtaining government subsidies, NOCs, and clearances</p>
            </div>
            <div className="service-card">
              <div className="service-number">05</div>
              <h3>Civil Construction</h3>
              <p>Complete civil construction services for cold storage buildings and infrastructure</p>
            </div>
            <div className="service-card">
              <div className="service-number">06</div>
              <h3>PEB (Pre Engineered Building)</h3>
              <p>Pre-engineered building solutions for rapid construction of cold storage warehouses</p>
            </div>
            <div className="service-card">
              <div className="service-number">07</div>
              <h3>Machine Installation & Commissioning</h3>
              <p>Professional installation and commissioning of all refrigeration equipment</p>
            </div>
            <div className="service-card">
              <div className="service-number">08</div>
              <h3>Cold Storage Insulation Work</h3>
              <p>Complete thermal insulation solutions for cold rooms, warehouses, and facilities</p>
            </div>
          </div>
          <div className="services-cta">
            <Link to="/services" className="btn-services">
              View All Services →
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* Industries Section */}
      <SectionWrapper>
        <div className="container">
          <SectionHeader
            subtitle="Industries We Serve"
            title="Trusted Across Multiple Sectors"
            description="Delivering specialized cold storage and refrigeration solutions to diverse industries"
            align="center"
          />
          <div className="industries-grid">
            <div className="industry-item">
              <div className="industry-number">01</div>
              <h4>Cold Storages (Potato)</h4>
            </div>
            <div className="industry-item">
              <div className="industry-number">02</div>
              <h4>Cold Storage (Fruits & Vegetables)</h4>
            </div>
            <div className="industry-item">
              <div className="industry-number">03</div>
              <h4>CA Cold Storage</h4>
            </div>
            <div className="industry-item">
              <div className="industry-number">04</div>
              <h4>Ice Plants and Chillers</h4>
            </div>
            <div className="industry-item">
              <div className="industry-number">05</div>
              <h4>Food Processing Industries</h4>
            </div>
            <div className="industry-item">
              <div className="industry-number">06</div>
              <h4>Beverages Industry</h4>
            </div>
            <div className="industry-item">
              <div className="industry-number">07</div>
              <h4>Milk Dairy</h4>
            </div>
            <div className="industry-item">
              <div className="industry-number">08</div>
              <h4>Chemical and Pharmaceutical Industries</h4>
            </div>
            <div className="industry-item">
              <div className="industry-number">09</div>
              <h4>Agro Based Industries</h4>
            </div>
            <div className="industry-item">
              <div className="industry-number">10</div>
              <h4>Multi Commodity Stores</h4>
            </div>
            <div className="industry-item">
              <div className="industry-number">11</div>
              <h4>HVAC Segment</h4>
            </div>
            <div className="industry-item">
              <div className="industry-number">12</div>
              <h4>Supply Chain System</h4>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper variant="accent">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2>Ready to Build Your Cold Storage Solution?</h2>
              <p>Talk to our engineering team for custom solutions tailored to your requirements</p>
            </div>
            <Link to="/contact" className="btn-cta">
              Talk to an Engineer
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
