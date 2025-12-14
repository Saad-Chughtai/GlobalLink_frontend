import TeamGrid from '../components/team/TeamGrid';
import { coaches } from '../data/coaches';
import SEO from '../components/common/SEO';
import './MBATeam.css';

const MBATeam = () => {
  // Filter coaches for MBA team (all coaches in the main array are MBA-focused)
  const mbaCoaches = coaches.filter(coach => coach);

  return (
    <>
      <SEO 
        title="MBA Admissions Team"
        description="Meet our expert MBA admissions coaches who are former admissions officers from top business schools including Wharton, Stanford, Harvard, and more."
        keywords="MBA admissions team, MBA consultants, former admissions officers, business school admissions"
        image="/images/team/og-image.jpg"
      />
      <div className="page mba-team">
        <div className="container">
          <h1>Our MBA Team</h1>
          <p className="page-intro">
            Meet our expert coaches who are former admissions officers from top business schools.
          </p>
          <TeamGrid coaches={mbaCoaches} />
        </div>
      </div>
    </>
  );
};

export default MBATeam;

