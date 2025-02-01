import React, { ReactNode, useState, useEffect, useRef } from 'react';

interface ColorChangingPageLayoutProps {
  children: ReactNode;
}

const ColorChangingPageLayout: React.FC<ColorChangingPageLayoutProps> = ({ children }) => {
  const [background, setBackground] = useState<string>('rgb(255, 255, 255)');
  const sectionsRef = useRef<HTMLElement[]>([]);

  // Define RGB values for each section
  const sectionColors = [
    [255, 255, 255], // White (Hero)
    [59, 130, 246], // Blue (InviteMessage)
    [234, 179, 8], // Yellow (Location)
    [34, 197, 94], // Green (Schedule)
    [236, 72, 153], // Pink (TravelAndStay)
    [168, 85, 247], // Purple (Rsvp)
    [107, 114, 128], // Gray (Footer)
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Calculate the total height of all sections
      const sectionHeights = sectionsRef.current.map((section) => {
        if (!section) return 0;
        return section.offsetHeight;
      });

      // Find the current section based on scroll position
      let accumulatedHeight = 0;
      let currentSectionIndex = 0;
      let sectionProgress = 0;

      // console.log(scrollBottom, sectionHeights);
      for (let i = 0; i < sectionHeights.length; i++) {
        const sectionHeight = sectionHeights[i];
        if (scrollTop < accumulatedHeight + sectionHeight) {
          currentSectionIndex = i;
          sectionProgress = (scrollTop - accumulatedHeight) / sectionHeight;
          break;
        }
        accumulatedHeight += sectionHeight;
      }

      // Interpolate colours between current and next sections
      const startColor = sectionColors[currentSectionIndex];
      const endColor = sectionColors[currentSectionIndex + 1] || startColor;

      const interpolatedColor = startColor.map((start, index) => {
        const end = endColor[index];
        return Math.round(start + (end - start) * sectionProgress);
      });

      // Update the background colour
      setBackground(`rgb(${interpolatedColor.join(',')})`);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main
      style={{
        background,
      }}
      className="w-full min-h-screen"
    >
      {React.Children.map(children, (child, index) => (
        <section
          ref={(el) => {
            if (el) sectionsRef.current[index] = el;
          }}
        >
          {child}
        </section>
      ))}
    </main>
  );
};

export default ColorChangingPageLayout;
