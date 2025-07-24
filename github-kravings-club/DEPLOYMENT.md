# Kravings Club - Deployment Guide

## 📋 Project Overview

The Kravings Club project is a modern cannabis e-commerce platform built with:
- **Framework**: Vite + React 18 + TypeScript
- **UI Library**: ShadCN UI (Radix UI primitives)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (optimized for Vite)

## 🚀 Quick Deployment

### Prerequisites
- Node.js v18+ installed
- Git repository access
- Vercel account

### One-Command Deployment
```bash
cd github-kravings-club
npm install
npm run build
vercel --prod
```

## 🔧 Configuration Files Overview

### Key Configuration Files
1. **`vite.config.ts`** - Build configuration
2. **`vercel.json`** - Deployment settings
3. **`package.json`** - Project metadata and scripts
4. **`tailwind.config.ts`** - Styling configuration

### Critical Configuration Alignment
```typescript
// vite.config.ts
build: {
  outDir: 'build'  // ✅ Matches vercel.json
}
```

```json
// vercel.json
{
  "outputDirectory": "build",  // ✅ Matches vite.config.ts
  "framework": "vite"
}
```

## 📚 Development Commands

### Local Development
```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build (http://localhost:4173)
npm run preview

# Run code quality check
npm run lint
```

### Build Output Verification
After running `npm run build`, verify these files exist:
```
build/
├── index.html          # Main HTML file
├── assets/
│   ├── index-[hash].js  # JavaScript bundle (~363KB)
│   └── index-[hash].css # CSS bundle (~2.27KB)
```

## 🌐 Vercel Deployment Process

### Method 1: Automatic Deployment (Recommended)
1. **Connect Repository**:
   - Go to [vercel.com](https://vercel.com)
   - Import `madanzo/madanzo` repository
   - Select `github-kravings-club` directory as project root

2. **Verify Settings** (Auto-detected):
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Install Command: `npm install`

3. **Deploy**:
   - Click "Deploy"
   - Wait for build completion (~2-3 minutes)
   - Get live URL: `https://kravings-club-[random].vercel.app`

### Method 2: Manual CLI Deployment
```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
cd github-kravings-club
vercel --prod
```

## 🛠️ Troubleshooting Guide

### Common Issues and Solutions

#### Issue 1: "Output directory not found"
**Error**: `Error: No output directory found`
**Cause**: Mismatch between vite.config.ts and vercel.json
**Solution**:
```typescript
// Ensure vite.config.ts has:
export default defineConfig({
  build: {
    outDir: 'build'  // Must match vercel.json outputDirectory
  }
});
```

#### Issue 2: "Build fails with TypeScript errors"
**Error**: TypeScript compilation errors during build
**Solution**:
```bash
# Check for type errors
npm run build

# Fix any TypeScript issues in src/ files
# Common fixes:
# - Add proper type imports
# - Fix component prop types
# - Resolve any 'any' types
```

#### Issue 3: "404 errors on page refresh"
**Error**: Direct URL access shows 404
**Cause**: SPA routing not configured
**Solution**: Verify `vercel.json` has proper rewrites:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

#### Issue 4: "Bundle size too large"
**Warning**: JavaScript bundle > 500KB
**Solution**:
```bash
# Analyze bundle
npm run build

# Check build output for large files
# Consider code splitting or removing unused dependencies
```

#### Issue 5: "Navigation links don't work"
**Error**: Clicking navigation shows 404
**Cause**: Missing route definitions or broken links
**Solution**:
1. Check `src/App.tsx` for route definitions
2. Verify all `<Link to="/path">` have corresponding routes
3. Comment out links to non-existent pages

## 📊 Performance Optimization

### Current Performance Metrics
- **JavaScript Bundle**: ~363KB (111KB gzipped) ✅
- **CSS Bundle**: ~2.27KB (0.73KB gzipped) ✅
- **Build Time**: ~2.5 seconds ✅
- **Lighthouse Score**: 90+ (estimated) ✅

### Optimization Strategies
1. **Image Optimization**: Use WebP format for better compression
2. **Code Splitting**: Implement dynamic imports for large components
3. **Bundle Analysis**: Use `npm run build` to monitor bundle size
4. **Lazy Loading**: Implement lazy loading for non-critical components

## 🔍 Quality Assurance Checklist

### Pre-Deployment Verification
- [ ] `npm install` completes without errors
- [ ] `npm run build` generates build/ directory
- [ ] `npm run preview` serves application correctly
- [ ] All navigation links work (no 404s)
- [ ] All pages load without console errors
- [ ] Responsive design works on mobile/desktop
- [ ] ESLint shows only acceptable warnings

### Post-Deployment Verification
- [ ] Live URL loads successfully
- [ ] All pages accessible via direct URLs
- [ ] Forms and interactive elements work
- [ ] Images and assets load correctly
- [ ] HTTPS certificate is active
- [ ] Site performance is acceptable (< 3s load time)

## 📝 Environment Variables

### Current Setup
The project currently uses no environment variables. All data is hardcoded for demonstration purposes.

### Future Environment Variables
When integrating with real data sources:
```bash
# Example .env.local
VITE_API_BASE_URL=https://api.kravings.club
VITE_WORDPRESS_API_URL=https://kravings.club/wp-json/wp/v2
VITE_STRIPE_PUBLIC_KEY=pk_live_...
```

## 🔄 Continuous Deployment

### Automatic Deployments
Once connected to Vercel:
1. **Push to main branch** → Automatic deployment
2. **Pull request** → Preview deployment
3. **Manual trigger** → Custom deployment

### Deployment Hooks
```bash
# Optional: Add deployment hooks
git commit -m "feat: add new feature"
git push origin main
# Triggers automatic Vercel deployment
```

## 📞 Support and Resources

### Documentation Links
- [Vite Documentation](https://vitejs.dev/)
- [Vercel Documentation](https://vercel.com/docs)
- [ShadCN UI Documentation](https://ui.shadcn.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

### Project-Specific Resources
- **Repository**: https://github.com/Madanzo/madanzo
- **Project Directory**: `/github-kravings-club/`
- **Main Documentation**: `/CLAUDE.md`

### Common Commands Reference
```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Check code quality

# Deployment
vercel --prod        # Deploy to production
vercel --preview     # Deploy preview
vercel logs          # View deployment logs
```

---

**Last Updated**: 2024-07-24  
**Build Configuration**: Vite + React 18 + TypeScript  
**Deployment Status**: ✅ Production Ready