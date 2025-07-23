'use client';

import { useState, useEffect } from 'react';
import { PlusIcon, StarIcon } from '@heroicons/react/24/outline';
import { useCartStore } from '@/lib/cart';

export default function ProductGrid() {
  // State management for products, loading, and category filtering
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { addItem } = useCartStore();

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'flower', name: 'Flower' },
    { id: 'edibles', name: 'Edibles' },
    { id: 'concentrates', name: 'Concentrates' },
    { id: 'prerolls', name: 'Pre-Rolls' },
    { id: 'vapes', name: 'Vape Cartridges' },
    { id: 'vapepens', name: 'Vape Pens' },
    { id: 'drinks', name: 'Drinks' },
    { id: 'accessories', name: 'Accessories' }
  ];

  useEffect(() => {
    // Sample products (replace with WordPress API data)
    const sampleProducts = [
      // Flower
      {
        id: 1,
        name: 'Girl Scout Cookies',
        category: 'flower',
        price: 45,
        thc: 22.5,
        type: 'Hybrid',
        image: '/api/placeholder/300/300',
        rating: 4.8,
        reviews: 124
      },
      {
        id: 2,
        name: 'Blue Dream',
        category: 'flower',
        price: 40,
        thc: 18.2,
        type: 'Sativa',
        image: '/api/placeholder/300/300',
        rating: 4.7,
        reviews: 89
      },
      {
        id: 3,
        name: 'OG Kush',
        category: 'flower',
        price: 50,
        thc: 24.1,
        type: 'Indica',
        image: '/api/placeholder/300/300',
        rating: 4.9,
        reviews: 201
      },
      // Edibles
      {
        id: 4,
        name: 'Sour Gummies',
        category: 'edibles',
        price: 25,
        thc: 10,
        type: 'Edible',
        image: '/api/placeholder/300/300',
        rating: 4.9,
        reviews: 156
      },
      {
        id: 5,
        name: 'Chocolate Brownies',
        category: 'edibles',
        price: 30,
        thc: 100,
        type: 'Edible',
        image: '/api/placeholder/300/300',
        rating: 4.7,
        reviews: 93
      },
      // Concentrates
      {
        id: 6,
        name: 'Live Rosin',
        category: 'concentrates',
        price: 75,
        thc: 82.3,
        type: 'Concentrate',
        image: '/api/placeholder/300/300',
        rating: 4.8,
        reviews: 67
      },
      {
        id: 7,
        name: 'Shatter',
        category: 'concentrates',
        price: 40,
        thc: 78.9,
        type: 'Concentrate',
        image: '/api/placeholder/300/300',
        rating: 4.6,
        reviews: 45
      },
      // Pre-Rolls
      {
        id: 8,
        name: 'Infused Pre-Roll',
        category: 'prerolls',
        price: 20,
        thc: 35.2,
        type: 'Pre-Roll',
        image: '/api/placeholder/300/300',
        rating: 4.8,
        reviews: 112
      },
      {
        id: 9,
        name: '3-Pack Joints',
        category: 'prerolls',
        price: 35,
        thc: 22.1,
        type: 'Pre-Roll',
        image: '/api/placeholder/300/300',
        rating: 4.5,
        reviews: 78
      },
      // Vape Cartridges
      {
        id: 10,
        name: 'Live Resin Cart',
        category: 'vapes',
        price: 55,
        thc: 85.4,
        type: 'Vape Cart',
        image: '/api/placeholder/300/300',
        rating: 4.6,
        reviews: 78
      },
      {
        id: 11,
        name: 'Distillate Cartridge',
        category: 'vapes',
        price: 45,
        thc: 88.7,
        type: 'Vape Cart',
        image: '/api/placeholder/300/300',
        rating: 4.4,
        reviews: 92
      },
      // Vape Pens
      {
        id: 12,
        name: 'Disposable Vape Pen',
        category: 'vapepens',
        price: 35,
        thc: 78.5,
        type: 'Disposable',
        image: '/api/placeholder/300/300',
        rating: 4.3,
        reviews: 134
      },
      // Drinks
      {
        id: 13,
        name: 'Cannabis Soda',
        category: 'drinks',
        price: 15,
        thc: 5,
        type: 'Beverage',
        image: '/api/placeholder/300/300',
        rating: 4.2,
        reviews: 56
      },
      {
        id: 14,
        name: 'THC Lemonade',
        category: 'drinks',
        price: 18,
        thc: 10,
        type: 'Beverage',
        image: '/api/placeholder/300/300',
        rating: 4.6,
        reviews: 73
      },
      // Accessories
      {
        id: 15,
        name: 'Glass Pipe',
        category: 'accessories',
        price: 25,
        thc: 0,
        type: 'Accessory',
        image: '/api/placeholder/300/300',
        rating: 4.5,
        reviews: 41
      },
      {
        id: 16,
        name: 'Rolling Papers',
        category: 'accessories',
        price: 8,
        thc: 0,
        type: 'Accessory',
        image: '/api/placeholder/300/300',
        rating: 4.7,
        reviews: 89
      }
    ];

    // Simulate loading products
    setTimeout(() => {
      setProducts(sampleProducts);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleAddToCart = (product) => {
    addItem(product);
  };

  // Loading state with skeleton UI
  if (loading) {
    return (
      <div className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Featured Products</h2>
            <p className="text-gray-300 mt-4">Premium cannabis products from top brands</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-gray-700 rounded-lg p-6 animate-pulse">
                <div className="bg-gray-600 h-48 rounded-lg mb-4"></div>
                <div className="bg-gray-600 h-4 rounded mb-2"></div>
                <div className="bg-gray-600 h-4 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Main product grid component
  return (
    <div className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Featured Products</h2>
          <p className="text-gray-300 mb-8">Premium cannabis products from top brands</p>
          
          {/* Category filter buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-gray-900 rounded-lg overflow-hidden shadow-xl hover:transform hover:scale-105 transition duration-300">
              {/* Product image and badges */}
              <div className="relative">
                <div className="w-full h-48 bg-gray-600 flex items-center justify-center">
                  <span className="text-gray-400">Product Image</span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                    {product.thc}% THC
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-gray-800 bg-opacity-80 text-white px-2 py-1 rounded text-sm">
                    {product.type}
                  </span>
                </div>
              </div>
              
              {/* Product details and actions */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-400 text-sm ml-2">
                    ({product.reviews} reviews)
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-400">
                    ${product.price}
                  </span>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition duration-200"
                  >
                    <PlusIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all products button */}
        <div className="text-center mt-12">
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition duration-200">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
}