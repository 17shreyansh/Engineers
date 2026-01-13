import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SectionWrapper from '../components/sections/SectionWrapper';
import {
  ContactPage as StyledContactPage,
  PageHero,
  PageHeroContent,
  ContactGrid,
  ContactInfo,
  ContactTagline,
  ContactDetails,
  ContactItem,
  ContactIcon,
  ContactItemContent,
  ContactFormCard,
  ContactForm,
  FormRow,
  FormGroup,
  SubmitButton
} from './Common.styles';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/send-email.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      
      if (result.success) {
        setStatus({ type: 'success', message: 'Message sent successfully! We\'ll get back to you soon.' });
        setFormData({ name: '', company: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', message: result.message || 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Network error. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <StyledContactPage>
      <PageHero>
        <div className="container">
          <PageHeroContent>
            <h1>Contact Us</h1>
            <p>Get in touch with our engineering team for consultations, quotes, and project discussions</p>
          </PageHeroContent>
        </div>
      </PageHero>

      <SectionWrapper>
        <div className="container">
          <ContactGrid>
            <ContactInfo>
              <h2>Singh Refrigeration & Engineers</h2>
              <ContactTagline>Your trusted partner for industrial cold solutions since 1980</ContactTagline>
              <ContactDetails>
                <ContactItem>
                  <ContactIcon><MapPin size={40} /></ContactIcon>
                  <ContactItemContent>
                    <h4>Location</h4>
                    <p>Block 1, Unit no. 6, Cloth Market, Sanjay Place, Agra-02</p>
                  </ContactItemContent>
                </ContactItem>
                <ContactItem>
                  <ContactIcon><Phone size={40} /></ContactIcon>
                  <ContactItemContent>
                    <h4>Phone</h4>
                    <p>0562-4099727</p>
                    <p>9837774099 | 9760207854</p>
                  </ContactItemContent>
                </ContactItem>
                <ContactItem>
                  <ContactIcon><Mail size={40} /></ContactIcon>
                  <ContactItemContent>
                    <h4>Email</h4>
                    <p>info@singhrefrigerationeng.com</p>
                    <p>sales@singhrefrigerationeng.com</p>
                  </ContactItemContent>
                </ContactItem>
                <ContactItem>
                  <ContactIcon><Clock size={40} /></ContactIcon>
                  <ContactItemContent>
                    <h4>Business Hours</h4>
                    <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    <p>Sunday: Closed</p>
                  </ContactItemContent>
                </ContactItem>
              </ContactDetails>
            </ContactInfo>

            <ContactFormCard>
              <h3>Send us a message</h3>
              {status.message && (
                <div style={{ padding: '12px', marginBottom: '20px', borderRadius: '4px', backgroundColor: status.type === 'success' ? '#d4edda' : '#f8d7da', color: status.type === 'success' ? '#155724' : '#721c24', border: `1px solid ${status.type === 'success' ? '#c3e6cb' : '#f5c6cb'}` }}>
                  {status.message}
                </div>
              )}
              <ContactForm onSubmit={handleSubmit}>
                <FormGroup>
                  <label htmlFor="name">Full Name *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="company">Company Name</label>
                  <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} />
                </FormGroup>
                <FormRow>
                  <FormGroup>
                    <label htmlFor="email">Email *</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="phone">Phone *</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                  </FormGroup>
                </FormRow>
                <FormGroup>
                  <label htmlFor="subject">Subject *</label>
                  <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required>
                    <option value="">Select a subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="project-quote">Project Quote</option>
                    <option value="technical-support">Technical Support</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </FormGroup>
                <FormGroup>
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" name="message" rows="6" value={formData.message} onChange={handleChange} required></textarea>
                </FormGroup>
                <SubmitButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </SubmitButton>
              </ContactForm>
            </ContactFormCard>
          </ContactGrid>
        </div>
      </SectionWrapper>
    </StyledContactPage>
  );
}
