import TeamGrid from '../components/team/TeamGrid';
import SEO from '../components/common/SEO';
import './CollegeTeam.css';

const CollegeTeam = () => {
  // Placeholder data for College team - update with actual college coaches when available
  const collegeCoaches = [
    {
      id: 201,
      name: 'Jessica Martinez',
      title: 'Director',
      credential: 'Former Admissions Officer, Stanford University',
      photo: '/images/team/jessica.jpg',
      schools: [
        { name: 'Stanford University', logo: '/images/logos/Stanford-University.png' },
        { name: 'MIT', logo: '/images/logos/MIT-logo-1024x330.png' }
      ],
    },
    {
      id: 202,
      name: 'David Lee',
      title: 'Director',
      credential: 'Former Admissions Officer, Harvard University',
      photo: '/images/team/david.jpg',
      schools: [
        { name: 'Harvard University', logo: '/images/logos/Harvard-1-1.png' },
        { name: 'Yale University', logo: '/images/logos/Yale-logo-1024x330.png' }
      ],
    },
  ];

  return (
    <>
      <SEO 
        title="College Admissions Team"
        description="Meet our expert college admissions coaches who are former admissions officers from top universities including Harvard, Stanford, MIT, and more."
        keywords="college admissions team, college consultants, former college admissions officers, undergraduate admissions"
        image="/images/team/og-image.jpg"
      />
      <div className="page college-team">
        <div className="container">
          <h1>Our College Team</h1>
          <p className="page-intro">
            Meet our expert coaches who are former admissions officers from top universities.
          </p>
          <TeamGrid coaches={collegeCoaches} />
        </div>
      </div>
    </>
  );
};

export default CollegeTeam;

