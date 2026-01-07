import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, Settings } from 'lucide-react';

export default function CategoryCard({ category, productCount }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
    <Link to={`/products/${category.slug}`} className="category-card">
      <div className="category-card-icon">
        {category.slug === 'insulation' ? <Layers size={80} /> : <Settings size={80} />}
      </div>
      <div className="category-card-content">
        <h3 className="category-card-title">{category.name}</h3>
        <p className="category-card-description">{category.description}</p>
        <div className="category-card-meta">
          <span className="category-product-count">{productCount} Products</span>
          <ArrowRight className="category-card-arrow" size={32} />
        </div>
      </div>
    </Link>
    </motion.div>
  );
}
