import React from 'react';
import DefaultPageSection from '~/layout/DefaultPageSection';
import Todo2 from './Todo2';
import Todo1 from './Todo1';

const Index: React.FC = () => {
  return (
    <DefaultPageSection>
      <Todo1 />
      <Todo2 />
    </DefaultPageSection>
  );
};

export default Index;
