export class KravingsWordPress {
  constructor() {
    this.baseUrl = process.env.WORDPRESS_API_URL || 'https://kravings.club';
    this.username = process.env.WP_USERNAME;
    this.password = process.env.WP_APP_PASSWORD;
    this.timeout = 10000; // 10 second timeout
    
    // Only setup auth if credentials are available
    if (this.username && this.password) {
      if (typeof window === 'undefined') {
        this.auth = Buffer.from(`${this.username}:${this.password}`).toString('base64');
      } else {
        this.auth = btoa(`${this.username}:${this.password}`);
      }
    }
  }

  async fetchWithAuth(url) {
    // Return mock data if no auth credentials during build
    if (!this.auth && typeof window === 'undefined') {
      console.warn('WordPress API credentials not available, returning mock data');
      return [];
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await fetch(url, {
        headers: {
          'Authorization': `Basic ${this.auth}`,
          'Content-Type': 'application/json'
        },
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        console.error(`WordPress API Error: ${response.status} for ${url}`);
        return [];
      }
      
      return await response.json();
    } catch (error) {
      clearTimeout(timeoutId);
      if (error.name === 'AbortError') {
        console.error('WordPress API request timeout');
      } else {
        console.error('WordPress API error:', error.message);
      }
      return [];
    }
  }

  async getProducts() {
    return await this.fetchWithAuth(`${this.baseUrl}/wp-json/wp/v2/posts?per_page=50`);
  }

  async getProductsByCategory(categoryId) {
    return await this.fetchWithAuth(`${this.baseUrl}/wp-json/wp/v2/posts?categories=${categoryId}&per_page=20`);
  }

  async getFlowerProducts() {
    return await this.getProductsByCategory(356);
  }

  async getEdibleProducts() {
    return await this.getProductsByCategory(357);
  }

  async getPages() {
    return await this.fetchWithAuth(`${this.baseUrl}/wp-json/wp/v2/pages`);
  }

  async searchProducts(query) {
    return await this.fetchWithAuth(`${this.baseUrl}/wp-json/wp/v2/posts?search=${encodeURIComponent(query)}`);
  }
}

export const wp = new KravingsWordPress();