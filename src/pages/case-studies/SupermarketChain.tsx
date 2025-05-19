import React from 'react';
import SectionTitle from '../../components/SectionTitle';

const SupermarketChain = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <SectionTitle
        title="Leading Supermarket Chain Digital Transformation"
        subtitle="Revolutionizing Retail Operations"
      />
      
      <div className="max-w-4xl mx-auto mt-8 space-y-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
          <p className="text-gray-600 dark:text-gray-300">
            A comprehensive digital transformation initiative for one of East Africa's largest supermarket chains, 
            focusing on modernizing operations and enhancing customer experience through technology integration.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Challenge</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
            <li>Legacy systems causing operational inefficiencies</li>
            <li>Inconsistent inventory management across multiple locations</li>
            <li>Limited digital customer engagement capabilities</li>
            <li>Manual processes slowing down business operations</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Solution</h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-300">
            <p>
              Implemented a comprehensive digital transformation strategy including:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Modern ERP system integration</li>
              <li>Real-time inventory management system</li>
              <li>Customer loyalty program digitization</li>
              <li>Mobile app development for customer engagement</li>
              <li>Staff training and change management programs</li>
            </ul>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <p className="text-4xl font-bold text-primary-600 dark:text-primary-400">30%</p>
              <p className="mt-2">Increase in operational efficiency</p>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <p className="text-4xl font-bold text-primary-600 dark:text-primary-400">25%</p>
              <p className="mt-2">Reduction in inventory costs</p>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <p className="text-4xl font-bold text-primary-600 dark:text-primary-400">40%</p>
              <p className="mt-2">Increase in customer engagement</p>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <p className="text-4xl font-bold text-primary-600 dark:text-primary-400">50%</p>
              <p className="mt-2">Faster order processing</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Client Testimonial</h2>
          <blockquote className="italic text-gray-600 dark:text-gray-300 border-l-4 border-primary-500 pl-4">
            "Nexora's digital transformation expertise has revolutionized our operations. 
            Their comprehensive approach not only modernized our systems but also 
            empowered our staff and enhanced our customer experience significantly."
            <footer className="mt-4 font-semibold">
              - Chief Technology Officer
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default SupermarketChain;