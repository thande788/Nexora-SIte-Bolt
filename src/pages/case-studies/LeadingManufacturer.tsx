import React from 'react';
import SectionTitle from '../../components/SectionTitle';

const LeadingManufacturer = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <SectionTitle
        title="Leading Manufacturer Case Study"
        subtitle="Transforming Manufacturing Operations with Digital Innovation"
      />
      
      <div className="max-w-4xl mx-auto mt-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Challenge</h2>
            <p className="text-gray-600 dark:text-gray-300">
              A leading manufacturer faced challenges in optimizing their production processes, 
              reducing operational costs, and maintaining quality standards across multiple facilities.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Solution</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Nexora implemented a comprehensive digital transformation strategy that included:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600 dark:text-gray-300">
              <li>Advanced analytics for production optimization</li>
              <li>IoT sensors for real-time monitoring</li>
              <li>Predictive maintenance systems</li>
              <li>Quality control automation</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Results</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>20% reduction in operational costs</li>
              <li>35% improvement in production efficiency</li>
              <li>50% decrease in maintenance downtime</li>
              <li>15% increase in product quality ratings</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Client Testimonial</h2>
            <blockquote className="italic text-gray-600 dark:text-gray-300 border-l-4 border-primary-500 pl-4">
              "Nexora's digital transformation solutions have revolutionized our manufacturing processes. 
              The results have exceeded our expectations, and we continue to see improvements in efficiency 
              and quality across all our facilities."
            </blockquote>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              - Chief Operations Officer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadingManufacturer;