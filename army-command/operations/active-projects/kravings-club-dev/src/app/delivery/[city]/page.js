'use client';

import { useParams } from 'next/navigation';
import Layout from '@/components/layout/Layout';

export default function CityDeliveryPage() {
  const params = useParams();
  const city = params.city;

  const cityData = {
    'lynwood': {
      name: 'Lynwood',
      population: '70,000+',
      deliveryTime: '20-30 minutes',
      description: 'Cannabis delivery to Lynwood, CA. Fast, discreet delivery service to your door.',
      neighborhoods: ['East Lynwood', 'West Lynwood', 'Century Boulevard Area'],
      attractions: ['Lynwood Park', 'Plaza Mexico', 'Lynwood City Hall'],
      zipCodes: ['90262']
    },
    'south-gate': {
      name: 'South Gate',
      population: '95,000+',
      deliveryTime: '25-35 minutes',
      description: 'Professional cannabis delivery service in South Gate, California.',
      neighborhoods: ['Hollydale', 'South Gate Center', 'Industrial District'],
      attractions: ['South Gate Park', 'Hollydale Regional Park', 'South Gate Museum'],
      zipCodes: ['90280']
    },
    'downey': {
      name: 'Downey',
      population: '113,000+',
      deliveryTime: '30-40 minutes',
      description: 'Premium cannabis delivery to Downey, CA with extensive product selection.',
      neighborhoods: ['North Downey', 'West Downey', 'Downey Landing'],
      attractions: ['Downey Theatre', 'Columbia Memorial Space Center', 'Furman Park'],
      zipCodes: ['90240', '90241', '90242']
    },
    'long-beach': {
      name: 'Long Beach',
      population: '470,000+',
      deliveryTime: '35-45 minutes',
      description: 'Cannabis delivery throughout Long Beach, from Belmont Shore to Downtown.',
      neighborhoods: ['Belmont Shore', 'Naples', 'Downtown Long Beach', '2nd Street', 'Bixby Knolls'],
      attractions: ['The Pike Outlets', 'Aquarium of the Pacific', 'Belmont Shore', 'Queen Mary'],
      zipCodes: ['90801', '90802', '90803', '90804', '90805', '90806', '90807', '90808', '90810', '90813', '90814', '90815']
    },
    'los-angeles': {
      name: 'Los Angeles',
      population: '4,000,000+',
      deliveryTime: '25-45 minutes',
      description: 'Cannabis delivery across Los Angeles - from Hollywood to Downtown LA.',
      neighborhoods: ['Hollywood', 'Downtown LA', 'Silver Lake', 'Echo Park', 'Koreatown', 'Mid-City'],
      attractions: ['Hollywood Sign', 'Griffith Observatory', 'Walt Disney Concert Hall', 'LA Live'],
      zipCodes: ['90001', '90002', '90003', '90004', '90005', '90006', '90007', '90008', '90010', '90011', '90012', '90013', '90014', '90015', '90016', '90017', '90018', '90019', '90020', '90021', '90023', '90024', '90025', '90026', '90027', '90028', '90029', '90031', '90032', '90033', '90034', '90035', '90036', '90037', '90038', '90039', '90040', '90041', '90042', '90043', '90044', '90045', '90046', '90047', '90048', '90049', '90056', '90057', '90058', '90059', '90061', '90062', '90063', '90064', '90065', '90066', '90067', '90068', '90069', '90070', '90071', '90072', '90073', '90074', '90075', '90076', '90077', '90078', '90079', '90089', '90090', '90095', '90210', '90211', '90212']
    },
    'torrance': {
      name: 'Torrance',
      population: '145,000+',
      deliveryTime: '30-40 minutes',
      description: 'Reliable cannabis delivery service to Torrance and surrounding South Bay areas.',
      neighborhoods: ['Old Torrance', 'South Torrance', 'West Torrance', 'North Torrance'],
      attractions: ['Del Amo Fashion Center', 'Torrance Beach', 'Wilson Park', 'Madrona Marsh'],
      zipCodes: ['90501', '90502', '90503', '90504', '90505']
    },
    'hawthorne': {
      name: 'Hawthorne',
      population: '87,000+',
      deliveryTime: '25-35 minutes',
      description: 'Fast cannabis delivery to Hawthorne, CA with premium product selection.',
      neighborhoods: ['Northeast Hawthorne', 'Southwest Hawthorne', 'Industrial Area'],
      attractions: ['Hawthorne Memorial Center', 'Jim Thorpe Park', 'Beach Boys Historic Landmark'],
      zipCodes: ['90250']
    },
    'inglewood': {
      name: 'Inglewood',
      population: '110,000+',
      deliveryTime: '20-30 minutes',
      description: 'Professional cannabis delivery to Inglewood, home of SoFi Stadium.',
      neighborhoods: ['Downtown Inglewood', 'Morningside Park', 'Inglewood Park'],
      attractions: ['SoFi Stadium', 'The Forum', 'Hollywood Park', 'Randy&apos;s Donuts'],
      zipCodes: ['90301', '90302', '90303', '90304', '90305']
    }
  };

  const currentCity = cityData[city] || {
    name: city?.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'This City',
    population: 'N/A',
    deliveryTime: '20-45 minutes',
    description: `Cannabis delivery service in ${city?.replace('-', ' ')} and surrounding areas.`,
    neighborhoods: [],
    attractions: [],
    zipCodes: []
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-900">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cannabis Delivery in {currentCity.name}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {currentCity.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-red-500 text-white px-4 py-2 rounded-full">
                ⚡ {currentCity.deliveryTime} delivery
              </div>
              <div className="bg-red-500 text-white px-4 py-2 rounded-full">
                🌿 Premium products
              </div>
              <div className="bg-red-500 text-white px-4 py-2 rounded-full">
                ✅ Licensed & legal
              </div>
            </div>
          </div>
        </div>

        {/* Service Overview */}
        <div className="py-16 bg-gray-850">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Why Choose Kravings Club in {currentCity.name}?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">⚡</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Fast Local Delivery</h3>
                      <p className="text-gray-300">
                        We deliver to {currentCity.name} in {currentCity.deliveryTime}, ensuring your products arrive fresh and on time.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">🛡️</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Licensed & Compliant</h3>
                      <p className="text-gray-300">
                        Operating under California license C9-000555-LIC, we ensure all deliveries meet state regulations.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">🌟</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Premium Selection</h3>
                      <p className="text-gray-300">
                        Curated selection of top-shelf flower, edibles, concentrates, and more from trusted California brands.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">🎯</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Discreet Service</h3>
                      <p className="text-gray-300">
                        Professional, discreet delivery service that respects your privacy and follows all local guidelines.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">{currentCity.name} Delivery Info</h3>
                <div className="space-y-4">
                  <div className="flex justify-between py-2 border-b border-gray-700">
                    <span className="text-gray-300">Population Served:</span>
                    <span className="text-white">{currentCity.population}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-700">
                    <span className="text-gray-300">Delivery Time:</span>
                    <span className="text-white">{currentCity.deliveryTime}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-700">
                    <span className="text-gray-300">Business Hours:</span>
                    <span className="text-white">10 AM - 10 PM</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-700">
                    <span className="text-gray-300">Minimum Age:</span>
                    <span className="text-white">21+ (18+ Medical)</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-300">Delivery Fee:</span>
                    <span className="text-green-400">Free</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-white mb-4">Order Requirements</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Valid government-issued ID required</li>
                    <li>• Customer must be present at delivery</li>
                    <li>• Cash, debit, and digital payments accepted</li>
                    <li>• No returns due to state regulations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Neighborhoods & Areas */}
        {currentCity.neighborhoods.length > 0 && (
          <div className="py-16 bg-gray-800">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                We Deliver Throughout {currentCity.name}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentCity.neighborhoods.map((neighborhood, index) => (
                  <div key={index} className="bg-gray-700 rounded-lg p-6 text-center">
                    <h3 className="text-lg font-semibold text-white mb-2">{neighborhood}</h3>
                    <p className="text-gray-300 text-sm">Fast delivery available</p>
                  </div>
                ))}
              </div>
              {currentCity.zipCodes.length > 0 && (
                <div className="mt-8 text-center">
                  <p className="text-gray-400 text-sm">
                    Serving ZIP codes: {currentCity.zipCodes.join(', ')}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Local Attractions */}
        {currentCity.attractions.length > 0 && (
          <div className="py-16 bg-gray-900">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Popular {currentCity.name} Destinations
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {currentCity.attractions.map((attraction, index) => (
                  <div key={index} className="bg-gray-800 rounded-lg p-6 text-center">
                    <div className="w-12 h-12 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-xl">📍</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white">{attraction}</h3>
                  </div>
                ))}
              </div>
              <div className="text-center mt-12">
                <p className="text-gray-300 mb-6">
                  Exploring {currentCity.name}? We deliver to hotels, Airbnbs, and residential addresses throughout the area.
                </p>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition duration-200">
                  Order for Delivery
                </button>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="py-16 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Order in {currentCity.name}?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Browse our full selection of premium cannabis products and get delivery in {currentCity.deliveryTime}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition duration-200">
                Shop Products
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg transition duration-200">
                Call: (213) 531-5291
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}