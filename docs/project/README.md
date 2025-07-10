# Orson Vision - Cinematic Humanism in Digital Innovation

A modern, cinematic website built with Next.js, TypeScript, and Tailwind CSS, featuring smooth animations and a beautiful user experience.

## 🎬 Features

### Cinematic Design

- **Blue/Gold Theme**: Consistent color scheme with blue for dark sections and gold for light sections
- **Smooth Animations**: CSS-based animations with Intersection Observer API for scroll-triggered effects
- **Video Background**: Hero section with video background and overlay effects
- **Glass Morphism**: Modern glass effects for enhanced visual appeal
- **Responsive Design**: Mobile-first approach with beautiful animations on all devices

### Technical Stack

- **Next.js 15**: Latest version with App Router
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first styling
- **Lucide React**: Beautiful icons
- **React Hook Form**: Form handling
- **Headless UI**: Accessible components

### Performance Optimizations

- **CSS Animations**: No heavy JavaScript libraries like Framer Motion
- **Intersection Observer**: Efficient scroll animations
- **Image Optimization**: Next.js built-in image optimization
- **Code Splitting**: Automatic code splitting with Next.js
- **Accessibility**: Reduced motion support and semantic HTML

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd orson-vision
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up development environment**

   ```bash
   npm run prepare  # Sets up Husky pre-commit hooks
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
orson-vision/
├── src/                       # Source code
│   ├── app/                   # Next.js App Router
│   │   ├── (routes)/          # Route groups
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # React components
│   │   ├── ui/                # Reusable UI components
│   │   ├── sections/          # Page sections
│   │   ├── features/          # Feature components
│   │   └── layout/            # Layout components
│   ├── lib/                   # Utility libraries
│   ├── types/                 # TypeScript definitions
│   ├── styles/                # Additional styles
│   └── utils/                 # Helper functions
├── public/                    # Static assets
├── assets/                    # Source media files
├── docs/                      # Project documentation
├── config/                    # Configuration files
├── scripts/                   # Build/deployment scripts
├── tests/                     # Test files
├── .github/                   # GitHub workflows
├── package.json
├── README.md
├── WORKSPACE_GUIDELINES.md
└── [config files]
```

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
npm run type-check   # Run TypeScript check
npm test             # Run tests
npm run test:watch   # Run tests in watch mode
```

### Code Quality

- **ESLint**: Code linting with custom rules
- **Prettier**: Code formatting
- **TypeScript**: Type checking
- **Husky**: Pre-commit hooks
- **Jest**: Unit testing

### Development Guidelines

- Follow the [Workspace Guidelines](./WORKSPACE_GUIDELINES.md)
- Use conventional commit messages
- Write tests for new features
- Keep components small and focused
- Follow the established naming conventions

## 🎨 Design System

### Colors

- **Cinematic Blue**: `#1e3a8a` to `#3b82f6` (gradient)
- **Cinematic Gold**: `#f59e0b` to `#fbbf24` (gradient)
- **Dark Mode**: Automatic dark mode support

### Animations

- **Fade In**: `fade-in` class with scroll trigger
- **Slide In Left/Right**: `slide-in-left` and `slide-in-right`
- **Scale In**: `scale-in` for hover effects
- **Float**: `float` for continuous animations

### Typography

- **Geist Sans**: Modern, clean font for body text
- **Geist Mono**: Monospace font for code elements

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

- **Netlify**: Compatible with Next.js
- **Railway**: Easy deployment
- **Custom Server**: Build with `npm run build`

## 📈 Performance

### Lighthouse Scores (Target)

- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### Optimization Features

- Automatic image optimization
- CSS and JavaScript minification
- Code splitting
- Static generation where possible

## 🔒 Security

- **Content Security Policy**: Ready for implementation
- **HTTPS**: Required for production
- **Form Validation**: Client and server-side validation
- **XSS Protection**: Built into Next.js

## 📊 Analytics Ready

The project is prepared for analytics integration:

- Google Analytics 4
- Google Tag Manager
- Facebook Pixel
- Custom event tracking

## 🎯 SEO Optimized

- **Meta Tags**: Complete Open Graph and Twitter Card support
- **Structured Data**: Ready for JSON-LD implementation
- **Sitemap**: Automatic generation with Next.js
- **Robots.txt**: SEO-friendly configuration

## 🧪 Testing

### Test Structure

```
tests/
├── components/     # Component tests
├── utils/         # Utility function tests
├── integration/   # Integration tests
└── e2e/          # End-to-end tests
```

### Running Tests

```bash
npm test              # Run all tests
npm run test:watch    # Run tests in watch mode
npm run test:coverage # Run tests with coverage
```

## 📚 Documentation

- **[Workspace Guidelines](./WORKSPACE_GUIDELINES.md)**: Development standards and conventions
- **[Brand Guidelines](./docs/brand/)**: Brand identity and design system
- **[API Documentation](./docs/api/)**: API reference and examples
- **[Deployment Guide](./docs/deployment/)**: Deployment instructions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Follow the [Workspace Guidelines](./WORKSPACE_GUIDELINES.md)
4. Write tests for new functionality
5. Commit your changes (`git commit -m 'feat: add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Check the [docs](./docs/) directory
- **Issues**: Create a GitHub issue
- **Discussions**: Use GitHub Discussions
- **Email**: hello@orsonvision.com

---

**Built with ❤️ by the Orson Vision Team**
