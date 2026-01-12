# 🚀 QUICK START GUIDE

## Start Development Server

```bash
cd singh-refrigeration
npm run dev
```

Then open: **http://localhost:5173**

## Project Structure at a Glance

```
singh-refrigeration/
├── src/
│   ├── components/      # Reusable UI components
│   ├── layouts/         # Layout shell (header/footer)
│   ├── pages/           # All page components
│   ├── data/            # Product data
│   └── index.css        # Global styles & design system
```

## Available Pages

- **/** - Home page with hero, categories, services
- **/about** - Company information and history
- **/products** - Product hub
- **/products/insulation** - Insulation products category
- **/products/machinery** - Machinery & systems category
- **/products/[category]/[slug]** - Individual product pages
- **/services** - Engineering services
- **/contact** - Contact form and information

## Key Files to Know

### Product Data
**`src/data/products.js`**
- All products organized by category
- Add/edit products here

### Global Styles
**`src/index.css`**
- Design system variables (colors, spacing, shadows)
- Global typography
- Container classes

### Main Layout
**`src/layouts/LayoutShell.jsx`**
- Header with navigation
- Footer
- Wraps all pages

### Routing
**`src/App.jsx`**
- All route definitions
- Add new routes here

## Adding a New Product

1. Open `src/data/products.js`
2. Add to either `products.insulation` or `products.machinery` array:

```javascript
{
  id: 'my-product',
  name: 'My Product Name',
  slug: 'my-product',
  category: 'insulation', // or 'machinery'
  shortDescription: 'Brief description for card',
  description: 'Full technical description',
  applications: ['Use case 1', 'Use case 2'],
  specifications: {
    'Spec Name': 'Spec Value',
  },
  image: '/products/my-product.jpg',
}
```

3. Product will automatically appear in category page and be accessible at:
   `/products/[category]/my-product`

## Customizing Colors

Edit `src/index.css`:

```css
:root {
  --color-accent: #0066cc;        /* Main brand color */
  --color-accent-dark: #004999;   /* Darker shade */
  --color-primary: #1a1a1a;       /* Dark text/backgrounds */
}
```

## Build for Production

```bash
npm run build
```

Output will be in `dist/` folder.

## Preview Production Build

```bash
npm run preview
```

## Design System Quick Reference

### Colors
- Primary: `#1a1a1a` (dark)
- Accent: `#0066cc` (blue)
- Surface: `#ffffff` (white)
- Border: `#e0e0e0` (light gray)

### Spacing
- xs: 0.5rem (8px)
- sm: 1rem (16px)
- md: 1.5rem (24px)
- lg: 2rem (32px)
- xl: 3rem (48px)
- 2xl: 4rem (64px)
- 3xl: 6rem (96px)

### Container Classes
- `.container` - Max 1400px
- `.container-wide` - Max 1600px
- `.container-narrow` - Max 1200px

## Component Variants

### SectionWrapper
```jsx
<SectionWrapper variant="default">   {/* White background */}
<SectionWrapper variant="elevated">  {/* Light gray background */}
<SectionWrapper variant="dark">      {/* Dark background */}
<SectionWrapper variant="accent">    {/* Blue gradient background */}
```

### SectionHeader
```jsx
<SectionHeader
  subtitle="Optional Subtitle"
  title="Main Title"
  description="Optional description"
  align="left"    // or "center"
/>
```

## Need Help?

Check the full **README.md** for detailed documentation.

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **React Router 6** - Routing
- **CSS Modules** - Styling (vanilla CSS)
- **Google Fonts** - Inter font family

---

**Built for Singh Refrigeration & Engineers**
Industrial Cold Storage Solutions Since 1980
