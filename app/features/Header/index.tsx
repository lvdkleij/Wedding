import React from 'react';
import DefaultPageSection from '~/layout/DefaultPageSection';
const Index: React.FC = () => {
  return (
    <DefaultPageSection className="fixed top-0 left-0 w-full z-10 md:p-[2rem] flex items-center justify-between">
      <div className="grow basis-0 max-w-full relative p-[1rem] w-full">
        <a href="/" className="text-[6.5vw] md:text-[3.5vw] lg:text-[2.5vw] leading-[0.7]">
          Lucas <br /> Melisa
        </a>
      </div>
      <div className="grow basis-0 max-w-full relative w-full p-[1rem] flex items-center justify-end">
        <button className="h-[3rem] cursor-pointer">
          <span className="w-[2.5rem] flex flex-col items-center relative h-[0.8rem] md:h-[1.2rem]">
            <span className="w-full absolute left-0 top-0 h-[2px] bg-black"></span>
            <span className="w-full h-[2px] absolute left-0 bottom-0 bg-black"></span>
          </span>
        </button>
      </div>
    </DefaultPageSection>
  );
};

export default Index;
