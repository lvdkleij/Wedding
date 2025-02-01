import type { MetaFunction } from '@remix-run/node';
import Hero from '~/features/Hero';
import sharedStyles from '~/styles/shared.module.css';
import InviteMessage from '~/features/InviteMessage';
import Location from '~/features/Location';
import Schedule from '~/features/Schedule';
import TravelAndStay from '~/features/TravelAndStay';
import Rsvp from '~/features/Rsvp';
import Footer from '~/features/Footer';
import DefaultPageLayout from '~/layout/DefaultPageLayout';
import Header from '~/features/Header';

export function links() {
  return [{ rel: 'stylesheet', href: sharedStyles }];
}

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
  return (
    <>
      <DefaultPageLayout>
        <Header />
        <Hero />
        <InviteMessage />
        <Location />
        <Schedule />
        <TravelAndStay />
        <Rsvp />
        <Footer />
      </DefaultPageLayout>
    </>
  );
}
