import PropTypes from 'prop-types';
import './CoachCard.css';

const CoachCard = ({ coach }) => {
  // Defensive check for undefined coach
  if (!coach) {
    return null;
  }

  return (
    <div className="coach-card">
      <div className="coach-photo-wrapper">
        <img
          src={coach.photo || '/images/team/placeholder.jpg'}
          alt={coach.name || 'Coach'}
          className="coach-photo"
          loading="lazy"
        />
      </div>
      <div className="coach-info">
        <h3 className="coach-name">{coach.name || 'Coach'}</h3>
        <p className="coach-title">{coach.title || ''}</p>
        <p className="coach-credential">{coach.credential || ''}</p>
        {coach.schools && coach.schools.length > 0 && (
          <div className="coach-schools">
            {coach.schools.map((school, index) => (
              <img
                key={index}
                src={school.logo || '/images/logos/placeholder.png'}
                alt={school.name || 'School'}
                className="school-badge"
                title={school.name || 'School'}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

CoachCard.propTypes = {
  coach: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    credential: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    schools: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        logo: PropTypes.string.isRequired,
      })
    ),
    isFeatured: PropTypes.bool,
  }).isRequired,
};

export default CoachCard;
