'use client';

import Layout from '@/components/layout/Layout';
import ProductGrid from '@/components/cannabis/ProductGrid';

export default function ProductsPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-900">
        {/* Page Header */}
        <div className="bg-gray-800 py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Our Products</h1>
            <p className="text-xl text-gray-300 mb-8">
              Premium cannabis products from top California brands
            </p>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-red-400 mb-2">Lab Tested</h3>
                <p className="text-gray-300 text-sm">All products tested for potency and purity</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-red-400 mb-2">Fast Delivery</h3>
                <p className="text-gray-300 text-sm">20-45 minute delivery window</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-red-400 mb-2">Premium Quality</h3>
                <p className="text-gray-300 text-sm">Curated selection from trusted growers</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-red-400 mb-2">Licensed</h3>
                <p className="text-gray-300 text-sm">California licensed delivery service</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Categories Overview */}
        <div className="py-16 bg-gray-850">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Product Categories</h2>
            <div className="grid md:grid-cols-4 lg:grid-cols-4 gap-8">
              <div className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition duration-200">
                <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">🌿</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Flower</h3>
                <p className="text-gray-300 text-sm">Premium indoor and outdoor cannabis flower</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition duration-200">
                <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">🍫</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Edibles</h3>
                <p className="text-gray-300 text-sm">Gummies, chocolates, and infused treats</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition duration-200">
                <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">💨</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Concentrates</h3>
                <p className="text-gray-300 text-sm">Shatter, wax, rosin, and live resin</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition duration-200">
                <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">🚬</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Pre-Rolls</h3>
                <p className="text-gray-300 text-sm">Ready-to-smoke joints and infused pre-rolls</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition duration-200">
                <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">🖊️</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Vape Cartridges</h3>
                <p className="text-gray-300 text-sm">510 thread cartridges and pods</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition duration-200">
                <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">📱</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Vape Pens</h3>
                <p className="text-gray-300 text-sm">Disposable vape pens and devices</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition duration-200">
                <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">🥤</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Drinks</h3>
                <p className="text-gray-300 text-sm">Cannabis-infused beverages and sodas</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition duration-200">
                <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">🔧</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Accessories</h3>
                <p className="text-gray-300 text-sm">Pipes, papers, and smoking accessories</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <ProductGrid />

        {/* Subscription CTA */}
        <div className="py-16 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Want Curated Monthly Deliveries?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our subscription service and get hand-picked premium products delivered monthly
            </p>
            <div className="bg-gray-700 rounded-lg p-6 mb-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="text-lg font-semibold text-red-400 mb-2">Curated Selection</h4>
                  <p className="text-gray-300 text-sm">Hand-picked products by our cannabis experts</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-red-400 mb-2">Exclusive Access</h4>
                  <p className="text-gray-300 text-sm">First access to new and limited products</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-red-400 mb-2">Member Discounts</h4>
                  <p className="text-gray-300 text-sm">Special pricing and bonus rewards</p>
                </div>
              </div>
            </div>
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition duration-200">
              Learn About Subscription
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}