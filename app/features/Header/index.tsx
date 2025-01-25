import React from 'react';
import DefaultPageSection from '~/layout/DefaultPageSection';
const Index: React.FC = () => {
  return (
    <DefaultPageSection className="px-[--space-sm-md] lg:px-[--space-xl] mb-[--space-xl] lg:mb-[--space-2xl] pt-[--space-sm] lg:pt-[--space-lg] w-full ">
      <div className="h-[--space-xl] flex justify-between ">
        <div className="text-[length:var(--step-2)] flex items-center">Lucas & Melisa</div>
        <div className="text-[length:var(--step-2)] flex items-center">Menu</div>
      </div>
    </DefaultPageSection>
  );
};

export default Index;
