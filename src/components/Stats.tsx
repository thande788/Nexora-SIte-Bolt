import { useState, useEffect, useRef } from 'react';
import { Users, BarChart3, Activity, Award } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
  delay?: number;
}

const StatItem: React.FC<StatItemProps> = ({ 
  icon, 
  value, 
  label, 
  suffix = '', 
  duration = 2000,
  delay = 0
}) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setHasAnimated(true);
            
            let startTime: number;
            const animate = (time: number) => {
              if (!startTime) startTime = time;
              const progress = (time - startTime) / duration;
              
              if (progress < 1) {
                setCount(Math.floor(progress * value));
                requestAnimationFrame(animate);
              } else {
                setCount(value);
              }
            };
            
            requestAnimationFrame(animate);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );
    
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    
    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [value, duration, hasAnimated, delay]);
  
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-soft border-2 border-gray-200 dark:border-gray-600 text-center" ref={counterRef}>
      <div className="mx-auto w-14 h-14 bg-primary-600 dark:bg-primary-500 text-white rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <div className="font-heading text-3xl lg:text-4xl font-bold text-primary-900 dark:text-white mb-2">
        <span className="counter-value">{count}</span>{suffix}
      </div>
      <p className="text-gray-600 dark:text-gray-300">{label}</p>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-stats-pattern opacity-10"></div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-900 dark:text-white mb-4">
            Making a Measurable Impact
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We've helped businesses across East Africa transform their operations and accelerate growth
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatItem 
            icon={<Users size={28} />}
            value={200}
            label="Satisfied Clients"
            suffix="+"
            delay={0}
          />
          <StatItem 
            icon={<BarChart3 size={28} />}
            value={15}
            label="Avg. Operational Savings"
            suffix="%"
            delay={200}
          />
          <StatItem 
            icon={<Activity size={28} />}
            value={90}
            label="Compliance Improvement"
            suffix="%"
            delay={400}
          />
          <StatItem 
            icon={<Award size={28} />}
            value={24}
            label="Industry Awards"
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;