import TeamGrid from '../components/team/TeamGrid';
import SEO from '../components/common/SEO';
import './LawTeam.css';

const LawTeam = () => {
  // Placeholder data for Law team - update with actual law coaches when available
  const lawCoaches = [
    {
      id: 101,
      name: 'Emily Davis',
      title: 'Director',
      credential: 'Former Admissions Officer, Yale Law School',
      photo: '/images/team/emily.jpg',
      schools: [
        { name: 'Yale Law School', logo: '/images/logos/yale.png' },
        { name: 'Harvard Law School', logo: '/images/logos/harvard.png' }
      ],
    },
    {
      id: 102,
      name: 'Michael Brown',
      title: 'Director',
      credential: 'Former Admissions Officer, Stanford Law School',
      photo: '/images/team/michael.jpg',
      schools: [
        { name: 'Stanford Law School', logo: '/images/logos/stanford.png' },
        { name: 'Columbia Law School', logo: '/images/logos/columbia.png' }
      ],
    },
  ];

  return (
    <>
      <SEO 
        title="Law School Admissions Team"
        description="Meet our expert law school admissions coaches who are former admissions officers from top law schools including Yale, Harvard, Stanford, and more."
        keywords="law school admissions team, law school consultants, former law school admissions officers"
        image="/images/team/og-image.jpg"
      />
      <div className="page law-team">
        <div className="container">
          <h1>Our Law School Team</h1>
          <p className="page-intro">
            Meet our expert coaches who are former admissions officers from top law schools.
          </p>
          <TeamGrid coaches={lawCoaches} />
        </div>
      </div>
    </>
  );
};

export default LawTeam;

