import { motion } from 'framer-motion';
import { Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  StyledProductCard,
  ProductImage,
  ProductImagePlaceholder,
  ProductContent,
  ProductTitle,
  ProductDescription,
  GetQuoteButton
} from './ProductCard.styles';

export default function ProductCard({ product }) {
  return (
    <StyledProductCard
      as={motion.div}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <ProductImage>
        {product.image ? (
          <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <ProductImagePlaceholder>
            <Package size={64} strokeWidth={1.5} />
          </ProductImagePlaceholder>
        )}
      </ProductImage>
      <ProductContent>
        <ProductTitle>{product.name}</ProductTitle>
        <ProductDescription>{product.shortDescription}</ProductDescription>
        <GetQuoteButton as={Link} to="/contact">
          Get Quote
        </GetQuoteButton>
      </ProductContent>
    </StyledProductCard>
  );
}
