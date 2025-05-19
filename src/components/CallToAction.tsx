import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CallToActionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundImage?: boolean;
}

const CallToAction: FC<CallToActionProps> = ({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  backgroundImage = false
}) => {
  return (
    <section className={`py-16 md:py-24 ${backgroundImage ? 'bg-cover bg-center' : 'bg-gradient-blue dark:bg-gray-900'} relative`}>
      {backgroundImage && (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ 
              backgroundImage: "url('https://images.pexels.com/photos/7163953/pexels-photo-7163953.jpeg?auto=compress&cs=tinysrgb&w=1920')",
              backgroundPosition: '50% 30%',
              filter: 'brightness(0.4)' // Darkened the background image
            }}
          ></div>
          <div className="absolute inset-0 bg-primary-900/90 dark:bg-gray-900/90 z-0"></div>
        </>
      )}
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg">
            {title}
          </h2>
          <p className="text-lg text-white mb-8 max-w-3xl mx-auto drop-shadow-lg">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to={primaryButtonLink} 
              className="btn btn-accent text-white flex items-center justify-center dark:bg-primary-600 dark:hover:bg-primary-700"
            >
              {primaryButtonText}
              <ArrowRight size={18} className="ml-2" />
            </Link>
            
            {secondaryButtonText && secondaryButtonLink && (
              <Link 
                to={secondaryButtonLink} 
                className="btn border-2 border-white text-white hover:bg-white hover:text-primary-900 dark:hover:bg-gray-200 dark:hover:text-gray-900 flex items-center justify-center"
              >
                {secondaryButtonText}
                <ArrowRight size={18} className="ml-2" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;