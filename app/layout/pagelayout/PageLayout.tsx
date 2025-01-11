// app/components/Layout/PageLayout.tsx
import React, { ReactNode } from 'react';
import styles from '../../styles/shared.module.css';

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return <main className={styles['u-container']}>{children}</main>;
};

export default PageLayout;
