import React from 'react';
import DefaultPageSection from '~/layout/DefaultPageSection';

const Index: React.FC = () => {
  return (
    <DefaultPageSection className={` h-[41vw] min-h-[49rem] max-h-[57rem] flex bg-white py-12 overflow-hidden `}>
      <div className="basis-[50%] shrink-0 lg:basis-[47%] self-start">
        <div className="mx-auto md:max-w-[70rem] grid grid-cols-2 grid-rows-2 h-full gap-x-[--space-xs] ">
          <div className="max-lg:hidden col-span-1 row-start-1 row-end-2">
            <div
              className="w-full -ml-[70%] -mt-12 h-[16rem]"
              style={{
                backgroundImage: `url('/images/SAp_074_0119.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
          <div className="col-span-1 row-start-2 row-end-3">
            <div
              className="ml-auto h-[19rem] max-lg:w-full w-4/6 max-w-[20rem]"
              style={{
                backgroundImage: `url('/images/SAp_020_8854.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
          <div className="col-span-1 row-span-2 flex items-center">
            <div
              className=" w-full h-[32rem]"
              style={{
                backgroundImage: `url('/images/SAp_064_0103.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
        </div>
      </div>

      <div className="grow flex">
        <div className="grow flex items-center z-10">
          <div className="px-12 py-6">
            <div className="-ml-[8rem] mb-12">
              <h1 className="flex flex-col">
                <span className="text-sm mb-2">CELEBRATE WITH US</span>
                <span className="text-5xl">LUCAS & MELISA’S WEDDING</span>
              </h1>
            </div>
            <p className="mb-12">Amandine & Max, we’d love for you to join us in celebrating our marriage!</p>
            <button className="px-8 py-4 border-solid border border-black">Discover the details</button>
          </div>
        </div>
        <div className="basis-[30%] hidden lg:flex items-end -mr-[10%] mb-[10%]">
          <div
            className="h-[32rem] w-full"
            style={{
              backgroundImage: `url('/images/SAp_083_0782.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>
      </div>
    </DefaultPageSection>
  );
};

export default Index;
