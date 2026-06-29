# Saad & Associates - Modern Legal Website

A premium, responsive Next.js website for Saad & Associates, a legal, tax, and compliance firm. This modern redesign transforms the original HTML-based website into a world-class web experience using cutting-edge web technologies.

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Fonts**: Inter & Plus Jakarta Sans (Google Fonts)

## ✨ Features

- **Fully Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Premium design with professional color palette (Navy blue, Gold accents)
- **Accessible**: WCAG AA compliant with semantic HTML and ARIA labels
- **Fast Performance**: Next.js optimization with automatic code splitting
- **SEO Friendly**: Optimized metadata and structured content
- **Interactive Elements**: Smooth animations and micro-interactions
- **Contact Form**: Client-side form validation and submission handling
- **Google Maps Integration**: Embedded location map for office directions

## 📄 Pages

1. **Home** (`/`) - Hero section, services overview, testimonials, emergency banner
2. **Practice Areas** (`/services`) - Detailed service offerings with sub-services
3. **Cyber Defense** (`/cyber-defense`) - Emergency cyber response services
4. **GST Resources** (`/gst-resources`) - Document checklist and requirements
5. **About Us** (`/about`) - Company profile, team, timeline
6. **Contact** (`/contact`) - Contact form, information, and map
7. **Privacy Policy** (`/privacy`) - Privacy policy and data protection
8. **Terms of Service** (`/terms`) - Terms and conditions

## 🎨 Design System

### Colors
- **Primary**: Navy Blue (#0a1628)
- **Accent**: Gold (#c9a227)
- **Background**: White (#ffffff)
- **Text**: Dark Navy (#0a1628)
- **Muted**: Slate Gray (#64748b)

### Typography
- **Headings**: Plus Jakarta Sans (600-700 weight)
- **Body**: Inter (400-500 weight)

### Components
- **Header**: Sticky navigation with mobile menu
- **Footer**: Comprehensive footer with links and contact info
- **Cards**: Service cards with hover effects
- **Forms**: Accessible form inputs with validation
- **Buttons**: Primary and secondary button styles

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── cyber-defense/
│   │   └── page.tsx
│   ├── gst-resources/
│   │   └── page.tsx
│   ├── privacy/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── terms/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   └── layout/
│       ├── header.tsx
│       └── footer.tsx
└── lib/
    └── utils.ts
```

## 🎯 Key Improvements Over Original

1. **Modern Architecture**: Migrated from plain HTML to Next.js App Router
2. **Professional Design**: Premium color scheme and typography
3. **Better UX**: Smooth animations and intuitive navigation
4. **Accessibility**: WCAG AA compliance throughout
5. **Performance**: Optimized loading and code splitting
6. **Scalability**: Component-based architecture for easy updates
7. **SEO**: Proper metadata and semantic HTML structure
8. **Mobile-First**: Fully responsive design

## 📝 Content Strategy

All visible content has been rewritten with original, professional language while preserving the nature of services:
- Navigation labels modernized (e.g., "Practice Areas" instead of "Services")
- Service descriptions rephrased for sophistication
- Testimonials updated with professional narratives
- CTAs refined for clarity and impact
- Headings crafted for authority and trust

## 🔧 Customization

### Colors
Edit `src/app/globals.css` to modify the color scheme:

```css
:root {
  --primary: #0a1628;
  --accent: #c9a227;
  /* ... other colors */
}
```

### Fonts
Font configuration in `src/app/layout.tsx`:

```typescript
const inter = Inter({ /* ... */ })
const plusJakartaSans = Plus_Jakarta_Sans({ /* ... */ })
```

### Content
Page content is located in respective `page.tsx` files in the `src/app/` directory.

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

Build the project and deploy the `.next` folder to any hosting platform that supports Node.js.

## 📄 License

This project is proprietary software for Saad & Associates.

## 👥 Contact

For questions or support regarding this website:
- Email: adv.saad.hc@gmail.com
- Phone: +91 9563712462
- Address: Office No. A-5, Jiwan Market, Thana More, Jamuria Main Road, Asansol 713336
