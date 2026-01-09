import SectionWrapper from '../components/sections/SectionWrapper';
import SectionHeader from '../components/sections/SectionHeader';
import CategoryCard from '../components/ui/CategoryCard';
import { productCategories, products } from '../data/products';
import { ProductsPage as StyledProductsPage, PageHero, PageHeroContent, CategoryGrid } from './Common.styles';

export default function Products() {
  return (
    <StyledProductsPage>
      <PageHero>
        <div className="container">
          <PageHeroContent>
            <h1>Industrial Products</h1>
            <p>Complete range of insulation materials and refrigeration machinery for cold storage and industrial applications</p>
          </PageHeroContent>
        </div>
      </PageHero>

      <SectionWrapper>
        <div className="container">
          <SectionHeader
            subtitle="Product Categories"
            title="Explore Our Product Range"
            description="Two comprehensive product categories covering all aspects of industrial refrigeration and cold storage infrastructure"
          />
          <CategoryGrid>
            {productCategories.map(category => (
              <CategoryCard
                key={category.id}
                category={category}
                productCount={products[category.slug].length}
              />
            ))}
          </CategoryGrid>
        </div>
      </SectionWrapper>
    </StyledProductsPage>
  );
}
