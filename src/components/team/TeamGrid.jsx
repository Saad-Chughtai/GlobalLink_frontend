import CoachCard from './CoachCard';
import './TeamGrid.css';

const TeamGrid = ({ coaches }) => {
  if (!coaches || coaches.length === 0) {
    return (
      <div className="team-grid-empty">
        <p>No coaches available at this time.</p>
      </div>
    );
  }

  return (
    <div className="team-grid">
      {coaches.map((coach) => (
        <CoachCard key={coach.id || coach.name} coach={coach} />
      ))}
    </div>
  );
};

export default TeamGrid;

