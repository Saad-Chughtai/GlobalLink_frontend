import Hero from '../components/home/Hero';
import LogoCarousel from '../components/home/LogoCarousel';
import ValueProps from '../components/home/ValueProps';
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
        title="University Admissions Consulting - Global Link"
        description="Expert university admissions consulting from former admissions directors. Get personalized guidance for your university application journey with Global Link."
        keywords="university admissions, admissions consulting, Global Link Admissions, education consulting, university applications"
        image="/images/og-image.jpg"
      />
      <div className="home-page">
        <Hero />
        <LogoCarousel />
        <ValueProps />
        <Testimonials />
        <MediaMentions />
        <HowItWorks />
        <FinalCTA />
      </div>
    </>
  );
};

export default Home;
