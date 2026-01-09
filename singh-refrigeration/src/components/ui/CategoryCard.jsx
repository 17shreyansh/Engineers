import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, Settings } from 'lucide-react';
import {
  StyledCategoryCard,
  CategoryIcon,
  CategoryContent,
  CategoryTitle,
  CategoryDescription,
  CategoryMeta,
  ProductCount,
  CategoryArrow
} from './CategoryCard.styles';

export default function CategoryCard({ category, productCount }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <StyledCategoryCard as={Link} to={`/products/${category.slug}`}>
        <CategoryIcon>
          {category.slug === 'insulation' ? <Layers size={80} /> : <Settings size={80} />}
        </CategoryIcon>
        <CategoryContent>
          <CategoryTitle>{category.name}</CategoryTitle>
          <CategoryDescription>{category.description}</CategoryDescription>
          <CategoryMeta>
            <ProductCount>{productCount} Products</ProductCount>
            <CategoryArrow>
              <ArrowRight size={32} />
            </CategoryArrow>
          </CategoryMeta>
        </CategoryContent>
      </StyledCategoryCard>
    </motion.div>
  );
}
