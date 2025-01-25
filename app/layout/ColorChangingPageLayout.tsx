import React, { ReactNode } from 'react';

interface DefaultPageLayoutProps {
  children: ReactNode;
}

const DefaultPageLayout: React.FC<DefaultPageLayoutProps> = ({ children }) => {
  return <main className="w-[100vw] block bg-white">{children}</main>;
};

export default DefaultPageLayout;
