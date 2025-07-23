'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CalendarIcon, UserIcon, ClockIcon } from '@heroicons/react/24/outline';
import Layout from '@/components/layout/Layout';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'education', name: 'Cannabis Education' },
    { id: 'local', name: 'Local Attractions' },
    { id: 'culture', name: 'Cannabis Culture' },
    { id: 'news', name: 'Industry News' },
    { id: 'guides', name: 'How-To Guides' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "A Guide to Cannabis Strains: Indica vs. Sativa vs. Hybrid",
      excerpt: "Learn about the differences between cannabis strains and how to choose the right one for your needs.",
      category: 'education',
      author: 'Kravings Team',
      date: '2025-01-15',
      readTime: '5 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 2,
      title: "Best Local Spots to Visit in Lynwood After Your Delivery",
      excerpt: "Discover amazing local restaurants, parks, and attractions in Lynwood and surrounding areas.",
      category: 'local',
      author: 'Local Guide',
      date: '2025-01-10',
      readTime: '7 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: "Understanding Cannabis Edibles: Dosage and Effects",
      excerpt: "Everything you need to know about cannabis edibles, including proper dosing and what to expect.",
      category: 'education',
      author: 'Cannabis Expert',
      date: '2025-01-08',
      readTime: '6 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 4,
      title: "The Evolution of Cannabis Culture in California",
      excerpt: "Explore how cannabis culture has evolved in California from prohibition to legalization.",
      category: 'culture',
      author: 'Kravings Team',
      date: '2025-01-05',
      readTime: '8 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 5,
      title: "How to Store Your Cannabis Products Properly",
      excerpt: "Learn the best practices for storing different types of cannabis products to maintain quality and potency.",
      category: 'guides',
      author: 'Product Specialist',
      date: '2025-01-03',
      readTime: '4 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 6,
      title: "Top Cannabis Trends to Watch in 2025",
      excerpt: "Discover the latest trends shaping the cannabis industry and what consumers can expect this year.",
      category: 'news',
      author: 'Industry Analyst',
      date: '2025-01-01',
      readTime: '6 min read',
      image: '/api/placeholder/400/250'
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <Layout>
      <div className="min-h-screen bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Kravings Club Blog</h1>
            <p className="text-xl text-gray-300">Cannabis education, local culture, and industry insights</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          {filteredPosts.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Featured Post</h2>
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="h-64 md:h-full bg-gray-600 flex items-center justify-center">
                      <span className="text-gray-400">Featured Image</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                      <span className="bg-red-500 text-white px-2 py-1 rounded text-xs uppercase">
                        {categories.find(c => c.id === filteredPosts[0].category)?.name}
                      </span>
                      <div className="flex items-center space-x-1">
                        <CalendarIcon className="h-4 w-4" />
                        <span>{new Date(filteredPosts[0].date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ClockIcon className="h-4 w-4" />
                        <span>{filteredPosts[0].readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{filteredPosts[0].title}</h3>
                    <p className="text-gray-300 mb-6">{filteredPosts[0].excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-gray-400">
                        <UserIcon className="h-4 w-4" />
                        <span>{filteredPosts[0].author}</span>
                      </div>
                      <Link 
                        href={`/blog/${filteredPosts[0].id}`}
                        className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded transition duration-200"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-xl hover:transform hover:scale-105 transition duration-300">
                <div className="h-48 bg-gray-600 flex items-center justify-center">
                  <span className="text-gray-400">Post Image</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-xs uppercase">
                      {categories.find(c => c.id === post.category)?.name}
                    </span>
                    <div className="flex items-center space-x-1">
                      <CalendarIcon className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <UserIcon className="h-4 w-4" />
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <Link 
                      href={`/blog/${post.id}`}
                      className="text-red-400 hover:text-red-300 font-medium transition duration-200"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gray-800 rounded-lg p-8 mt-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for the latest cannabis education, local news, and exclusive deals.
            </p>
            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-400"
              />
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-3 rounded-r-lg transition duration-200">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              No spam, unsubscribe at any time. Text &quot;STOP&quot; to opt-out of SMS updates.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}