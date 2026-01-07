# Singh Refrigeration & Engineers - Enterprise Website

## 🏢 Project Overview

Premium, enterprise-grade React website for Singh Refrigeration & Engineers - a 45+ year legacy industrial company specializing in cold storage solutions, industrial refrigeration, and insulation systems.

## 🎯 Design Philosophy

- **Industrial & Authoritative**: Heavy visual weight, strong grids, clear hierarchy
- **Enterprise-Grade**: Built to scale for hundreds of products
- **Engineering-Focused**: Technical, precise, and professional
- **NOT Minimal**: High information density with clarity
- **NOT Startup-Style**: Legacy company aesthetic

## 🏗️ Architecture

### Information Architecture
```
Home
├── About Us
├── Products (Hub)
│   ├── Insulation Products (Category)
│   │   ├── Fiberglass Boards
│   │   ├── Fiberglass Rolls
│   │   ├── Rockwool Insulation
│   │   ├── PUF Panels
│   │   ├── Nitrile Tubes
│   │   ├── Nitrile Sheets
│   │   ├── XPS Boards
│   │   ├── XLPE Insulation
│   │   └── Bubble Insulation
│   └── Machinery & Systems (Category)
│       ├── Ammonia Compressors
│       ├── Ammonia Valves
│       ├── Ammonia Controls
│       ├── Ammonia Condensers
│       ├── Air Cooling Systems
│       ├── Bunker Cooling Systems
│       ├── Ammonia Pumps
│       ├── Low Pressure Receivers
│       ├── Pressure Vessels
│       ├── Monoblock Pumps
│       ├── Induction Motors
│       ├── Gensets
│       ├── CO₂ Extraction Systems
│       ├── Cold Storage Automation
│       ├── Conveyor Systems
│       ├── Fire Safety Systems
│       ├── Air Curtains
│       ├── Cold Storage Doors
│       ├── Thermometers
│       ├── Pressure Gauges
│       └── Spare Parts
├── Services
└── Contact
```

### Component Architecture

**Layout Components**
- `LayoutShell` - Main layout with header, footer, navigation
- `SectionWrapper` - Reusable section container with variants
- `SectionHeader` - Standardized section headers

**UI Components**
- `ProductCard` - Industrial-style product cards with depth
- `CategoryCard` - Large category cards with visual hierarchy

**Pages**
- `Home` - Hero, trust, categories, services, CTA
- `About` - Company story, capabilities, values
- `Products` - Product hub with category overview
- `ProductCategory` - Category page with product grid
- `ProductDetail` - Individual product page with specs
- `Services` - Engineering services overview
- `Contact` - Contact information and inquiry form

## 🎨 Design System

### Color Palette
```css
Primary: #1a1a1a (Dark industrial)
Secondary: #2d2d2d
Accent: #0066cc (Engineering blue)
Accent Dark: #004999
Surface: #ffffff
Surface Raised: #f8f9fa
Border: #e0e0e0
Border Strong: #bdbdbd
```

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 400 (regular), 600 (semibold), 700 (bold), 900 (black)
- **Scale**: Clear hierarchy from hero (3.5rem) to body (1rem)

### Spacing System
```
xs: 0.5rem
sm: 1rem
md: 1.5rem
lg: 2rem
xl: 3rem
2xl: 4rem
3xl: 6rem
```

### Shadows
- Small: Subtle elevation
- Medium: Card hover states
- Large: Prominent elevation
- XL: Modal/overlay depth

## 📁 Project Structure

```
singh-refrigeration/
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── SectionWrapper.jsx
│   │   │   ├── SectionWrapper.css
│   │   │   ├── SectionHeader.jsx
│   │   │   └── SectionHeader.css
│   │   └── ui/
│   │       ├── ProductCard.jsx
│   │       ├── ProductCard.css
│   │       ├── CategoryCard.jsx
│   │       └── CategoryCard.css
│   ├── layouts/
│   │   ├── LayoutShell.jsx
│   │   └── LayoutShell.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Products.jsx
│   │   ├── Products.css
│   │   ├── ProductCategory.jsx
│   │   ├── ProductCategory.css
│   │   ├── ProductDetail.jsx
│   │   ├── ProductDetail.css
│   │   ├── Services.jsx
│   │   ├── Services.css
│   │   ├── Contact.jsx
│   │   └── Contact.css
│   ├── data/
│   │   └── products.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
cd singh-refrigeration
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📊 Product Data Structure

Products are organized in `src/data/products.js`:

```javascript
{
  id: 'product-slug',
  name: 'Product Name',
  slug: 'product-slug',
  category: 'insulation' | 'machinery',
  shortDescription: 'Brief description',
  description: 'Detailed technical description',
  applications: ['Application 1', 'Application 2'],
  specifications: {
    'Spec Name': 'Spec Value',
  },
  image: '/products/image.jpg',
}
```

## 🎯 Key Features

### Navigation
- Sticky header with multi-level navigation
- Mega-menu for product categories
- Active state indicators
- Breadcrumb navigation on detail pages

### Product System
- Two-tier category structure (Insulation / Machinery)
- Product cards with hover effects
- Detailed product pages with specifications
- Category pages with product grids

### Visual Design
- Industrial aesthetic with strong borders
- Elevation through shadows and layers
- Mechanical hover animations
- Grid-based layouts
- High information density

### Responsive (Ready for Implementation)
- Mobile-first approach
- Breakpoints: 768px, 1024px, 1400px
- Flexible grids
- Collapsible navigation

## 🔧 Customization

### Adding New Products

Edit `src/data/products.js`:

```javascript
products.insulation.push({
  id: 'new-product',
  name: 'New Product',
  slug: 'new-product',
  category: 'insulation',
  // ... rest of product data
});
```

### Changing Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --color-accent: #0066cc; /* Change accent color */
}
```

### Adding New Pages

1. Create page component in `src/pages/`
2. Create corresponding CSS file
3. Add route in `src/App.jsx`
4. Add navigation link in `src/layouts/LayoutShell.jsx`

## 📝 Notes

### Product Images
Currently using placeholder icons. Replace with actual product images:
- Recommended size: 800x600px minimum
- Format: JPG or WebP
- Location: `public/products/`

### Contact Form
Form is frontend-only. Integrate with:
- Email service (SendGrid, AWS SES)
- Form backend (Formspree, Netlify Forms)
- Custom API endpoint

### Future Enhancements
- Product search functionality
- Product filtering by specifications
- Image galleries for products
- Customer testimonials
- Project portfolio/case studies
- Blog/resources section
- Multi-language support

## 🏆 Design Principles Applied

1. **Visual Weight**: Heavy borders, strong shadows, bold typography
2. **Hierarchy**: Clear information structure, scannable layouts
3. **Industrial Aesthetic**: Rectilinear, grid-based, technical
4. **Authority**: Professional, established, trustworthy
5. **Scalability**: Component-based, data-driven, maintainable

## 📄 License

Proprietary - Singh Refrigeration & Engineers

## 👥 Credits

Designed and developed for Singh Refrigeration & Engineers, Agra, India
