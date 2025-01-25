import type { MetaFunction } from '@remix-run/node';
import Hero from '~/features/Hero/Index';

import sharedStyles from '~/styles/shared.module.css';
import ColorChangingPageLayout from '~/layout/ColorChangingPageLayout';
import InviteMessage from '~/features/InviteMessage';
import Location from '~/features/Location';
import Schedule from '~/features/Schedule';
import TravelAndStay from '~/features/TravelAndStay';
import Rsvp from '~/features/Rsvp';
import Footer from '~/features/Footer';

export function links() {
  return [{ rel: 'stylesheet', href: sharedStyles }];
}

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
  return (
    <>
      <ColorChangingPageLayout>
        <Hero />
        <InviteMessage />
        <Location />
        <Schedule />
        <TravelAndStay />
        <Rsvp />
        <Footer />
      </ColorChangingPageLayout>
    </>
  );
}
