const FounderCard = ({ name, title, bio, image, achievements }) => {
  return (
    <div className="founder-card">
      {image && <img src={image} alt={name} className="founder-image" />}
      <div className="founder-info">
        <h2>{name}</h2>
        <p className="founder-title">{title}</p>
        <p className="founder-bio">{bio}</p>
        {achievements && (
          <ul className="founder-achievements">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FounderCard;

