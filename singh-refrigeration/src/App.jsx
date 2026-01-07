import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutShell from './layouts/LayoutShell';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductCategory from './pages/ProductCategory';
import Services from './pages/Services';
import Contact from './pages/Contact';

function ScrollToTopOnMount() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTopOnMount />
      <LayoutShell>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<ProductCategory />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </LayoutShell>
    </BrowserRouter>
  );
}

export default App;
