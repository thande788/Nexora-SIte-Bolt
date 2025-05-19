import { FC, ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard: FC<FeatureCardProps> = ({ icon, title, description, delay = 0 }) => {
  return (
    <div 
      className={`fade-in bg-white dark:bg-gray-800 rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border-2 border-gray-200 dark:border-gray-600 hover:border-primary-300 dark:hover:border-primary-500 hover:-translate-y-1 group`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-14 h-14 mb-5 rounded-full flex items-center justify-center bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 group-hover:bg-primary-600 dark:group-hover:bg-primary-500 group-hover:text-white transition-colors">
          {icon}
        </div>
        <h3 className="font-heading font-semibold text-xl mb-3 text-primary-900 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;