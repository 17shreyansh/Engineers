import { useParams } from 'react-router-dom';
import { Layers, Settings } from 'lucide-react';
import SectionWrapper from '../components/sections/SectionWrapper';
import SectionHeader from '../components/sections/SectionHeader';
import ProductCard from '../components/ui/ProductCard';
import { getCategoryBySlug, getProductsByCategory } from '../data/products';
import {
  ProductsPage,
  CategoryHero,
  CategoryHeroContent,
  CategoryHeroIcon,
  CategoryHeroText,
  CategoryHeroDescription,
  CategoryHeroMeta,
  CategoryHeroCount,
  ProductGrid
} from './Common.styles';

export default function ProductCategory() {
  const { category } = useParams();
  const categoryData = getCategoryBySlug(category);
  const products = getProductsByCategory(category);

  if (!categoryData) {
    return <div>Category not found</div>;
  }

  return (
    <ProductsPage>
      <CategoryHero>
        <div className="container">
          <CategoryHeroContent>
            <CategoryHeroIcon>
              {category === 'insulation' ? <Layers size={96} /> : <Settings size={96} />}
            </CategoryHeroIcon>
            <CategoryHeroText>
              <h1>{categoryData.name}</h1>
              <CategoryHeroDescription>{categoryData.description}</CategoryHeroDescription>
              <CategoryHeroMeta>
                <CategoryHeroCount>{products.length} Products Available</CategoryHeroCount>
              </CategoryHeroMeta>
            </CategoryHeroText>
          </CategoryHeroContent>
        </div>
      </CategoryHero>

      <SectionWrapper>
        <div className="container">
          <SectionHeader
            title="Product Catalogue"
            description={categoryData.technicalOverview}
          />
          <ProductGrid>
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ProductGrid>
        </div>
      </SectionWrapper>
    </ProductsPage>
  );
}
