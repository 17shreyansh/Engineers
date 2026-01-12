import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { MapPin, Phone, Mail, ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollToTop from '../components/ui/ScrollToTop';
import * as S from './LayoutShell.styles';
import logo from '../assets/logo.jpeg';

export default function LayoutShell({ children }) {
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <S.LayoutWrapper>
      <S.Header>
        <S.HeaderTop>
          <div className="container">
            <S.HeaderTopContent>
              <S.CompanyMeta>
                <span><MapPin size={14} style={{display: 'inline', marginRight: '4px'}} /> Agra, India</span>
                <span><Phone size={14} style={{display: 'inline', marginRight: '4px'}} /> +91-XXXXXXXXXX</span>
                <span><Mail size={14} style={{display: 'inline', marginRight: '4px'}} /> info@singhrefrigeration.com</span>
              </S.CompanyMeta>
              <div>
                <span>45+ Years of Excellence</span>
              </div>
            </S.HeaderTopContent>
          </div>
        </S.HeaderTop>
        
        <S.HeaderMain>
          <div className="container">
            <S.HeaderMainContent>
              <Link to="/" style={{textDecoration: 'none'}}>
                <S.Logo>
                  <img src={logo} alt="Singh Refrigeration & Engineers" style={{height: '60px', width: 'auto'}} />
                  <S.LogoText>
                    <S.LogoTitle>Singh Refrigeration & Engineers</S.LogoTitle>
                    <S.LogoSubtitle>Industrial Cold Solutions Since 1980</S.LogoSubtitle>
                  </S.LogoText>
                </S.Logo>
              </Link>

              <S.NavMain>
                <Link to="/" style={{textDecoration: 'none'}}>
                  <S.NavLink $active={isActive('/')}>Home</S.NavLink>
                </Link>
                <Link to="/about" style={{textDecoration: 'none'}}>
                  <S.NavLink $active={isActive('/about')}>About Us</S.NavLink>
                </Link>
                
                <S.NavDropdown
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <Link to="/products" style={{textDecoration: 'none'}}>
                    <S.NavLink $active={location.pathname.startsWith('/products')}>
                      Products
                      <S.DropdownArrow><ChevronDown size={14} /></S.DropdownArrow>
                    </S.NavLink>
                  </Link>
                  
                  <AnimatePresence>
                  {productsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <S.MegaMenu>
                        <S.MegaMenuContent>
                          <S.MegaMenuSection>
                            <div>
                              <h4>Insulation Products</h4>
                              <p>Thermal insulation materials for cold storage</p>
                            </div>
                            <Link to="/products/insulation" style={{textDecoration: 'none'}}>
                              <S.MegaMenuLink>View All Insulation Products →</S.MegaMenuLink>
                            </Link>
                          </S.MegaMenuSection>
                          
                          <S.MegaMenuSection>
                            <div>
                              <h4>Machinery & Systems</h4>
                              <p>Industrial refrigeration equipment & automation</p>
                            </div>
                            <Link to="/products/machinery" style={{textDecoration: 'none'}}>
                              <S.MegaMenuLink>View All Machinery & Systems →</S.MegaMenuLink>
                            </Link>
                          </S.MegaMenuSection>
                        </S.MegaMenuContent>
                      </S.MegaMenu>
                    </motion.div>
                  )}
                  </AnimatePresence>
                </S.NavDropdown>

                <Link to="/services" style={{textDecoration: 'none'}}>
                  <S.NavLink $active={isActive('/services')}>Services</S.NavLink>
                </Link>
                <Link to="/contact" style={{textDecoration: 'none'}}>
                  <S.NavLink $active={isActive('/contact')}>Contact</S.NavLink>
                </Link>
              </S.NavMain>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Link to="/contact" style={{textDecoration: 'none', display: mobileMenuOpen ? 'none' : 'inline-block'}}>
                  <S.BtnPrimary as="span">Get Quote</S.BtnPrimary>
                </Link>
                <S.MobileMenuBtn onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </S.MobileMenuBtn>
              </div>
            </S.HeaderMainContent>
          </div>
        </S.HeaderMain>
      </S.Header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <S.MobileNav>
              <S.MobileNavHeader>
                <S.LogoText>
                  <S.LogoTitle>SR&E</S.LogoTitle>
                  <S.LogoSubtitle>Menu</S.LogoSubtitle>
                </S.LogoText>
                <button onClick={() => setMobileMenuOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  <X size={32} />
                </button>
              </S.MobileNavHeader>
              
              <S.MobileNavLinks>
                <Link to="/" style={{textDecoration: 'none'}} onClick={() => setMobileMenuOpen(false)}>
                  <S.MobileNavLink className={isActive('/') ? 'active' : ''}>Home</S.MobileNavLink>
                </Link>
                <Link to="/about" style={{textDecoration: 'none'}} onClick={() => setMobileMenuOpen(false)}>
                  <S.MobileNavLink className={isActive('/about') ? 'active' : ''}>About Us</S.MobileNavLink>
                </Link>
                
                <S.MobileNavSection>
                  <h4>Products</h4>
                  <Link to="/products" style={{textDecoration: 'none'}} onClick={() => setMobileMenuOpen(false)}>
                    <S.MobileNavSublink>All Products</S.MobileNavSublink>
                  </Link>
                  <Link to="/products/insulation" style={{textDecoration: 'none'}} onClick={() => setMobileMenuOpen(false)}>
                    <S.MobileNavSublink>Insulation Products</S.MobileNavSublink>
                  </Link>
                  <Link to="/products/machinery" style={{textDecoration: 'none'}} onClick={() => setMobileMenuOpen(false)}>
                    <S.MobileNavSublink>Machinery & Systems</S.MobileNavSublink>
                  </Link>
                </S.MobileNavSection>
                
                <Link to="/services" style={{textDecoration: 'none'}} onClick={() => setMobileMenuOpen(false)}>
                  <S.MobileNavLink className={isActive('/services') ? 'active' : ''}>Services</S.MobileNavLink>
                </Link>
                <Link to="/contact" style={{textDecoration: 'none'}} onClick={() => setMobileMenuOpen(false)}>
                  <S.MobileNavLink className={isActive('/contact') ? 'active' : ''}>Contact</S.MobileNavLink>
                </Link>
                
                <Link to="/contact" style={{textDecoration: 'none', marginTop: '2rem', textAlign: 'center'}} onClick={() => setMobileMenuOpen(false)}>
                  <S.BtnPrimary as="span" style={{width: '100%', display: 'block'}}>Get Quote</S.BtnPrimary>
                </Link>
              </S.MobileNavLinks>
            </S.MobileNav>
          </motion.div>
        )}
      </AnimatePresence>

      <S.MainContent>
        {children}
      </S.MainContent>

      <ScrollToTop />

      <S.Footer>
        <S.FooterMain>
          <div className="container">
            <S.FooterGrid>
              <S.FooterCol>
                <S.FooterBrand>
                  <S.FooterLogo>SR&E</S.FooterLogo>
                  <h3>Singh Refrigeration & Engineers</h3>
                  <p>Leading provider of industrial refrigeration solutions, cold storage systems, and insulation products for over 45 years.</p>
                </S.FooterBrand>
              </S.FooterCol>

              <S.FooterCol>
                <h4>Products</h4>
                <ul>
                  <li><Link to="/products/insulation">Insulation Products</Link></li>
                  <li><Link to="/products/machinery">Machinery & Systems</Link></li>
                  <li><Link to="/products">All Products</Link></li>
                </ul>
              </S.FooterCol>

              <S.FooterCol>
                <h4>Company</h4>
                <ul>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </S.FooterCol>

              <S.FooterCol>
                <h4>Contact</h4>
                <ul>
                  <li>Agra, Uttar Pradesh, India</li>
                  <li>Phone: +91-XXXXXXXXXX</li>
                  <li>Email: info@singhrefrigeration.com</li>
                </ul>
              </S.FooterCol>
            </S.FooterGrid>
          </div>
        </S.FooterMain>

        <S.FooterBottom>
          <div className="container">
            <S.FooterBottomContent>
              <p>&copy; {new Date().getFullYear()} Singh Refrigeration & Engineers. All rights reserved.</p>
              <S.FooterCredit>
                Crafted with 💙 by <S.AffobeLink href="https://affobe.com/" target="_blank" rel="noopener noreferrer">AFFOBE</S.AffobeLink>
              </S.FooterCredit>
            </S.FooterBottomContent>
          </div>
        </S.FooterBottom>
      </S.Footer>
    </S.LayoutWrapper>
  );
}
