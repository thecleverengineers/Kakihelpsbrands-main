
import { useState, useEffect } from 'react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prevProgress + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-kaki-black">
      <div className="text-center">
        <div className="mb-8 animate-logo-float">
          <img 
            src="/logos/logo-no-bg.png" 
            alt="KAKI Logo" 
            className="h-28 w-auto mx-auto"
          />
        </div>
        
        <div className="w-64 h-1 bg-kaki-grey/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-kaki-white transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <p className="mt-4 text-kaki-grey text-sm font-light tracking-wider">
          LOADING EXCELLENCE
        </p>
      </div>
    </div>
  );
};

export default Preloader;
