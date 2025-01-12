import React, { ReactNode } from 'react';

interface DefaultPageLayoutProps {
  children: ReactNode;
}

const DefaultPageLayout: React.FC<DefaultPageLayoutProps> = ({ children }) => {
  return <main>{children}</main>;
};

export default DefaultPageLayout;
