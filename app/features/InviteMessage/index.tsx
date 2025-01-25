import React from 'react';
import DefaultPageSection from '~/layout/DefaultPageSection';

const Index: React.FC = () => {
  return (
    <DefaultPageSection className="h-screen w-full flex items-center justify-center">
      <div className="w-full flex items-center justify-center">
        <h1 className="text-[length:var(--step-1)] sm:text-[length:var(--step-2)] md:text-[length:var(--step-3)] lg:text-[length:var(--step-4)] w-[80%] sm:w-[75%] md:w-[70%] lg:w-[65%] text-center">
          Hi Amandine and Max, we are Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quia ullam
          tenetur iste eius repellat aliquid sed pariatur, ipsa quis nostrum quam velit in ipsum atque officiis
          molestias. Nesciunt, esse!
        </h1>
      </div>
    </DefaultPageSection>
  );
};

export default Index;
