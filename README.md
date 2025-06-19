# Flowmapp Landing Page

A modern, responsive landing page for Flowmapp - Visual platform for planning UX and pitching web design.

## 🚀 Features

- **Modern Design**: Clean, professional design that matches the Flowmapp brand
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Performance Optimized**: Built with Next.js 15 and optimized for fast loading
- **SEO Ready**: Proper meta tags and structured data for search engines
- **Accessible**: Built with accessibility best practices in mind

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Font**: Geist Sans & Geist Mono
- **Language**: TypeScript

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/santoshnaya/flowmapp-landing-page.git
cd flowmapp-landing-page
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build & Deploy

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/santoshnaya/flowmapp-landing-page)

1. Connect your GitHub repository to Vercel
2. Configure build settings (they should be auto-detected)
3. Deploy!

## 📁 Project Structure

```
├── public/                 # Static assets
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── globals.css    # Global styles with Tailwind imports
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   └── components/        # React components
│       ├── Header.tsx     # Navigation header
│       ├── Hero.tsx       # Hero section
│       ├── Features.tsx   # Features & company logos
│       ├── UseCases.tsx   # Use cases section
│       ├── StepsByStep.tsx # Step-by-step process
│       ├── Testimonials.tsx # Customer testimonials
│       └── Footer.tsx     # Footer with pricing
├── package.json
├── tailwind.config.js
└── README.md
```

## 🎨 Customization

### Colors
The color scheme can be customized in `src/app/globals.css` and through Tailwind classes.

### Content
- **Header**: Edit navigation items in `src/components/Header.tsx`
- **Hero**: Modify main heading and CTA in `src/components/Hero.tsx`  
- **Features**: Update company logos and feature descriptions in `src/components/Features.tsx`
- **Pricing**: Adjust pricing tiers in `src/components/Footer.tsx`

### Animations
All animations are handled by Framer Motion. You can customize them by modifying the `motion` props in each component.

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Quality

This project uses:
- **TypeScript** for type safety
- **ESLint** for code linting
- **Prettier** compatible formatting

## 📊 Performance

- **Lighthouse Score**: Optimized for high scores
- **First Load JS**: ~150kB
- **Bundle Size**: Optimized with Next.js automatic code splitting

## 🌟 Features Showcase

- **Interactive Mockups**: Animated sitemap and wireframe previews
- **Company Trust Indicators**: Logos of major companies using the platform
- **Visual Workflow**: Step-by-step process visualization
- **Pricing Transparency**: Clear pricing tiers with feature comparisons
- **Mobile-First Design**: Responsive across all device sizes

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Made with ❤️ for better UX design workflows**
