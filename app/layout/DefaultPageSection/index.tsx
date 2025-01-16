import React, { ReactNode } from 'react';

interface DefaultPageSectionProps {
  children?: ReactNode;
  className?: string;
  id?: string;
}

const DefaultPageSection: React.FC<DefaultPageSectionProps> = ({ children, className, id }) => {
  return (
    <section className={className} id={id}>
      {children}
    </section>
  );
};

export default DefaultPageSection;
