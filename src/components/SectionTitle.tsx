import { FC, ReactNode } from 'react';

interface SectionTitleProps {
  pretitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  children?: ReactNode;
  light?: boolean;
}

const SectionTitle: FC<SectionTitleProps> = ({ 
  pretitle, 
  title, 
  description, 
  centered = false,
  light = false,
  children 
}) => {
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} mb-12`}>
      {pretitle && (
        <div className="mb-3">
          <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
            light 
              ? 'bg-white/20 text-white' 
              : 'bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400'
          }`}>
            {pretitle}
          </span>
        </div>
      )}
      <h2 className={`font-heading font-bold text-3xl md:text-4xl mb-4 ${
        light 
          ? 'text-white' 
          : 'text-primary-900 dark:text-white'
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg ${
          light 
            ? 'text-gray-200' 
            : 'text-gray-600 dark:text-gray-300'
        }`}>
          {description}
        </p>
      )}
      {children}
    </div>
  );
};

export default SectionTitle;