import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SectionWrapper from '../components/sections/SectionWrapper';

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <h1>Contact Us</h1>
            <p>Get in touch with our engineering team for consultations, quotes, and project discussions</p>
          </div>
        </div>
      </div>

      <SectionWrapper>
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Singh Refrigeration & Engineers</h2>
              <p className="contact-tagline">Your trusted partner for industrial cold solutions since 1978</p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon"><MapPin size={40} /></div>
                  <div className="contact-item-content">
                    <h4>Location</h4>
                    <p>Agra, Uttar Pradesh, India</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon"><Phone size={40} /></div>
                  <div className="contact-item-content">
                    <h4>Phone</h4>
                    <p>+91-XXXXXXXXXX</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon"><Mail size={40} /></div>
                  <div className="contact-item-content">
                    <h4>Email</h4>
                    <p>info@singhrefrigeration.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon"><Clock size={40} /></div>
                  <div className="contact-item-content">
                    <h4>Business Hours</h4>
                    <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-card">
              <h3>Send us a message</h3>
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input type="text" id="name" name="name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input type="text" id="company" name="company" />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input type="email" id="email" name="email" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone *</label>
                    <input type="tel" id="phone" name="phone" required />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select id="subject" name="subject" required>
                    <option value="">Select a subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="project-quote">Project Quote</option>
                    <option value="technical-support">Technical Support</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" name="message" rows="6" required></textarea>
                </div>

                <button type="submit" className="btn-submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
