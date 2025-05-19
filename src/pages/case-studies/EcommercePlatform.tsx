import React from 'react';
import { ShoppingCart, TrendingUp, Users, Clock } from 'lucide-react';

const EcommercePlatform = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Leading E-commerce Platform Transformation
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
          How we helped a major e-commerce platform optimize their operations and increase customer satisfaction
        </p>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <ShoppingCart className="w-12 h-12 text-primary-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">300%</h3>
            <p className="text-gray-600 dark:text-gray-300">Increase in Sales</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <TrendingUp className="w-12 h-12 text-primary-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">45%</h3>
            <p className="text-gray-600 dark:text-gray-300">Improved Conversion Rate</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <Users className="w-12 h-12 text-primary-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">2M+</h3>
            <p className="text-gray-600 dark:text-gray-300">Active Users</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <Clock className="w-12 h-12 text-primary-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">-40%</h3>
            <p className="text-gray-600 dark:text-gray-300">Order Processing Time</p>
          </div>
        </div>

        {/* Challenge */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">The Challenge</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            Our client, a rapidly growing e-commerce platform, faced significant challenges in scaling their operations
            to meet increasing customer demand. Key issues included:
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
            <li>Inefficient order processing leading to delivery delays</li>
            <li>Poor inventory management causing stockouts and overselling</li>
            <li>Customer service bottlenecks resulting in low satisfaction rates</li>
            <li>Legacy systems struggling to handle peak traffic periods</li>
          </ul>
        </div>

        {/* Solution */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Solution</h2>
          <div className="space-y-4">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We implemented a comprehensive digital transformation strategy that included:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Modernizing the technology stack with microservices architecture</li>
              <li>Implementing AI-powered inventory forecasting</li>
              <li>Developing an automated order processing system</li>
              <li>Creating a scalable customer service platform</li>
            </ul>
          </div>
        </div>

        {/* Results */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">The Results</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            The transformation led to significant improvements across all key performance indicators:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Operational Efficiency</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>40% reduction in order processing time</li>
                <li>60% decrease in inventory holding costs</li>
                <li>90% improvement in order accuracy</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Customer Satisfaction</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>95% customer satisfaction rate</li>
                <li>70% reduction in support tickets</li>
                <li>85% increase in repeat customers</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-primary-50 dark:bg-gray-800 p-8 rounded-xl">
          <blockquote className="text-xl italic text-gray-900 dark:text-white">
            "Nexora's transformation of our e-commerce platform exceeded our expectations. Their expertise in digital
            solutions and commitment to our success has been invaluable. We've seen unprecedented growth and
            efficiency improvements since implementing their recommendations."
          </blockquote>
          <p className="mt-4 font-semibold text-gray-900 dark:text-white">- CEO, E-commerce Platform</p>
        </div>
      </div>
    </div>
  );
};

export default EcommercePlatform;