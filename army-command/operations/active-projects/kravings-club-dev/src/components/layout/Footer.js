'use client';

import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Footer() {

  const quickLinks = [
    { name: 'Products', href: '/products' },
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' }
  ];

  const legalLinks = [
    { name: 'Legal Information', href: '/legal' },
    { name: 'Terms & Privacy', href: '/legal' },
    { name: 'Delivery Policy', href: '/legal' },
    { name: 'Compliance', href: '/legal' }
  ];

  const productCategories = [
    { name: 'Flower', href: '/products/flower' },
    { name: 'Edibles', href: '/products/edibles' },
    { name: 'Vapes', href: '/products/vapes' },
    { name: 'Concentrates', href: '/products/concentrates' }
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-red-500 mb-4">Kravings Club</h3>
            <p className="text-gray-300 mb-4">
              Jaw-dropping Cannabis Deals Delivered. Premium cannabis products delivered 
              directly to your door in 20-45 minutes.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center text-gray-300">
                <MapPinIcon className="h-4 w-4 mr-2" />
                <span>Southern California Delivery</span>
              </div>
              <div className="flex items-center text-gray-300">
                <PhoneIcon className="h-4 w-4 mr-2" />
                <span>+1 (213) 531-5291</span>
              </div>
              <div className="flex items-center text-gray-300">
                <EnvelopeIcon className="h-4 w-4 mr-2" />
                <span>info@kravings.club</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-red-500 transition duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {productCategories.map((category) => (
                <li key={category.name}>
                  <a
                    href={category.href}
                    className="text-gray-300 hover:text-red-500 transition duration-200"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Policies */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-red-500 transition duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Business Hours & Service Info */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h5 className="font-semibold text-white mb-2">Business Hours</h5>
              <div className="text-gray-300 text-sm">
                <p>Daily: 10:00 AM - 10:00 PM</p>
                <p>Including Weekends</p>
                <p>& Holidays</p>
              </div>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-2">Delivery Info</h5>
              <div className="text-gray-300 text-sm">
                <p>Delivery Time: 20-45 minutes</p>
                <p>Free Shipping Currently</p>
                <p>Licensed Courier Delivery</p>
              </div>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-2">License Info</h5>
              <div className="text-gray-300 text-sm">
                <p>License: C9-000555-LIC</p>
                <p>Adults 21+ Only</p>
                <p>Valid ID Required</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2022 Kravings Club LLC. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Follow us:</span>
              <a
                href="https://instagram.com/kravings_la"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition duration-200"
              >
                Instagram
              </a>
              <a
                href="https://x.com/Kravings_LA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition duration-200"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Compliance Notice */}
        <div className="mt-8 p-4 bg-gray-900 rounded-lg">
          <p className="text-gray-400 text-xs text-center">
            <strong>Important:</strong> This website is intended for adults 21 years of age or older. 
            Cannabis products have not been evaluated by the FDA and are not intended to diagnose, 
            treat, cure or prevent any disease. Keep out of reach of children and pets.
          </p>
        </div>
      </div>
    </footer>
  );
}