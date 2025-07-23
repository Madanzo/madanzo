'use client';

import { TruckIcon, ClockIcon, ShieldCheckIcon, StarIcon } from '@heroicons/react/24/outline';

export default function DeliveryPromise() {
  const features = [
    {
      icon: TruckIcon,
      title: 'Fast Delivery',
      description: '20-45 minute delivery to your doorstep',
      highlight: 'Average 30 min'
    },
    {
      icon: ClockIcon,
      title: 'Open Daily',
      description: '10:00 AM to 10:00 PM daily, including weekends',
      highlight: '7 days a week'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Licensed & Safe',
      description: 'California licensed delivery (C9-000555-LIC) with secure packaging',
      highlight: 'CA Licensed'
    },
    {
      icon: StarIcon,
      title: 'Top Quality',
      description: 'Premium cannabis products from trusted California brands',
      highlight: '8 categories'
    }
  ];

  return (
    <div className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Why Choose Kravings Club?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We&apos;re committed to providing the fastest, safest, and most convenient cannabis delivery experience in Los Angeles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto group-hover:bg-red-600 transition duration-300">
                  <feature.icon className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">
                  {feature.highlight}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Order?
            </h3>
            <p className="text-white mb-6">
              Get 30% off featured products when you order today! Browse our full selection of premium cannabis.
            </p>
            <button className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-200">
              Start Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}