import Hero from '../components/home/Hero';
import LogoCarousel from '../components/home/LogoCarousel';
import ServicesCards from '../components/home/ServicesCards';
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
        description="Expert admissions consulting from former admissions directors at top schools. Triple your chances of admission with Global Link."
        keywords="MBA admissions, law school admissions, college admissions, consulting, Global Link Admissions"
        image="/images/og-image.jpg"
      />
      <div className="home-page">
        <Hero />
        <LogoCarousel />
        <ServicesCards />
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
