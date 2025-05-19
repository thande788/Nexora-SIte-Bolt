import { FC } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  color: 'primary' | 'accent' | 'green' | 'purple';
  features?: string[];
  benefits?: string[];
}

const ServiceCard: FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  link,
  color = "primary",
  features = [],
  benefits = []
}) => {
  const getColorClasses = () => {
    switch(color) {
      case 'primary':
        return {
          bg: 'bg-primary-50 dark:bg-gray-800',
          text: 'text-primary-600 dark:text-primary-400',
          hover: 'group-hover:bg-primary-600 dark:group-hover:bg-primary-500',
          iconBg: 'bg-primary-100 dark:bg-gray-700',
          border: 'border-primary-200 dark:border-primary-700 hover:border-primary-300 dark:hover:border-primary-500'
        };
      case 'accent':
        return {
          bg: 'bg-orange-50 dark:bg-gray-800',
          text: 'text-accent-600 dark:text-accent-400',
          hover: 'group-hover:bg-accent-600 dark:group-hover:bg-accent-500',
          iconBg: 'bg-orange-100 dark:bg-gray-700',
          border: 'border-orange-200 dark:border-orange-700 hover:border-orange-300 dark:hover:border-orange-500'
        };
      case 'green':
        return {
          bg: 'bg-green-50 dark:bg-gray-800',
          text: 'text-green-600 dark:text-green-400',
          hover: 'group-hover:bg-green-600 dark:group-hover:bg-green-500',
          iconBg: 'bg-green-100 dark:bg-gray-700',
          border: 'border-green-200 dark:border-green-700 hover:border-green-300 dark:hover:border-green-500'
        };
      case 'purple':
        return {
          bg: 'bg-purple-50 dark:bg-gray-800',
          text: 'text-purple-600 dark:text-purple-400',
          hover: 'group-hover:bg-purple-600 dark:group-hover:bg-purple-500',
          iconBg: 'bg-purple-100 dark:bg-gray-700',
          border: 'border-purple-200 dark:border-purple-700 hover:border-purple-300 dark:hover:border-purple-500'
        };
      default:
        return {
          bg: 'bg-primary-50 dark:bg-gray-800',
          text: 'text-primary-600 dark:text-primary-400',
          hover: 'group-hover:bg-primary-600 dark:group-hover:bg-primary-500',
          iconBg: 'bg-primary-100 dark:bg-gray-700',
          border: 'border-primary-200 dark:border-primary-700 hover:border-primary-300 dark:hover:border-primary-500'
        };
    }
  };
  
  const colorClasses = getColorClasses();

  return (
    <div className={`group p-8 rounded-xl ${colorClasses.bg} transition-all duration-300 h-full flex flex-col border-2 ${colorClasses.border}`}>
      <div className={`w-16 h-16 rounded-2xl ${colorClasses.iconBg} ${colorClasses.text} flex items-center justify-center mb-6 ${colorClasses.hover} group-hover:text-white transition-all`}>
        {icon}
      </div>
      
      <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
      
      {features.length > 0 && (
        <div className="mb-6">
          <h4 className="font-heading text-lg font-semibold text-primary-900 dark:text-white mb-3">Key Features</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <ArrowRight size={16} className={`${colorClasses.text} mt-1 mr-2 flex-shrink-0`} />
                <span className="text-gray-600 dark:text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {benefits.length > 0 && (
        <div className="mb-6">
          <h4 className="font-heading text-lg font-semibold text-primary-900 dark:text-white mb-3">Benefits</h4>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <ArrowRight size={16} className={`${colorClasses.text} mt-1 mr-2 flex-shrink-0`} />
                <span className="text-gray-600 dark:text-gray-300">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <Link 
        to={link}
        className={`inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white dark:bg-gray-700 ${colorClasses.text} font-medium hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors mt-auto`}
      >
        Learn More
        <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;