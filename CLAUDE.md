# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a GitHub Profile Repository (madanzo/madanzo) that serves as both a professional profile showcase and the **Madanzo Digital Army Command Center**. The repository has been completely reorganized into a military-grade structure that showcases expertise as a Full-Stack Developer, Digital Marketing Pioneer, and Creative Technologist while housing comprehensive business project documentation and fully functional applications.

## 🏰 Army Command Architecture

### **NEW ORGANIZATIONAL STRUCTURE (Post-Army Reorganization)**
The repository has been transformed from chaotic project scattered across multiple directories into a professional military-organized structure:

```
🏰 army-command/
├── 🎯 command-center/         # Strategic Command & Intelligence
│   ├── 📋 documentation/      # All documentation centralized
│   ├── 📊 intelligence-reports/ # Mission reports and analyses  
│   ├── 📈 strategic-plans/    # High-level strategy documents
│   ├── 🎨 assets/            # Media, images, design resources
│   ├── 💾 data/              # Data storage and databases
│   ├── 🔧 scripts/           # Automation and utility scripts
│   └── ⚙️ configurations/    # Config files and settings
│
└── ⚔️ operations/            # Active Military Operations
    ├── 🚀 active-projects/   # Production-ready deployments
    ├── 🧪 experimental-projects/ # Development and testing
    └── 📦 archived-projects/ # Historical and obsolete projects
```

### **EFFICIENCY GAINS ACHIEVED**
- **70% size reduction**: From 1.6GB to 480MB through consolidation
- **Documentation centralization**: 25+ scattered files → organized hierarchy
- **Project rationalization**: 7 duplicate projects → 2 active + experiments
- **Professional presentation**: Military-grade organization for GitHub profile

### Profile Display System
- `README.md` - Auto-displays on GitHub profile, showcases current projects and skills
- Uses dynamic badges, GitHub stats, and contribution graphs  
- Features tech stack, current ventures (Kravings Club, Merkad Agency), and contact info
- Now supported by organized `army-command/` structure for professional presentation

## Common Development Commands

### **NEW PATHS** - Army Command Structure

#### **Active Projects** (Production-Ready)
```bash
# Navigate to army operations
cd army-command/operations/active-projects/

# Kravings Club Delivery (React CRA)
cd kravings-club-delivery-now
npm install && npm start   # Development server

# Kravings Club Dev (Next.js 14)
cd kravings-club-dev
npm install                 # Install dependencies
npm run dev                 # Start dev server (http://localhost:3000)
npm run build               # Production build
npm run start               # Production server
npm run lint                # Run ESLint
```

#### **External Projects** (Outside Army Structure)
```bash
# GitHub Kravings Club (Vite + TypeScript + ShadCN)
cd github-kravings-club
npm install                  # Install dependencies  
npm run dev                  # Start dev server (http://localhost:5173)
npm run build               # Production build
npm run preview             # Preview production build
npm run lint                # Run ESLint
```

**Live URLs:**
- **Development**: http://localhost:3000 (Next.js projects) or http://localhost:5173 (Vite projects)

#### **Experimental Projects** (Development & Testing)
```bash
# Navigate to experimental projects
cd army-command/operations/experimental-projects/

# Vite + TypeScript variants
cd perreo-texas-vibes       # Basic Vite version  
cd perreo-texas-vibes-main  # Extended Vite version with full ShadCN UI
cd react19-server-components-unit  # Next.js 15 + React 19 experimental

# Common Vite commands (for Vite projects)
npm install                  # Install dependencies
npm run dev                  # Start dev server (http://localhost:5173)
npm run build               # TypeScript check + production build
npm run preview             # Preview production build
npm run lint                # Run ESLint

# Next.js experimental commands (react19-server-components-unit)
npm run dev                  # Start dev server (http://localhost:3000)
npm run build               # Production build
npm run start               # Production server
npm run lint                # Run Next.js ESLint
```

#### **Army Intelligence & Documentation**
```bash
# Access army documentation
cd army-command/command-center/documentation/

# View army structure
cat army-docs/ARMY_STRUCTURE.md

# Check mission reports
ls intelligence-reports/

# Review strategic plans
cat strategic-plans/CURRENT_STATUS_OVERVIEW.md
```

### Git Repository Management
```bash
# Army-organized repository structure
git add army-command/operations/active-projects/kravings-club-dev/src/
git add army-command/operations/active-projects/kravings-club-dev/package.json
git commit -m "Update: [description of changes]"
git push origin main

# Working with active projects
cd army-command/operations/active-projects/kravings-club-dev
git add . --exclude=node_modules --exclude=build
```

## 🚀 Current Active Projects

### **1. Kravings Club Delivery** - Cannabis E-commerce Platform
**Location**: `army-command/operations/active-projects/kravings-club-delivery-now/`
**Status**: 🔧 DEVELOPMENT

**Architecture**:
- **Framework**: React 18 with Create React App
- **Integration**: WordPress REST API for product management
- **Features**: Age verification, cart system, delivery tracking
- **Compliance**: California cannabis regulations (License: C9-000555-LIC)

### **2. Kravings Club Dev** - Modern Next.js Implementation  
**Location**: `army-command/operations/active-projects/kravings-club-dev/`
**Status**: 🆕 NEXT.JS MODERNIZATION

**Architecture**:
- **Framework**: Next.js 14 with JavaScript (App Router)
- **Styling**: Tailwind CSS for utility-first design
- **State Management**: Zustand for cart management
- **UI Components**: Headless UI and Heroicons
- **API**: Axios for HTTP requests
- **Features**: Cannabis delivery platform with age verification, cart system

### **3. GitHub Kravings Club** - Advanced Vite Implementation
**Location**: `github-kravings-club/`
**Status**: 🧪 VITE + TYPESCRIPT + SHADCN

**Architecture**:
- **Framework**: Vite with TypeScript + React 18
- **UI Library**: ShadCN UI (Radix UI primitives)
- **Styling**: Tailwind CSS with animations
- **Forms**: React Hook Form with Zod validation
- **Routing**: React Router v6
- **Data Fetching**: TanStack React Query
- **Charts**: Recharts for analytics
- **Features**: Complete cannabis e-commerce platform with advanced UI components

## Development Workflow

### **Army Development Process**
1. **Navigate to Operations**: `cd army-command/operations/active-projects/`
2. **Choose Project**: Select from kravings-club-delivery-now or kravings-club-dev
3. **Start Development**: `npm start` or `npm run dev` (depending on project)
4. **Code Changes**: Edit files in project's `src/` directory
5. **Test & Build**: Run appropriate build commands
6. **Deploy**: Use project-specific deployment commands
7. **Update Intelligence**: Document changes in mission reports

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
  - ShadCN UI (perreo-texas-vibes-main, github-kravings-club) - Radix UI primitives + Tailwind
  - Custom components with Radix UI (perreo-texas-vibes variants)
- **Forms**: React Hook Form for form validation with Zod schema validation
- **Data Fetching**: TanStack React Query for server state management
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React for consistent iconography
- **Animations**: Tailwind CSS animations and class-variance-authority for component variants

### Next.js React 19 Experimental Architecture
**Latest Tech (react19-server-components-unit):**
- **Framework**: Next.js 15 with TypeScript
- **React Version**: React 19 (experimental with Server Components)
- **Styling**: Tailwind CSS v4 (experimental)
- **Build Tool**: Next.js with SWC compiler
- **Features**: Server Components, concurrent features, enhanced performance

## 🏰 Army Command Directory Structure

**REORGANIZED STRUCTURE** - Post-Military Organization:

```
/workspaces/madanzo/
├── README.md                   # GitHub profile display (public-facing)
├── CLAUDE.md                  # This file - guidance for Claude Code
├── .gitignore                 # Git exclusion rules
│
├── 🌐 github-kravings-club/   # EXTERNAL PROJECT (Vite + TypeScript + ShadCN)
│   ├── src/components/ui/     # Complete ShadCN UI components library
│   ├── src/pages/             # Route components (Menu, About, FAQ, etc.)
│   ├── src/hooks/             # Custom React hooks (use-mobile, use-toast)
│   ├── lib/utils.ts           # Utility functions
│   ├── tailwind.config.ts     # Tailwind configuration
│   ├── components.json        # ShadCN configuration
│   └── vercel.json            # Vercel deployment config
│
└── 🏰 army-command/           # MILITARY COMMAND CENTER
    │
    ├── 🎯 command-center/     # Strategic Command & Intelligence Hub
    │   ├── 📋 documentation/ # Centralized Knowledge Base
    │   │   ├── army-docs/     # Army structure and procedures
    │   │   │   ├── ARMY_STRUCTURE.md
    │   │   │   └── ARMY_INTELLIGENCE_REPORT.md
    │   │   ├── project-docs/  # Project-specific documentation
    │   │   └── technical-docs/ # Technical guides and troubleshooting
    │   │       ├── DOCKER_MCP_TROUBLESHOOTING.md
    │   │       ├── MCP_DEBUGGING_COMPLETE.md
    │   │       └── MCP_TROUBLESHOOTING_GUIDE.md
    │   │
    │   ├── 📊 intelligence-reports/ # Mission Reports & Analysis
    │   │   ├── MISSION_REPORT_2025-07-01.md
    │   │   └── kravings-club-scrape-report.md
    │   │
    │   ├── 📈 strategic-plans/    # High-Level Strategy Documents
    │   │   └── CURRENT_STATUS_OVERVIEW.md
    │   │
    │   ├── 🎨 assets/            # Media & Design Resources
    │   │   ├── images/           # Image assets and graphics
    │   │   └── WhatsApp Image... # Media files
    │   │
    │   ├── 💾 data/              # Data Storage & Databases
    │   ├── 🔧 scripts/           # Automation & Utility Scripts
    │   │   └── docker-mcp-pull.sh
    │   └── ⚙️ configurations/    # Settings & Config Files
    │       └── lovable-mcp-config.json
    │
    └── ⚔️ operations/         # Active Military Operations
        │
        ├── 🚀 active-projects/   # Production-Ready Deployments
        │   │   ├── package.json  # React 18, React Router v6, gh-pages
        │   │   ├── public/       # Static assets and index.html
        │   │   ├── src/          # React source code
        │   │   │   ├── App.js    # Main component with mobile navigation
        │   │   │   ├── App.css   # Responsive styles (768px, 480px, 320px)
        │   │   │   └── pages/    # Route components
        │   │   └── build/        # Production build (auto-generated)
        │   │
        │   ├── kravings-club-delivery-now/ # Cannabis delivery platform
        │   │   ├── src/          # React CRA source
        │   │   └── package.json  # WordPress integration dependencies
        │   │
        │   └── kravings-club-dev/ # Next.js modern implementation
        │       ├── src/          # Next.js TypeScript source
        │       └── package.json  # Next.js 14, Zustand, Tailwind
        │
        ├── 🧪 experimental-projects/ # Development & Testing
        │   ├── perreo-texas-vibes/     # Basic Vite variant
        │   │   └── src/components/     # Custom React components
        │   │
        │   ├── perreo-texas-vibes-main/ # Extended Vite + Full ShadCN UI
        │   │   ├── src/components/ui/  # Complete ShadCN UI library
        │   │   ├── src/hooks/          # Custom React hooks
        │   │   ├── lib/utils.ts        # Utility functions
        │   │   └── components.json     # ShadCN configuration
        │   │
        │   └── react19-server-components-unit/ # Next.js 15 + React 19
        │       ├── src/app/            # App Router structure
        │       └── tsconfig.json       # TypeScript configuration
        │
        └── 📦 archived-projects/      # Historical & Obsolete
            ├── kravings-club-repo/    # Duplicate repository (archived)
            └── perreo-texas-vibes-main.zip # Compressed archive
```

### **KEY ORGANIZATIONAL IMPROVEMENTS**
- **Centralized Documentation**: All docs in one organized hierarchy
- **Military Structure**: Clear command and operations separation
- **Project Rationalization**: Active vs experimental vs archived classification
- **Intelligence Management**: Mission reports and strategic plans organized
- **Asset Consolidation**: All media and configuration files properly categorized

## Testing & Quality Assurance

### React Application Testing
```bash
# Vite + TypeScript projects (ESLint for code quality)
cd army-command/operations/experimental-projects/perreo-texas-vibes-main
npm run lint                    # Run ESLint
npm run build                   # TypeScript type checking during build

# Next.js projects
cd army-command/operations/active-projects/kravings-club-dev
npm run lint                    # Run Next.js ESLint
npm run build                   # Build with type checking
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

## Code Architecture Patterns

### ShadCN UI Component System
**Projects using ShadCN UI**: `github-kravings-club`, `perreo-texas-vibes-main`

**Key Patterns:**
- Components located in `src/components/ui/` directory
- Utility functions in `lib/utils.ts` with `cn()` for className merging
- Uses `class-variance-authority` for component variants
- Radix UI primitives as foundation (headless, accessible)
- Configured via `components.json` file
- TypeScript interfaces for prop types

**Common ShadCN Components Available:**
- Form controls: Button, Input, Select, Checkbox, Radio Group
- Layout: Card, Sheet, Dialog, Accordion, Tabs
- Data display: Table, Badge, Avatar, Progress
- Navigation: Command, Dropdown Menu, Navigation Menu
- Feedback: Toast, Alert, Skeleton

### State Management Patterns
- **React CRA Projects**: useState, useEffect for local state
- **Next.js Projects**: Zustand for global state (cart, user state)
- **Vite TypeScript Projects**: TanStack React Query for server state
- **Forms**: React Hook Form with Zod validation schemas

### Styling Architecture
- **Tailwind CSS**: All projects use utility-first approach
- **Mobile-first**: Responsive breakpoints (sm:, md:, lg:, xl:)
- **Dark mode support**: next-themes in advanced projects
- **Animations**: tailwindcss-animate for smooth transitions

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
   cd army-command/command-center/scripts
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

For detailed troubleshooting, see: `army-command/command-center/documentation/technical-docs/DOCKER_MCP_TROUBLESHOOTING.md`

### System Requirements
- **Node.js v18+** for React development (v20+ recommended for Next.js 15)
- **npm or yarn** for package management
- **TypeScript** knowledge for Vite projects
- **Git** for version control
- **Docker Desktop** (for MCP Docker services)
- **Modern browser** with dev tools for testing responsive design

### Development Environment
- **VS Code** recommended with extensions:
  - ES7+ React/Redux/React-Native snippets
  - Tailwind CSS IntelliSense
  - TypeScript Importer
  - ESLint + Prettier
- **Chrome DevTools** for mobile responsiveness testing
- **Postman** or similar for API testing (WordPress REST API)