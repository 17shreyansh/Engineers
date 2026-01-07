import { useParams } from 'react-router-dom';
import { Layers, Settings } from 'lucide-react';
import SectionWrapper from '../components/sections/SectionWrapper';
import SectionHeader from '../components/sections/SectionHeader';
import ProductCard from '../components/ui/ProductCard';
import { getCategoryBySlug, getProductsByCategory } from '../data/products';

export default function ProductCategory() {
  const { category } = useParams();
  const categoryData = getCategoryBySlug(category);
  const products = getProductsByCategory(category);

  if (!categoryData) {
    return <div>Category not found</div>;
  }

  return (
    <div className="product-category-page">
      <div className="category-hero">
        <div className="container">
          <div className="category-hero-content">
            <div className="category-hero-icon">
              {category === 'insulation' ? <Layers size={96} /> : <Settings size={96} />}
            </div>
            <div className="category-hero-text">
              <h1>{categoryData.name}</h1>
              <p className="category-hero-description">{categoryData.description}</p>
              <div className="category-hero-meta">
                <span className="category-hero-count">{products.length} Products Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SectionWrapper>
        <div className="container">
          <SectionHeader
            title="Product Catalogue"
            description={categoryData.technicalOverview}
          />
          <div className="product-grid">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
