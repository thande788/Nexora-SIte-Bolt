import React from 'react';
import SectionTitle from '../../components/SectionTitle';

const FashionRetail = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <SectionTitle
        title="Fashion Retail Transformation"
        subtitle="Digital Transformation in Fashion Retail"
      />
      
      <div className="max-w-4xl mx-auto mt-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
            Challenge
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            A leading fashion retailer faced challenges in inventory management, customer experience, 
            and omnichannel presence. They needed to modernize their operations while maintaining 
            their brand identity and customer loyalty.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
            Solution
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Nexora implemented a comprehensive digital transformation strategy:
          </p>
          <ul className="list-disc list-inside mb-8 text-gray-600 dark:text-gray-300 space-y-2">
            <li>Integrated inventory management system across online and physical stores</li>
            <li>AI-powered demand forecasting and trend analysis</li>
            <li>Enhanced customer experience through personalized recommendations</li>
            <li>Streamlined supply chain operations</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
            Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <p className="text-4xl font-bold text-primary-600 dark:text-primary-400">30%</p>
              <p className="text-gray-600 dark:text-gray-300">Increase in inventory turnover</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <p className="text-4xl font-bold text-primary-600 dark:text-primary-400">25%</p>
              <p className="text-gray-600 dark:text-gray-300">Growth in online sales</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <p className="text-4xl font-bold text-primary-600 dark:text-primary-400">40%</p>
              <p className="text-gray-600 dark:text-gray-300">Reduction in stockouts</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <p className="text-4xl font-bold text-primary-600 dark:text-primary-400">95%</p>
              <p className="text-gray-600 dark:text-gray-300">Customer satisfaction rate</p>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              Client Testimonial
            </h3>
            <blockquote className="italic text-gray-600 dark:text-gray-300">
              "Nexora's transformation of our retail operations has been revolutionary. 
              Their expertise in both technology and retail helped us achieve results 
              beyond our expectations."
            </blockquote>
            <p className="mt-4 font-medium text-gray-700 dark:text-gray-200">
              - Chief Digital Officer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FashionRetail;