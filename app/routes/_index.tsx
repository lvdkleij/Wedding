import type { MetaFunction } from '@remix-run/node';
import Footer from '~/features/Footer';
import Hero from '~/features/Hero';
import Schedule from '~/features/schedule/ScheduleFeature';
import Travel from '~/features/travel/TravelFeature';
import WelcomeBanner from '~/features/welcome/WelcomeBanner';
import PageLayout from '~/layout/DefaultPageLayout';
import AboutUs from '~/features/AboutUs';

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
  return (
    <>
      <WelcomeBanner message="Welcome to our wedding website!" />
      <PageLayout>
        <Hero />
        <AboutUs />
        <Schedule />
        <Travel />
        <Footer />
      </PageLayout>
    </>
  );
}
