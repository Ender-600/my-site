# Boyu Liu - Personal Portfolio

## Official portfolio

The warm ivory and forest-green editorial design is now the main website:

- `/` — introduction, portrait, and current/previous affiliations.
- `/work` — ten projects with original screenshots, GIF previews, and Century Pano’s World Model video, plus research publications.
- `/about` — education, experience, and technical toolkit.
- `/blog` — writing space, coming soon.

The former `/demos/editorial` entry redirects to `/`. Its `/work`, `/about`, and
`/blog` subpages redirect to the matching official routes. Existing editorial
bookmarks therefore continue to work. The Studio and Research demos remain
available as alternate design concepts.

## September 2026 design demos

Run `npm run dev` and open `/demos` to compare three complete portfolio concepts:

- `/` — the editorial design, now the official portfolio.
- `/demos/studio` — graphite, lime, product and engineering work with project filters.
- `/demos/research` — white, cobalt, research and publications with a desktop index.

The comparison gallery at `/demos` links directly to the official editorial site
and the two remaining demos. The demo switcher’s Editorial and Home links both
lead to `/`.

All demos read the September 6, 2026 résumé content from `lib/resume.ts` and link to
`public/resume/Boyu-Liu-Resume-2026-09.pdf`. Long project and work-experience details
expand in place. Demo routes are marked `noindex`; the official pages use `/`,
`/work`, `/about`, and `/blog`.

A cutting-edge, modern personal website showcasing my work experience, projects, research, and technical expertise in software development and AI research.

## ✨ Features

### 🏠 Homepage

- Dynamic Hero section with animated skill showcase
- Personal introduction and achievements
- Interactive background effects and glassmorphism design
- Responsive design with dark theme

### 💼 Projects

- Project cards with advanced filtering
- Detailed project information modals
- Technology stack tags and project status
- GitHub and live demo links

### 🧠 Research

- Publications and research papers
- Current research projects
- Research areas and expertise
- Academic achievements and collaborations

### 📞 Contact

- Multiple contact methods
- Interactive contact form
- Collaboration opportunities
- Professional networking links

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + Custom Components
- **Theme**: next-themes (Dark/Light mode)
- **Icons**: Lucide React
- **Animations**: Custom CSS animations and transitions

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the website.

### Production Build

```bash
pnpm build
pnpm start
```

## 📁 Project Structure

```
my-site/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects page
│   ├── research/          # Research page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── robots.ts          # SEO robots file
│   └── sitemap.ts         # SEO sitemap
├── components/            # React components
│   ├── ui/               # Base UI components
│   ├── about.tsx         # About section
│   ├── contact-section.tsx # Contact section
│   ├── footer.tsx        # Footer component
│   ├── hero.tsx          # Hero section
│   ├── navigation.tsx    # Navigation component
│   ├── project-card.tsx  # Project cards
│   └── research-section.tsx # Research section
├── lib/                  # Utility functions
│   └── utils.ts          # Common utilities
└── public/               # Static assets
```

## 🎨 Design Features

### Visual Design

- Modern gradient color schemes
- Smooth animations and transitions
- Responsive design for all devices
- Dark theme with glassmorphism effects

### User Experience

- Intuitive navigation and page structure
- Fast loading and optimized performance
- Accessibility support
- Mobile-friendly interactions

## 🔧 Customization

### Theme Configuration

Modify CSS variables in `app/globals.css` to customize theme colors.

### Content Updates

- Project information: Edit `components/project-card.tsx` projects array
- Research content: Edit `components/research-section.tsx` data arrays
- Personal information: Edit `components/hero.tsx` and `components/about.tsx`
- Contact information: Edit `components/contact-section.tsx`

## 📱 Responsive Design

The website is fully responsive and supports:

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🚀 Deployment

### Vercel Deployment

1. Push code to GitHub
2. Import project in Vercel
3. Configure environment variables (if needed)
4. Deploy

### Other Platforms

The website can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- Self-hosted servers

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details

## 🤝 Contributing

Issues and Pull Requests are welcome!

## 📞 Contact

- Email: boyul5@illinois.edu
- GitHub: [@Ender-600](https://github.com/Ender-600)
- LinkedIn: [Boyu Liu](https://linkedin.com/in/boyu-liu)

---

Made with ❤️ by Boyu Liu
