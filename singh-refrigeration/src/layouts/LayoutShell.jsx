import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { MapPin, Phone, Mail, ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollToTop from '../components/ui/ScrollToTop';

export default function LayoutShell({ children }) {
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="layout-shell">
      <header className="header">
        <div className="header-top">
          <div className="container">
            <div className="header-top-content">
              <div className="company-meta">
                <span><MapPin size={14} style={{display: 'inline', marginRight: '4px'}} /> Agra, India</span>
                <span><Phone size={14} style={{display: 'inline', marginRight: '4px'}} /> +91-XXXXXXXXXX</span>
                <span><Mail size={14} style={{display: 'inline', marginRight: '4px'}} /> info@singhrefrigeration.com</span>
              </div>
              <div className="header-actions">
                <span>45+ Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="header-main">
          <div className="container">
            <div className="header-main-content">
              <Link to="/" className="logo">
                <div className="logo-mark">SR&E</div>
                <div className="logo-text">
                  <div className="logo-title">Singh Refrigeration & Engineers</div>
                  <div className="logo-subtitle">Industrial Cold Solutions Since 1978</div>
                </div>
              </Link>

              <nav className="nav-main">
                <Link to="/" className={isActive('/') ? 'nav-link active' : 'nav-link'}>
                  Home
                </Link>
                <Link to="/about" className={isActive('/about') ? 'nav-link active' : 'nav-link'}>
                  About Us
                </Link>
                
                <div 
                  className="nav-dropdown"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <Link to="/products" className={location.pathname.startsWith('/products') ? 'nav-link active' : 'nav-link'}>
                    Products
                    <ChevronDown size={14} className="dropdown-arrow" />
                  </Link>
                  
                  <AnimatePresence>
                  {productsOpen && (
                    <motion.div 
                      className="mega-menu"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="mega-menu-content">
                        <div className="mega-menu-section">
                          <div className="mega-menu-header">
                            <h4>Insulation Products</h4>
                            <p>Thermal insulation materials for cold storage</p>
                          </div>
                          <Link to="/products/insulation" className="mega-menu-link">
                            View All Insulation Products →
                          </Link>
                        </div>
                        
                        <div className="mega-menu-section">
                          <div className="mega-menu-header">
                            <h4>Machinery & Systems</h4>
                            <p>Industrial refrigeration equipment & automation</p>
                          </div>
                          <Link to="/products/machinery" className="mega-menu-link">
                            View All Machinery & Systems →
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  </AnimatePresence>
                </div>

                <Link to="/services" className={isActive('/services') ? 'nav-link active' : 'nav-link'}>
                  Services
                </Link>
                <Link to="/contact" className={isActive('/contact') ? 'nav-link active' : 'nav-link'}>
                  Contact
                </Link>
              </nav>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Link to="/contact" className="btn-primary" style={{ display: mobileMenuOpen ? 'none' : 'inline-block' }}>
                  Get Quote
                </Link>
                <button 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem' }}
                  className="mobile-menu-btn"
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-nav"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className="mobile-nav-header">
              <div className="logo-text">
                <div className="logo-title">SR&E</div>
                <div className="logo-subtitle">Menu</div>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <X size={32} />
              </button>
            </div>
            
            <div className="mobile-nav-links">
              <Link to="/" className={isActive('/') ? 'mobile-nav-link active' : 'mobile-nav-link'} onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link to="/about" className={isActive('/about') ? 'mobile-nav-link active' : 'mobile-nav-link'} onClick={() => setMobileMenuOpen(false)}>
                About Us
              </Link>
              
              <div className="mobile-nav-section">
                <h4>Products</h4>
                <Link to="/products" className="mobile-nav-sublink" onClick={() => setMobileMenuOpen(false)}>
                  All Products
                </Link>
                <Link to="/products/insulation" className="mobile-nav-sublink" onClick={() => setMobileMenuOpen(false)}>
                  Insulation Products
                </Link>
                <Link to="/products/machinery" className="mobile-nav-sublink" onClick={() => setMobileMenuOpen(false)}>
                  Machinery & Systems
                </Link>
              </div>
              
              <Link to="/services" className={isActive('/services') ? 'mobile-nav-link active' : 'mobile-nav-link'} onClick={() => setMobileMenuOpen(false)}>
                Services
              </Link>
              <Link to="/contact" className={isActive('/contact') ? 'mobile-nav-link active' : 'mobile-nav-link'} onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
              
              <Link to="/contact" className="btn-primary" style={{ marginTop: '2rem', textAlign: 'center' }} onClick={() => setMobileMenuOpen(false)}>
                Get Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="main-content">
        {children}
      </main>

      <ScrollToTop />

      <footer className="footer">
        <div className="footer-main">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-col">
                <div className="footer-brand">
                  <div className="footer-logo">SR&E</div>
                  <h3>Singh Refrigeration & Engineers</h3>
                  <p>Leading provider of industrial refrigeration solutions, cold storage systems, and insulation products for over 45 years.</p>
                </div>
              </div>

              <div className="footer-col">
                <h4>Products</h4>
                <ul>
                  <li><Link to="/products/insulation">Insulation Products</Link></li>
                  <li><Link to="/products/machinery">Machinery & Systems</Link></li>
                  <li><Link to="/products">All Products</Link></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>Company</h4>
                <ul>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>Contact</h4>
                <ul>
                  <li>Agra, Uttar Pradesh, India</li>
                  <li>Phone: +91-XXXXXXXXXX</li>
                  <li>Email: info@singhrefrigeration.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-content">
              <p>&copy; {new Date().getFullYear()} Singh Refrigeration & Engineers. All rights reserved.</p>
              <p className="footer-credit">
                Crafted with 💙 by <a href="https://affobe.com/" target="_blank" rel="noopener noreferrer" className="affobe-link">AFFOBE</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
