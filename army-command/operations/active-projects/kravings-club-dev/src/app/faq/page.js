'use client';

import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import Layout from '@/components/layout/Layout';

export default function FAQPage() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      category: "Ordering & Delivery",
      questions: [
        {
          question: "What are your delivery hours?",
          answer: "We deliver from 10 AM to 10 PM daily, including weekends and holidays."
        },
        {
          question: "How long does delivery take?",
          answer: "Our standard delivery window is 20-45 minutes from the time your order is confirmed."
        },
        {
          question: "What is the minimum order amount?",
          answer: "We currently offer free shipping with no minimum order requirement."
        },
        {
          question: "Do you charge delivery fees?",
          answer: "We currently offer free shipping to all our delivery areas."
        },
        {
          question: "What happens if I miss my delivery?",
          answer: "There is a $10 missed delivery fee (waived for first occurrence). You can reschedule with 48 hours advance notice."
        }
      ]
    },
    {
      id: 2,
      category: "Age Verification & Legal",
      questions: [
        {
          question: "What is the minimum age to order?",
          answer: "You must be 21 years or older for recreational cannabis, or 18+ with a valid medical marijuana recommendation."
        },
        {
          question: "What ID do I need for delivery?",
          answer: "You must present a valid government-issued photo ID that matches the name on your order. The customer must be present at delivery."
        },
        {
          question: "Is your service legal?",
          answer: "Yes, we operate under California cannabis license C9-000555-LIC and comply with all state and local regulations."
        }
      ]
    },
    {
      id: 3,
      category: "Products & Quality",
      questions: [
        {
          question: "What types of products do you carry?",
          answer: "We offer flower, edibles, concentrates, pre-rolls, vape cartridges, vape pens, drinks, and accessories from premium brands."
        },
        {
          question: "Are your products lab-tested?",
          answer: "Yes, all our products are lab-tested for potency, pesticides, and contaminants as required by California law."
        },
        {
          question: "Can I return or exchange products?",
          answer: "Due to state regulations, we cannot accept returns or exchanges. However, damaged or incomplete orders can be reported within 14 days."
        }
      ]
    },
    {
      id: 4,
      category: "Payment & Loyalty Program",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept various payment methods including cash, debit cards, and digital payments."
        },
        {
          question: "How does the loyalty program work?",
          answer: "Earn points for every dollar spent. Points can be redeemed for credits toward future purchases. Points expire after 6 months of inactivity."
        },
        {
          question: "How long do I have to use my loyalty credits?",
          answer: "Loyalty credits must be used within 24 hours of redemption."
        },
        {
          question: "Are there taxes on cannabis products?",
          answer: "Yes, all products are subject to cannabis excise taxes, city taxes, and sales taxes as required by law."
        }
      ]
    },
    {
      id: 5,
      category: "Subscription Service",
      questions: [
        {
          question: "How does the subscription service work?",
          answer: "Our monthly subscription boxes feature curated cannabis products delivered automatically until canceled."
        },
        {
          question: "Can I cancel my subscription?",
          answer: "Yes, you can cancel your subscription via email or through our website at any time."
        },
        {
          question: "Can I get a refund for my subscription?",
          answer: "No refunds are available for previously billed subscription cycles."
        }
      ]
    }
  ];

  const toggleFAQ = (categoryId, questionIndex) => {
    const faqKey = `${categoryId}-${questionIndex}`;
    setOpenFAQ(openFAQ === faqKey ? null : faqKey);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-300">Find answers to common questions about our service</p>
          </div>

          <div className="space-y-8">
            {faqs.map((category) => (
              <div key={category.id} className="bg-gray-800 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-red-400 mb-6">{category.category}</h2>
                <div className="space-y-4">
                  {category.questions.map((faq, index) => {
                    const faqKey = `${category.id}-${index}`;
                    const isOpen = openFAQ === faqKey;
                    
                    return (
                      <div key={index} className="border-b border-gray-700 last:border-b-0">
                        <button
                          onClick={() => toggleFAQ(category.id, index)}
                          className="w-full flex justify-between items-center py-4 text-left hover:text-red-400 transition duration-200"
                        >
                          <span className="text-lg font-medium text-white">{faq.question}</span>
                          {isOpen ? (
                            <ChevronUpIcon className="h-5 w-5 text-red-400 flex-shrink-0" />
                          ) : (
                            <ChevronDownIcon className="h-5 w-5 text-gray-400 flex-shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="pb-4">
                            <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-800 rounded-lg p-8 mt-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h3>
            <p className="text-gray-300 mb-6">
              Can&apos;t find what you&apos;re looking for? Our customer service team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+12135315291"
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
              >
                Call: (213) 531-5291
              </a>
              <a
                href="mailto:info@kravings.club"
                className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
              >
                Email: info@kravings.club
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}