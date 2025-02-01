import React, { ReactNode } from 'react';

interface DefaultPageLayoutProps {
  children: ReactNode;
}

const DefaultPageLayout: React.FC<DefaultPageLayoutProps> = ({ children }) => {
  return <main className="w-full min-h-screen relative ">{children}</main>;
};

export default DefaultPageLayout;
