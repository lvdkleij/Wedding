import React from 'react';
import DefaultPageSection from '~/layout/DefaultPageSection';

const Index: React.FC = () => {
  return (
    <DefaultPageSection className="min-h-screen bg-[#f3eee8] flex flex-column items-center justify-center pt-[10rem] pb-[10rem] relative">
      <div className="text-center flex relative justify-center items-center">
        <div className="text-[6vw] max-w-[85%] sm:text-[4vw] sm:max-w-[80%] lg:text-[3vw] lg:max-w-[60%] leading-[1.4]">
          <h1 className="relative">
            Hi Amandine and Max, we are Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quia ullam
            tenetur iste eius repellat aliquid sed pariatur.
          </h1>
        </div>
      </div>
    </DefaultPageSection>
  );
};

export default Index;
