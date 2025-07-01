# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a GitHub Profile Repository (madanzo/madanzo) that serves as both a professional profile showcase and business automation command center. The repository showcases expertise as a Full-Stack Developer, Digital Marketing Pioneer, and Creative Technologist while housing comprehensive business project documentation and a fully functional React music showcase application.

## Architecture & Key Components

### Profile Display System
- `README.md` - Auto-displays on GitHub profile, showcases current projects and skills
- Uses dynamic badges, GitHub stats, and contribution graphs
- Features tech stack, current ventures (Kravings Club, Merkad Agency), and contact info

### Business Project Structure
- `projects/nenes-del-perreo/` - **Production React music showcase** (deployed to GitHub Pages)
  - Mobile-responsive design with hamburger navigation
  - React 18 + React Router v6 architecture
  - Touch-optimized interface with 44px minimum touch targets
  - Comprehensive responsive breakpoints (768px, 480px, 320px)
  - Uses HashRouter for GitHub Pages compatibility

### Additional Project Variants
- `nenes-del-perreo-check/` - Vite + React + TypeScript + ShadCN UI implementation
- `perreo-texas-vibes/` - Vite + React + TypeScript variant
- `perreo-texas-vibes-main/` - Extended Vite version with UI components library

## Common Development Commands

### React Projects (Nenes del Perreo)
```bash
cd projects/nenes-del-perreo
npm install                 # Install dependencies
npm start                   # Start development server (http://localhost:3000)
npm run build              # Build for production
npm test                   # Run Jest test suite
npm run deploy             # Deploy to GitHub Pages (requires gh-pages package)
```

**Live URLs:**
- Development: http://localhost:3000 (when running `npm start`)
- Production: https://madanzo.github.io/nenes-del-perreo/

### Mobile Development Workflow
```bash
# After making mobile responsiveness changes
npm run build              # Test build process
npm run deploy             # Deploy to GitHub Pages
git add src/ package.json public/  # Stage source files only (exclude node_modules)
git commit -m "Mobile fixes: [description]"
git push origin main       # Push to repository
```

### Vite + TypeScript Projects
```bash
# For nenes-del-perreo-check, perreo-texas-vibes, perreo-texas-vibes-main
cd nenes-del-perreo-check   # or other Vite project
npm install                  # Install dependencies
npm run dev                  # Start dev server (http://localhost:5173)
npm run build               # TypeScript check + production build
npm run preview             # Preview production build
npm run lint                # Run ESLint
```

### Git Repository Management
```bash
# Exclude node_modules from commits (very important)
git add src/ package.json public/ README.md  # Stage source files only
git commit -m "Description of changes"
git push origin main

# For React projects specifically
cd projects/nenes-del-perreo
git add . --exclude=node_modules --exclude=build
```

## Current Project: Nenes del Perreo React Application

### Application Architecture
**Framework**: React 18 with Create React App
**Routing**: React Router v6 with HashRouter (required for GitHub Pages)
**Styling**: Custom CSS with mobile-first responsive design
**State Management**: React useState for mobile menu functionality
**Deployment**: GitHub Pages with automated deployment via gh-pages package

### Mobile-First Design Implementation
- **Responsive Navigation**: Hamburger menu for mobile devices (≤480px)
- **Touch Optimization**: 44px minimum touch targets following accessibility guidelines
- **Breakpoint Strategy**: 768px (tablet), 480px (mobile), 320px (small mobile)
- **Performance**: Uses CSS transforms and backdrop-filter for smooth animations

## Development Workflow

### React Development Process
1. **Start Development**: `cd projects/nenes-del-perreo && npm start`
2. **Code Changes**: Edit files in `src/` directory
3. **Test Mobile**: Use browser dev tools to test responsive breakpoints
4. **Build & Deploy**: `npm run build && npm run deploy`
5. **Verify Deployment**: Check https://madanzo.github.io/nenes-del-perreo/

### Profile Updates (README.md)
1. Edit `README.md` for immediate profile changes
2. Use dynamic GitHub stats APIs for live data
3. Update tech stack badges when learning new technologies
4. Maintain professional presentation while showcasing technical depth

## Key Technical Decisions

### React Project Structure (Nenes del Perreo - Production)
**Component Architecture:**
- `App.js` - Main component with routing and mobile navigation state
- `pages/` - Route components (Home, Music, About, Events)
- `App.css` - Global styles with comprehensive mobile responsive design
- `index.js` - React DOM rendering entry point

**Key Implementation Details:**
- **HashRouter**: Required for GitHub Pages deployment (handles client-side routing)
- **Mobile State Management**: `useState` for hamburger menu toggle functionality
- **CSS Architecture**: Mobile-first approach with progressive enhancement
- **Accessibility**: WCAG-compliant touch targets and keyboard navigation support
- **Performance**: CSS-only animations, no external animation libraries

### Vite TypeScript Projects Architecture
**Tech Stack:**
- **Build Tool**: Vite (fast HMR, optimized production builds)
- **Language**: TypeScript for type safety
- **Framework**: React 18/19
- **Styling**: Tailwind CSS for utility-first styling
- **UI Components**: 
  - ShadCN UI (nenes-del-perreo-check) - Radix UI primitives + Tailwind
  - Custom components with Radix UI (perreo-texas-vibes variants)
- **Forms**: React Hook Form for form validation
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React for consistent iconography

## Directory Structure

```
/workspaces/madanzo/
├── README.md                    # GitHub profile display (public-facing)
├── CLAUDE.md                   # This file - guidance for Claude Code
├── assets/images/              # Profile images and assets
├── data/                       # Local data storage
├── projects/                   # Project implementations
│   └── nenes-del-perreo/       # React music showcase application (PRODUCTION)
│       ├── package.json        # Dependencies: React 18, React Router v6, gh-pages
│       ├── public/             # Static assets and index.html
│       ├── src/                # React source code
│       │   ├── App.js          # Main component with mobile navigation
│       │   ├── App.css         # Responsive styles (768px, 480px, 320px breakpoints)
│       │   └── pages/          # Route components
│       └── build/              # Production build output (auto-generated)
├── nenes-del-perreo-check/     # Vite + React + TypeScript + ShadCN UI
│   ├── src/
│   │   ├── components/ui/      # ShadCN UI components
│   │   └── lib/utils.ts        # Utility functions
│   └── tailwind.config.js      # Tailwind CSS configuration
├── perreo-texas-vibes/         # Vite + React + TypeScript variant
│   └── src/
│       └── components/         # Custom React components
└── perreo-texas-vibes-main/    # Extended Vite version with UI library
```

## Testing & Quality Assurance

### React Application Testing
```bash
cd projects/nenes-del-perreo
npm test                        # Run Jest test suite
npm test -- --coverage         # Run tests with coverage report
```

### Mobile Responsiveness Testing
```bash
# Test responsive design
npm start  # Start dev server
# Use browser dev tools to test:
# - Desktop (1200px+): Horizontal navigation
# - Tablet (768px): Optimized spacing
# - Mobile (480px): Hamburger menu
# - Small mobile (320px): Compact layout

# Verify touch targets
# All interactive elements should be minimum 44px for mobile accessibility
```

## Important Development Notes

### Git Best Practices
- **Never commit node_modules**: Always excluded from git commits for performance
- **Staging files**: Use `git add src/ package.json public/` for React projects
- **Build artifacts**: The `build/` directory is auto-generated, don't manually edit
- **Package lock**: Commit `package-lock.json` for dependency consistency

### Deployment Considerations
- **GitHub Pages**: Uses HashRouter for client-side routing compatibility
- **Cache**: GitHub Pages has ~10 minute deployment propagation time
- **HTTPS**: All external resources must use HTTPS (GitHub Pages requirement)
- **Base URL**: Homepage setting in package.json must match repository name

### Performance Optimization
- **Mobile-first CSS**: Smaller mobile styles load first, desktop styles enhance
- **Responsive images**: Consider different sizes for different viewport widths  
- **Bundle size**: React build automatically optimizes and minimizes CSS/JS

## Common Profile Maintenance Tasks

### Dynamic GitHub Stats (Auto-updating)
```markdown
![GitHub Stats](https://github-readme-stats.vercel.app/api?username=madanzo&show_icons=true&theme=radical)
![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=madanzo&layout=compact&theme=radical)
![GitHub Activity Graph](https://github-readme-activity-graph.vercel.app/graph?username=madanzo&theme=radical)
```

### Tech Stack Badges
```markdown
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
```

## Troubleshooting

### Common Issues
1. **MCP Connection Fails**: Check API keys, restart Claude Desktop
2. **Database Connection Error**: Ensure PostgreSQL service is running
3. **GitHub Stats Not Updating**: APIs are cached, wait 15 minutes
4. **React Build Fails**: Check Node.js version compatibility
5. **Mobile Site Issues**: Test responsive breakpoints, check touch targets (44px min)
6. **Deployment Fails**: Ensure node_modules excluded from git commits
7. **Docker MCP Timeout Issues**: See Docker MCP section below

### Docker MCP Service Timeouts
If the MCP Docker service fails with timeout errors when pulling images:

1. **Quick Fix - Run the pre-pull script**:
   ```bash
   cd /workspaces/madanzo/scripts
   ./docker-mcp-pull.sh
   ```

2. **Manual Alternative**:
   ```bash
   docker pull mcp/fetch
   docker pull mcp/github-mcp-server
   docker pull mcp/google-maps
   docker pull mcp/puppeteer
   ```

3. **Verify Images**:
   ```bash
   docker images | grep mcp
   ```

For detailed troubleshooting, see: `docs/DOCKER_MCP_TROUBLESHOOTING.md`

### System Requirements
- Node.js v18+ for React development
- PostgreSQL 13+ for database operations
- Python 3.8+ for analytics scripts
- Git for version control
- Docker Desktop (for MCP Docker services)