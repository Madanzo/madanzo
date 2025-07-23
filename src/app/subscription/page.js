'use client';

import { useState } from 'react';
import { CheckIcon, StarIcon } from '@heroicons/react/24/outline';
import Layout from '@/components/layout/Layout';

export default function SubscriptionPage() {
  const [selectedPlan, setSelectedPlan] = useState('premium');

  const plans = [
    {
      id: 'starter',
      name: 'Starter Box',
      price: 75,
      originalPrice: 100,
      savings: 25,
      frequency: 'Monthly',
      features: [
        '3-4 curated products',
        'Mix of flower and edibles',
        'Product education cards',
        'Member-only discounts',
        'Cancel anytime'
      ],
      popular: false
    },
    {
      id: 'premium',
      name: 'Premium Box',
      price: 150,
      originalPrice: 200,
      savings: 50,
      frequency: 'Monthly',
      features: [
        '6-8 premium products',
        'All product categories',
        'Exclusive brand collaborations',
        'First access to new products',
        'Free shipping',
        'Bonus loyalty points (2x)',
        'Cancel anytime'
      ],
      popular: true
    },
    {
      id: 'connoisseur',
      name: 'Connoisseur Box',
      price: 300,
      originalPrice: 400,
      savings: 100,
      frequency: 'Monthly',
      features: [
        '10+ premium products',
        'Limited edition items',
        'Craft cannabis selections',
        'Personal curator recommendations',
        'Priority customer support',
        'Exclusive member events',
        'Triple loyalty points (3x)',
        'Cancel anytime'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: 'Expert Curation',
      description: 'Our cannabis experts hand-select each product based on quality, potency, and customer feedback.',
      icon: '🎯'
    },
    {
      title: 'Discover New Brands',
      description: 'Try products from emerging and established brands you might not find elsewhere.',
      icon: '🔍'
    },
    {
      title: 'Educational Content',
      description: 'Learn about each product with detailed information cards and usage tips.',
      icon: '📚'
    },
    {
      title: 'Member Benefits',
      description: 'Enjoy exclusive discounts, early access, and special member-only perks.',
      icon: '⭐'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-900">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Kravings Club Subscription
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Curated monthly cannabis deliveries featuring the best products from top California brands
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-red-500 text-white px-4 py-2 rounded-full">
                ✓ Hand-picked by experts
              </div>
              <div className="bg-red-500 text-white px-4 py-2 rounded-full">
                ✓ Member-exclusive products
              </div>
              <div className="bg-red-500 text-white px-4 py-2 rounded-full">
                ✓ Cancel anytime
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="py-16 bg-gray-850">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Choose Your Plan</h3>
                <p className="text-gray-300 text-sm">Select the subscription plan that fits your needs and budget</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">We Curate</h3>
                <p className="text-gray-300 text-sm">Our experts hand-pick premium products for your monthly box</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Fast Delivery</h3>
                <p className="text-gray-300 text-sm">Your box arrives at your door within our standard delivery window</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">4</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Enjoy & Learn</h3>
                <p className="text-gray-300 text-sm">Discover new favorites with included product education materials</p>
              </div>
            </div>
          </div>
        </div>

        {/* Subscription Plans */}
        <div className="py-16 bg-gray-800">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Choose Your Plan</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <div key={plan.id} className={`bg-gray-700 rounded-lg p-8 relative ${plan.popular ? 'ring-2 ring-red-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-red-400">${plan.price}</span>
                      <span className="text-gray-400 ml-2">/{plan.frequency.toLowerCase()}</span>
                    </div>
                    <div className="text-sm text-gray-300">
                      <span className="line-through">${plan.originalPrice}</span>
                      <span className="text-green-400 ml-2">Save ${plan.savings}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`w-full py-3 px-6 rounded-lg font-bold transition duration-200 ${
                      selectedPlan === plan.id
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-600 text-gray-300 hover:bg-gray-500'
                    }`}
                  >
                    {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
                  </button>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-200">
                Start My Subscription
              </button>
              <p className="text-gray-400 text-sm mt-4">
                * All subscriptions automatically renew monthly until canceled. Cancel anytime through your account or by contacting us.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-16 bg-gray-900">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Subscribe?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="py-16 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">What Our Members Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-700 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  &quot;The curation is amazing! I&apos;ve discovered so many new brands and products I never would have tried otherwise. The quality is always top-notch.&quot;
                </p>
                <div className="text-sm">
                  <span className="text-white font-medium">Sarah M.</span>
                  <span className="text-gray-400 ml-2">Premium Member since 2023</span>
                </div>
              </div>
              <div className="bg-gray-700 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  &quot;Love the convenience and the surprise element. Each month feels like a gift to myself, and the educational materials help me learn about new products.&quot;
                </p>
                <div className="text-sm">
                  <span className="text-white font-medium">Mike D.</span>
                  <span className="text-gray-400 ml-2">Connoisseur Member since 2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-16 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Subscription FAQ</h2>
            <div className="space-y-6">
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Can I cancel my subscription anytime?</h3>
                <p className="text-gray-300">Yes, you can cancel your subscription at any time through your account dashboard or by contacting our customer service team. No refunds are available for previously billed cycles.</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">When does my subscription renew?</h3>
                <p className="text-gray-300">Subscriptions automatically renew monthly on the same date you first subscribed. You&apos;ll receive an email notification before each renewal.</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Can I customize my box contents?</h3>
                <p className="text-gray-300">Our expert curation is part of the discovery experience, but you can update your preferences in your account to help us better tailor selections to your tastes.</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">What if I&apos;m not satisfied with my box?</h3>
                <p className="text-gray-300">We stand behind our curation quality. If you&apos;re not satisfied with your box, contact us within 14 days and we&apos;ll work to make it right.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}