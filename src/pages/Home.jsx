import Hero from '../components/home/Hero';
import LogoGrid from '../components/home/LogoGrid';
import ValueProps from '../components/home/ValueProps';
import TeamPreview from '../components/home/TeamPreview';
import Testimonials from '../components/home/Testimonials';
import MediaMentions from '../components/home/MediaMentions';
import HowItWorks from '../components/home/HowItWorks';
import FinalCTA from '../components/home/FinalCTA';
import SEO from '../components/common/SEO';
import './Home.css';

const Home = () => {
  return (
    <>
      <SEO 
        title="MBA, Law, and College Admissions Consulting"
        description="Expert admissions consulting from former admissions directors at top schools. Triple your chances of admission with Fortuna."
        keywords="MBA admissions, law school admissions, college admissions, consulting, Fortuna Admissions"
        image="/images/og-image.jpg"
      />
      <div className="home-page">
      <Hero />
      <LogoGrid />
      <ValueProps />
      <TeamPreview />
      <Testimonials />
      <MediaMentions />
      <HowItWorks />
      <FinalCTA />
    </div>
    </>
  );
};

export default Home;
