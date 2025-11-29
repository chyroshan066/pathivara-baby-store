# Pathivara Baby Store Website

A modern, responsive e-commerce website for Pathivara Baby Store built with Next.js and TypeScript. Features include interactive product gallery, baby products showcase, newsletter subscription, and customer engagement tools delivering quality baby essentials in Itahari Chowk, Sunsari, Nepal.

## 🍽️ About

Pathivara Baby Store is a trusted baby products destination designed to provide parents and families with an exceptional online shopping experience. Located in Itahari Chowk, Sunsari, Nepal, the site features warm, welcoming design and intuitive navigation to showcase our complete range of baby clothes, toys, feeding essentials, nursery items, and quality products for newborns, infants, and toddlers.

## ✨ Features

- **Responsive Design** - Optimized for all devices (desktop, tablet, mobile)
- **Online Appointments** - Easy contact us section with form validation
- **Menu Showcase** - Beautiful presentation of baby products
- **Contact Information** - Easy-to-find location, hours, and contact details
- **Performance Optimized** - Fast loading times and smooth user experience
- **SEO Friendly** - Optimized for search engines and local discovery

## 🛠️ Technology Stack

- **Frontend Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS / Custom CSS
- **Type Safety**: TypeScript
- **Form Handling**: React Hook Form with validation
- **Performance**: Image optimization and lazy loading
- **Deployment**: Vercel with custom domain support

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd pathivara-baby-store
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm run start
```

## 🏗️ Project Structure

```
pathivara-baby-store/
└── frontend/
    ├── .github/
    ├── public/
    │   ├── fonts/
    │   │   ├── dm-sans/
    │   │   │   ├── DM-Sans-100-Italic.woff2
    │   │   │   ├── ...
    │   │   │   └── DM-Sans-Regular.woff2
    │   │   └── inter/
    │   │   │   ├── Inter-100-Italic.woff2
    │   │   │   │   ├── ...
    │   │   │   └── ├──-Regular.woff2
    │   ├── images/
    │   │   ├── banner/
    │   │   ├── ...
    │   │   └── preview.webp
    │   ├── js/
    │   │   └── plugins.js
    │   ├── favicon_io/
    │   │   ├── favicon.ico
    │   │   ├── ...
    │   │   └── site.webmanifest
    │   └── robots.txt
    ├── src/
    │   ├── app/
    │   │   ├── globals.css
    │   │   ├── .....
    │   │   └── (pages)
    │   ├── components/
    │   │   ├── utility/
    │   │   │   ├── ProductCard/
    │   │   │   ├── ....
    │   │   │   └── SubmitButton.tsx
    │   │   ├── Footer/
    │   │   ├── ...
    │   │   └── Header.tsx
    │   ├── constants/
    │   │   ├── contact.ts
    │   │   ├── ...
    │   │   └── testimonials.ts
    │   ├── hooks/
    │   │   ├── useAlert.ts
    │   │   ├── useFormSubmission.ts
    │   │   └── useSwiper.ts
    │   ├── middlewares/
    │   │   └── schema.ts
    │   ├── types/
    │   │   ├── index.ts
    │   │   └── jquery.d.ts
    │   └── utils/
    │       ├── clsx.ts
    │       ├── ...
    │       └── subscriptionData.ts
    ├── types/
    │   └── owl.carousel.d.ts
    ├── .gitignore
    ├── eslint.config.mjs
    ├── next.config.ts
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.mjs
    ├── tsconfig.json
    ├── vercel.json
    ├── global.d.ts
    ├── LICENSE
    └── README.md
```

## 🎨 Key Components

### Contact Form
- Form validation with error handling
- Real-time form feedback
- Mobile-optimized interface

### Service Display
- Categorized baby products

## 📱 Responsive Design

The website is fully responsive and tested on:
- **Desktop**: 1920px and above
- **Laptop**: 1024px - 1919px
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🔧 Configuration

### Custom Domain Setup

The website is configured for the custom domain `pathivarababystore.com.np`:

1. DNS records are configured for the domain
2. SSL certificates are automatically provisioned
3. www and non-www versions are handled

## 📊 Performance Optimizations

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting for optimal loading
- **CSS Optimization**: Modular CSS styling
- **SEO**: Meta tags, structured data, robots and sitemap

## 🧪 Testing

Run the test suite:
```bash
npm run test
```

Check code quality:
```bash
npm run lint
npm run type-check
```

## 📈 SEO Features

- Meta tags
- Open Graph support
- Structured data for store information
- Local business schema markup
- Sitemap generation
- Robots

## 🚀 Deployment

The website is deployed on Vercel with automatic deployments:

- **Production**: https://pathivarababystore.com.np
- **Preview**: Automatic preview deployments for pull requests

### Manual Deployment

```bash
npm run build
npm run export  # if using static export
```

## 📞 Support & Maintenance

### Client Information
- **Baby Store**: Pathivara Baby Store
- **Domain**: pathivarababystore.com.np
- **Deployment**: Vercel

### Developer Contact
For technical support or website updates, contact the developer.

## 📝 License

This project is proprietary software developed specifically for Pathivara Baby Store.

---

**Built with ❤️ for Gurung BBQ**

*For any questions or support regarding this website, contact **[chyroshan066](https://github.com/chyroshan066)**.*