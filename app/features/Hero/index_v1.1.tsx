import React from 'react';
import DefaultPageSection from '~/layout/DefaultPageSection';
import sharedStyles from '~/styles/shared.module.css';

export function links() {
  return [{ rel: 'stylesheet', href: sharedStyles }];
}

const Index: React.FC = () => {
  return (
    <DefaultPageSection className="h-[40rem] bg-white md:px-[--space-lg] xl:px-[--space-xl]">
      <div className="flex flex-col-reverse md:flex-row mx-auto max-w-[1228px] h-full">
        <div className="basis-1/2 grow flex flex-col justify-center ">
          <h1 className="uppercase">Come for the wedding, stay for the cake</h1>
          <h1 className={`${sharedStyles['font-heading-1']} mb-[--space-sm] -mr-[--space-xl] uppercase`}>
            Celebrate our unforgettable wedding!
          </h1>
          <p className={`${sharedStyles['font-body']}`}>
            Amandine & Max, it wouldn’t be the same without you, so pop on your best outfit and join us for a proper
            knees-up. We can’t wait to celebrate with you!
          </p>
        </div>
        <div className="basis-1/2 grow relative md:ml-[--space-2xl] lg:ml-[--space-3xl]">
          <div className="absolute w-full h-[25rem]">
            <div className="relative w-full h-[10rem] md:h-full">
              <div className="absolute bg-black z-2 w-full h-full opacity-5"></div>
              <div className="z-1 w-full h-full bg-cover bg-center bg-no-repeat bg-[url(https://bajanwed.s3.us-east-1.amazonaws.com/wp-content/uploads/2019/09/romantic-french-chateau-wedding-inspiration_0441.jpg)]"></div>
            </div>
          </div>
          <div className="absolute w-3/6 h-[20rem] bottom-[--space-2xl] -translate-x-1/3">
            <div className="relative w-full h-full">
              <div className="absolute bg-black z-2 w-full h-full opacity-5"></div>
              <div className="z-1 w-full h-full bg-cover bg-center bg-no-repeat bg-[url(https://bajanwed.s3.us-east-1.amazonaws.com/wp-content/uploads/2019/09/romantic-french-chateau-wedding-inspiration_0441.jpg)]"></div>
            </div>
          </div>
        </div>
      </div>
    </DefaultPageSection>
  );
};

export default Index;
