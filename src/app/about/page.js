'use client';

import Layout from '@/components/layout/Layout';

export default function AboutPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">About Kravings Club</h1>
            <p className="text-xl text-gray-300">Premium Cannabis Delivery Service in Southern California</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Our Story</h2>
            <p className="text-gray-300 mb-4">
              Kravings Club LLC is a premier cannabis delivery service operating under California license 
              C9-000555-LIC. We specialize in delivering jaw-dropping cannabis deals directly to your door, 
              offering premium cannabis products with unmatched convenience and quality.
            </p>
            <p className="text-gray-300 mb-4">
              Founded with the mission to provide exceptional cannabis experiences, we&apos;ve built our reputation 
              on fast, reliable delivery (20-45 minutes), premium product selection, and outstanding customer service. 
              Our team is passionate about cannabis culture and committed to helping our customers discover 
              the perfect products for their needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300">
                To provide Southern California with premium cannabis products through fast, 
                discreet, and professional delivery service while building a community of 
                satisfied customers who trust our quality and expertise.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Our Values</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Premium quality products</li>
                <li>• Fast and reliable delivery</li>
                <li>• Exceptional customer service</li>
                <li>• Legal compliance and safety</li>
                <li>• Community engagement</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">What We Offer</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-red-400 mb-2">Wide Selection</h4>
                <p className="text-gray-300 text-sm">
                  Flower, edibles, concentrates, pre-rolls, vapes, drinks, and accessories from top brands.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-red-400 mb-2">Fast Delivery</h4>
                <p className="text-gray-300 text-sm">
                  20-45 minute delivery window to multiple cities across Southern California.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-red-400 mb-2">Loyalty Program</h4>
                <p className="text-gray-300 text-sm">
                  Earn points on every purchase and redeem them for credits on future orders.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Service Areas</h2>
            <p className="text-gray-300 mb-4">
              We proudly serve the following cities in Southern California:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-gray-300">
                <div>• Lynwood</div>
                <div>• South Gate</div>
                <div>• Downey</div>
              </div>
              <div className="text-gray-300">
                <div>• Long Beach</div>
                <div>• Los Angeles</div>
                <div>• South Bay</div>
              </div>
              <div className="text-gray-300">
                <div>• Torrance</div>
                <div>• Hawthorne</div>
                <div>• Inglewood</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Experience Kravings Club?</h3>
            <p className="text-gray-300 mb-6">
              Join thousands of satisfied customers who trust us for their cannabis needs.
            </p>
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition duration-200">
              Start Shopping
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}