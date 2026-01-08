import { motion } from 'framer-motion';
import { Package } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="product-card"
    >
      <div className="product-card-image">
        {product.image ? (
          <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <div className="product-image-placeholder">
            <Package className="product-icon" size={64} strokeWidth={1.5} />
          </div>
        )}
      </div>
      <div className="product-card-content">
        <h3 className="product-card-title">{product.name}</h3>
        <p className="product-card-description">{product.shortDescription}</p>
        <Link to="/contact" className="btn-get-quote">
          Get Quote
        </Link>
      </div>
    </motion.div>
  );
}
