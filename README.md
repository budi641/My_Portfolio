# Modern Portfolio

A modern, responsive portfolio website built with Next.js, React Three Fiber, and Tailwind CSS. Features interactive 3D elements, smooth animations, and a professional design.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **3D Interactive Elements**: Custom 3D models and animations using React Three Fiber
- **Modern UI**: Clean, professional design with smooth animations
- **Performance Optimized**: Fast loading times and smooth interactions
- **SEO Friendly**: Optimized for search engines
- **GitHub Pages Ready**: Easy deployment to GitHub Pages

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **3D Graphics**: React Three Fiber & Three.js
- **UI Components**: Radix UI
- **Icons**: Lucide React & React Icons
- **Animations**: CSS animations and transitions
- **Deployment**: GitHub Pages

## 📦 Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/YOUR_USERNAME/My_Portfolio.git
cd My_Portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

This project is configured for easy deployment to GitHub Pages. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

Quick deployment:
\`\`\`bash
npm run build
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
\`\`\`

## 📁 Project Structure

\`\`\`
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # UI components
│   ├── hero.tsx          # Hero section
│   ├── about.tsx         # About section
│   ├── projects.tsx      # Projects section
│   └── ...               # Other components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
│   └── images/           # Image assets
├── .github/              # GitHub Actions
└── next.config.mjs       # Next.js configuration
\`\`\`

## 🎨 Customization

### Colors
The project uses a custom color palette defined in `tailwind.config.ts`. Main colors:
- **Electric Blue**: `#0087ff`
- **Navy**: `#001969`
- **Violet**: `#8719ff`

### Content
Update the following files to customize content:
- `components/hero.tsx` - Hero section content
- `components/about.tsx` - About section
- `components/projects.tsx` - Projects data
- `components/work.tsx` - Work experience
- `components/skills.tsx` - Skills and resume link

### Images
Replace images in `public/images/` with your own:
- Profile pictures
- Project screenshots
- Company logos
- Background images

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Sections

1. Create a new component in `components/`
2. Import and add it to `app/page.tsx`
3. Add navigation link in `components/header.tsx`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: aameendev@gmail.com
- **GitHub**: [@budi641](https://github.com/budi641)
- **Portfolio**: [Live Demo](https://YOUR_USERNAME.github.io/My_Portfolio/)

---

Built with ❤️ using Next.js and React Three Fiber
