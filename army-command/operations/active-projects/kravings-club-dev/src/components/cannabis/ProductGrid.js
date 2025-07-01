'use client';

import { useState, useEffect } from 'react';
import { PlusIcon, StarIcon } from '@heroicons/react/24/outline';
import { useCartStore } from '@/lib/cart';
import { wp } from '@/lib/wordpress';

export default function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { addItem } = useCartStore();

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'flower', name: 'Flower' },
    { id: 'edibles', name: 'Edibles' },
    { id: 'vapes', name: 'Vapes' },
    { id: 'concentrates', name: 'Concentrates' }
  ];

  // Sample products (replace with WordPress API data)
  const sampleProducts = [
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
      id: 4,
      name: 'Live Resin Cart',
      category: 'vapes',
      price: 55,
      thc: 85.4,
      type: 'Vape',
      image: '/api/placeholder/300/300',
      rating: 4.6,
      reviews: 78
    }
  ];

  useEffect(() => {
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

  return (
    <div className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Featured Products</h2>
          <p className="text-gray-300 mb-8">Premium cannabis products from top brands</p>
          
          {/* Category Filter */}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-gray-900 rounded-lg overflow-hidden shadow-xl hover:transform hover:scale-105 transition duration-300">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
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

        <div className="text-center mt-12">
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition duration-200">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
}