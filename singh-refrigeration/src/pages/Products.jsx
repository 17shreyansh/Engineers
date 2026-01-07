import SectionWrapper from '../components/sections/SectionWrapper';
import SectionHeader from '../components/sections/SectionHeader';
import CategoryCard from '../components/ui/CategoryCard';
import { productCategories, products } from '../data/products';

export default function Products() {
  return (
    <div className="products-page">
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <h1>Industrial Products</h1>
            <p>Complete range of insulation materials and refrigeration machinery for cold storage and industrial applications</p>
          </div>
        </div>
      </div>

      <SectionWrapper>
        <div className="container">
          <SectionHeader
            subtitle="Product Categories"
            title="Explore Our Product Range"
            description="Two comprehensive product categories covering all aspects of industrial refrigeration and cold storage infrastructure"
          />
          <div className="category-grid">
            {productCategories.map(category => (
              <CategoryCard
                key={category.id}
                category={category}
                productCount={products[category.slug].length}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
