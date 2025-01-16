import React from 'react';
import DefaultPageSection from '~/layout/DefaultPageSection';

const Index: React.FC = () => {
  return (
    <DefaultPageSection className="flex h-[60rem]">
      <div className="bg-[#fbf7f6] grow"></div>
      <div className="bg-[#f4ebe6] grow"></div>
    </DefaultPageSection>
  );
};

export default Index;
