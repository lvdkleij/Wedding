import React, { ReactNode } from 'react';

interface DefaultPageSectionProps {
  children: ReactNode;
}

const DefaultPageSection: React.FC<DefaultPageSectionProps> = ({ children }) => {
  return <section>{children}</section>;
};

export default DefaultPageSection;
