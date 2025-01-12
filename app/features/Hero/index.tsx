import React from 'react';
import DefaultPageSection from '~/layout/DefaultPageSection';

const Travel: React.FC = () => {
  return (
    <DefaultPageSection>
      <section id="travel">
        <h2>Travel Options</h2>
        <p>We welcome guests travelling by any means. Below are some options:</p>
        <ul>
          <li>
            <strong>By Car:</strong> Directions and parking information.
          </li>
          <li>
            <strong>By Plane:</strong> Nearest airports and shuttle services.
          </li>
          <li>
            <strong>By Train:</strong> Train station details and local transfers.
          </li>
          <li>
            <strong>By Bike:</strong> Cycling routes and bike parking.
          </li>
          <li>
            <strong>On Foot:</strong> Walking directions from nearby landmarks.
          </li>
        </ul>
      </section>
    </DefaultPageSection>
  );
};

export default Travel;
