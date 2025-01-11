import React, { useState, useEffect } from 'react';

interface WelcomeBannerProps {
  message: string;
}

const WelcomeBanner: React.FC<WelcomeBannerProps> = ({ message }) => {
  const [isVisible, setIsVisible] = useState(true); // For showing/hiding the banner
  const [isRendered, setIsRendered] = useState(true); // For keeping the banner in the DOM

  const delay = 2000;
  const transitionDuration = 1000;

  useEffect(() => {
    // Start hiding the banner after the delay
    const timer = setTimeout(() => {
      setIsVisible(false); // Trigger slide-up animation
      // Remove from DOM after the animation ends
      setTimeout(() => setIsRendered(false), transitionDuration);
    }, delay);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [delay, transitionDuration]);

  // If not rendered, return null (removes from DOM)
  if (!isRendered) {
    return null;
  }

  return (
    <div
      className={`fixed top-0 left-0 right-0 h-screen flex items-center justify-center bg-red-100 text-red-800 font-bold text-2xl z-50 transition-transform duration-[${transitionDuration}ms] ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      role="alert"
    >
      {message}
    </div>
  );
};

export default WelcomeBanner;
