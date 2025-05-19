import { FC } from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  position: string;
  company: string;
  image: string;
  rating?: number;
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  quote,
  name,
  position,
  company,
  image,
  rating = 5
}) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-soft border border-gray-100 flex flex-col h-full">
      {/* Rating Stars */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            fill={i < rating ? "#f97316" : "#e5e7eb"}
            stroke="none"
            className={i < rating ? "text-accent-500" : "text-gray-300"}
          />
        ))}
      </div>
      
      {/* Quote */}
      <blockquote className="text-gray-700 mb-6 flex-grow">
        "{quote}"
      </blockquote>
      
      {/* Author */}
      <div className="flex items-center mt-auto">
        <div className="h-12 w-12 rounded-full overflow-hidden mr-4 border-2 border-primary-100">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="font-heading font-medium text-primary-900">{name}</div>
          <div className="text-sm text-gray-600">{position}, {company}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;