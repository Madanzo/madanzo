# Kravings Club - Data Integration Plan

## 🎯 Overview

This document outlines the plan for replacing hardcoded placeholder content with real data from the actual Kravings Club business operations.

## 📊 Current State Analysis

### Hardcoded Data Components
The following components currently use placeholder data:

1. **Menu.tsx** - Product catalog (3 sample products)
2. **ProductCategories.tsx** - Category listings (6 categories)
3. **Testimonials.tsx** - Customer reviews (3 fake testimonials)
4. **DeliveryAreas.tsx** - Service areas and delivery info
5. **About.tsx** - Company information and contact details
6. **FAQ.tsx** - Frequently asked questions
7. **Blog.tsx** - Blog posts and content

### Data Sources to Integrate

#### Option 1: WordPress REST API (Recommended)
**Existing Website**: kravings.club
**API Endpoint**: `https://kravings.club/wp-json/wp/v2/`

**Available Endpoints**:
- `/posts` - Blog content
- `/pages` - Static page content
- `/products` (if WooCommerce) - Product catalog
- `/categories` - Product categories
- `/media` - Images and assets

#### Option 2: Custom API Development
**New Backend**: Express.js + PostgreSQL
**Base URL**: `https://api.kravings.club`

**Custom Endpoints**:
- `/api/products` - Cannabis product catalog
- `/api/categories` - Product categories
- `/api/reviews` - Customer testimonials
- `/api/delivery-areas` - Service locations
- `/api/blog` - Blog content

#### Option 3: Headless CMS Integration
**Options**: Contentful, Strapi, Sanity
**Benefits**: Easy content management for non-technical users

## 🔧 Technical Implementation Plan

### Phase 1: API Integration Setup

#### 1.1 Install Required Dependencies
```bash
# Data fetching and state management
npm install @tanstack/react-query axios
npm install @types/axios --save-dev

# Environment variable management
npm install dotenv
```

#### 1.2 Create API Client
```typescript
// src/lib/api.ts
import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.VITE_API_BASE_URL || 'https://kravings.club/wp-json/wp/v2',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
```

#### 1.3 Setup React Query Provider
```typescript
// src/main.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 3,
    },
  },
});

// Wrap App with QueryClientProvider
```

### Phase 2: Data Models and Types

#### 2.1 TypeScript Interfaces
```typescript
// src/types/api.ts

export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  thc_percentage?: number;
  cbd_percentage?: number;
  category: ProductCategory;
  images: ProductImage[];
  stock_status: 'in_stock' | 'out_of_stock';
  effects?: string[];
  strain_type?: 'indica' | 'sativa' | 'hybrid';
}

export interface ProductCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  image?: string;
  product_count: number;
}

export interface CustomerReview {
  id: number;
  customer_name: string;
  rating: number;
  review_text: string;
  date: string;
  verified_purchase: boolean;
  product_id?: number;
}

export interface DeliveryArea {
  id: number;
  city: string;
  zip_codes: string[];
  delivery_fee: number;
  minimum_order: number;
  estimated_time: string;
  is_active: boolean;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featured_image?: string;
  author: string;
  date: string;
  categories: string[];
  tags: string[];
}
```

### Phase 3: API Hooks Implementation

#### 3.1 Product Hooks
```typescript
// src/hooks/useProducts.ts
import { useQuery } from '@tanstack/react-query';
import apiClient from '../lib/api';
import { Product } from '../types/api';

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async (): Promise<Product[]> => {
      const response = await apiClient.get('/products');
      return response.data;
    },
  });
};

export const useProductCategories = () => {
  return useQuery({
    queryKey: ['product-categories'],
    queryFn: async () => {
      const response = await apiClient.get('/product-categories');
      return response.data;
    },
  });
};
```

#### 3.2 Content Hooks
```typescript
// src/hooks/useContent.ts
export const useCustomerReviews = () => {
  return useQuery({
    queryKey: ['reviews'],
    queryFn: async () => {
      const response = await apiClient.get('/reviews');
      return response.data;
    },
  });
};

export const useBlogPosts = () => {
  return useQuery({
    queryKey: ['blog-posts'],
    queryFn: async () => {
      const response = await apiClient.get('/posts');
      return response.data;
    },
  });
};

export const useDeliveryAreas = () => {
  return useQuery({
    queryKey: ['delivery-areas'],
    queryFn: async () => {
      const response = await apiClient.get('/delivery-areas');
      return response.data;
    },
  });
};
```

### Phase 4: Component Updates

#### 4.1 Menu Component Update
```typescript
// src/pages/Menu.tsx - Before/After Example
// BEFORE: Hardcoded data
const products = [
  { id: 1, name: "OG Kush", ... }
];

// AFTER: API integration
const Menu = () => {
  const { data: products, isLoading, error } = useProducts();
  
  if (isLoading) return <ProductSkeleton />;
  if (error) return <ErrorMessage />;
  
  return (
    <div>
      {products?.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
```

#### 4.2 Loading States and Error Handling
```typescript
// src/components/ui/LoadingStates.tsx
export const ProductSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-48 bg-gray-300 rounded-lg mb-4"></div>
    <div className="h-4 bg-gray-300 rounded mb-2"></div>
    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
  </div>
);

export const ErrorMessage = ({ message }: { message?: string }) => (
  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
    <p className="text-red-800">
      {message || "Something went wrong. Please try again later."}
    </p>
  </div>
);
```

## 🔗 Data Source Integration Options

### WordPress Integration (Phase 1 - Quick Win)

#### Setup WooCommerce REST API
```typescript
// Environment variables
VITE_WP_API_URL=https://kravings.club/wp-json/wp/v2
VITE_WC_API_URL=https://kravings.club/wp-json/wc/v3
VITE_WC_CONSUMER_KEY=ck_your_consumer_key
VITE_WC_CONSUMER_SECRET=cs_your_consumer_secret
```

#### WordPress Endpoints to Use
- **Products**: `/wp-json/wc/v3/products`
- **Categories**: `/wp-json/wc/v3/products/categories`
- **Reviews**: `/wp-json/wc/v3/products/reviews`
- **Blog Posts**: `/wp-json/wp/v2/posts`
- **Pages**: `/wp-json/wp/v2/pages`

### Custom Database Integration (Phase 2 - Long Term)

#### Database Schema
```sql
-- Products table
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  thc_percentage DECIMAL(4,2),
  cbd_percentage DECIMAL(4,2),
  category_id INTEGER REFERENCES categories(id),
  stock_quantity INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Categories table
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  image_url VARCHAR(500),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Customer reviews table
CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  customer_name VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  review_text TEXT,
  product_id INTEGER REFERENCES products(id),
  verified_purchase BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## 🎨 Content Management Strategy

### Admin Interface Options

#### Option 1: WordPress Admin (Immediate)
- Use existing WordPress admin
- WooCommerce for product management
- Custom fields for cannabis-specific data (THC/CBD percentages)

#### Option 2: Custom Admin Panel (Future)
```typescript
// Admin routes
/admin/products      - Product management
/admin/categories    - Category management  
/admin/reviews       - Review moderation
/admin/delivery      - Delivery area management
/admin/content       - Blog/page content
```

## 🔄 Migration Plan

### Step-by-Step Migration Process

#### Week 1: Infrastructure Setup
1. Set up WordPress REST API access
2. Configure environment variables
3. Install and configure React Query
4. Create basic API client
5. Set up TypeScript interfaces

#### Week 2: Product Data Migration
1. Replace hardcoded products in Menu.tsx
2. Update ProductCategories.tsx with real data
3. Implement loading states and error handling
4. Test product display and filtering

#### Week 3: Content Migration
1. Replace hardcoded testimonials with real reviews
2. Update delivery areas with accurate information
3. Integrate blog content from WordPress
4. Update company information in About.tsx

#### Week 4: Testing and Optimization
1. Comprehensive testing of all API integrations
2. Performance optimization and caching
3. Error handling and fallback states
4. SEO optimization for dynamic content

## 📊 Data Validation and Quality

### Content Guidelines
- **Product Images**: High-quality, consistent sizing (500x500px minimum)
- **Descriptions**: SEO-optimized, compliance-focused
- **Pricing**: Real-time accuracy, tax calculations
- **Inventory**: Live stock status updates

### Compliance Considerations
- **Age Verification**: Track and log verification attempts
- **Legal Disclaimers**: Dynamic legal text based on location
- **Product Information**: Required THC/CBD percentages
- **Delivery Restrictions**: Geo-fenced delivery areas

## 🔒 Security and Privacy

### API Security
```typescript
// Rate limiting
const rateLimiter = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
};

// Data sanitization
const sanitizeInput = (input: string) => {
  return input.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
};
```

### Privacy Compliance
- GDPR compliance for customer data
- CCPA compliance for California users
- Customer review anonymization options
- Data retention policies

## 📈 Performance Optimization

### Caching Strategy
```typescript
// React Query cache configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,      // 5 minutes
      cacheTime: 30 * 60 * 1000,     // 30 minutes
      refetchOnWindowFocus: false,
      refetchOnMount: true,
    },
  },
});
```

### Image Optimization
- WebP format conversion
- Lazy loading implementation
- CDN integration for product images
- Responsive image sizing

## 🚀 Deployment Considerations

### Environment Configuration
```bash
# Production environment variables
VITE_API_BASE_URL=https://api.kravings.club
VITE_WP_API_URL=https://kravings.club/wp-json/wp/v2
VITE_ENABLE_API_CACHE=true
VITE_CACHE_DURATION=300000
```

### Build Optimization
- Code splitting for API-heavy components
- Bundle analysis and optimization
- Service worker for offline capability

## 📋 Success Metrics

### Key Performance Indicators
- **Page Load Time**: < 3 seconds with real data
- **API Response Time**: < 500ms average
- **Error Rate**: < 1% for API calls
- **Cache Hit Rate**: > 80% for repeated requests

### Content Metrics
- **Product Accuracy**: 100% inventory sync
- **Review Authenticity**: Verified purchase reviews
- **Content Freshness**: Daily blog/product updates
- **SEO Performance**: Improved search rankings

---

**Implementation Timeline**: 4-6 weeks  
**Priority Level**: High  
**Dependencies**: WordPress API access, product database  
**Success Criteria**: Full replacement of hardcoded data with live content