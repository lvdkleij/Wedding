import React from 'react';
import DefaultPageSection from '~/layout/DefaultPageSection';
import Header from '../Header';

const Index: React.FC = () => {
  return (
    <DefaultPageSection className="h-[300vh] w-full">
      <div className="w-full h-[100vh] overflow-hidden flex flex-col justify-between items-center sticky top-0">
        <Header />
        <div className="w-[80%] text-center">
          <h1 className="text-[4rem] lg:text-[10rem] ">
            <span>We are getting</span> <br /> <span>married</span>
          </h1>
        </div>
      </div>
    </DefaultPageSection>
  );
};

export default Index;
