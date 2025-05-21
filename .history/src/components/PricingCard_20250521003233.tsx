import { FC, ReactNode } from 'react';
import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Feature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  period: string;
  features: Feature[];
  isPopular?: boolean;
  ctaText: string;
  color?: 'primary' | 'accent' | 'green' | 'purple';
  onClick?: () => void;
  disabled?: boolean;
  ctaAsLink?: boolean; // If true, CTA is a Link, else a button
  ctaTo?: string;      // If ctaAsLink, this is the link target
  ctaIcon?: ReactNode; // Optional icon for CTA
}

const PricingCard: FC<PricingCardProps> = ({
  title,
  description,
  price,
  period,
  features,
  isPopular = false,
  ctaText,
  color = 'primary',
  onClick,
  disabled = false,
  ctaAsLink = false,
  ctaTo = "/contact",
  ctaIcon,
}) => {
  const colorClasses = {
    primary: {
      button: 'bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800',
      border: isPopular ? 'border-primary-600 dark:border-primary-500' : '',
      badge: 'bg-primary-600 dark:bg-primary-500',
    },
    accent: {
      button: 'bg-accent-500 hover:bg-accent-600 focus:ring-accent-300 dark:bg-accent-600 dark:hover:bg-accent-700 dark:focus:ring-accent-800',
      border: isPopular ? 'border-accent-500 dark:border-accent-400' : '',
      badge: 'bg-accent-500 dark:bg-accent-400',
    },
    green: {
      button: 'bg-green-600 hover:bg-green-700 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800',
      border: isPopular ? 'border-green-600 dark:border-green-500' : '',
      badge: 'bg-green-600 dark:bg-green-500',
    },
    purple: {
      button: 'bg-purple-600 hover:bg-purple-700 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800',
      border: isPopular ? 'border-purple-600 dark:border-purple-500' : '',
      badge: 'bg-purple-600 dark:bg-purple-500',
    },
  };

  return (
    <div
      className={`relative h-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 flex flex-col shadow-soft ${
        isPopular 
          ? `border-2 ${colorClasses[color].border}` 
          : 'border border-gray-100 dark:border-gray-700'
      }`}
    >
      {isPopular && (
        <div
          className={`absolute top-0 right-0 ${colorClasses[color].badge} text-white text-xs font-bold px-3 py-1 transform translate-x-3 -translate-y-1`}
        >
          Popular
        </div>
      )}

      <div className="p-6 md:p-8 flex-grow">
        <h3 className="font-heading text-2xl font-bold text-primary-900 dark:text-white mb-3">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>

        <div className="mb-6">
          <div className="flex items-end">
            <span className="font-heading text-4xl font-bold text-primary-900 dark:text-white">
              {price}
            </span>
            <span className="text-gray-500 dark:text-gray-400 ml-2">/{period}</span>
          </div>
        </div>

        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              {feature.included ? (
                <Check className="text-green-500 flex-shrink-0 mt-1 mr-3" size={18} />
              ) : (
                <X className="text-gray-400 dark:text-gray-500 flex-shrink-0 mt-1 mr-3" size={18} />
              )}
              <span
                className={`${
                  feature.included 
                    ? 'text-gray-700 dark:text-gray-200' 
                    : 'text-gray-500 dark:text-gray-400 line-through'
                }`}
              >
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 md:px-8 pt-0 md:pb-8">
        {ctaAsLink ? (
          <Link
            to={ctaTo}
            className={`w-full block text-center py-3 px-4 rounded-lg text-white font-medium transition-all focus:outline-none focus:ring-4 ${colorClasses[color].button} ${disabled ? "opacity-60 pointer-events-none" : ""}`}
            tabIndex={disabled ? -1 : 0}
            aria-disabled={disabled}
          >
            {ctaIcon} {ctaText}
          </Link>
        ) : (
          <button
            type="button"
            className={`w-full block text-center py-3 px-4 rounded-lg text-white font-medium transition-all focus:outline-none focus:ring-4 ${colorClasses[color].button} ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}
            onClick={onClick}
            disabled={disabled}
          >
            {ctaIcon} {ctaText}
          </button>
        )}
      </div>
    </div>
  );
};

export default PricingCard;