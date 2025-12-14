const SchoolSpecificPrep = ({ schools }) => {
  return (
    <section className="school-specific-prep">
      <div className="container">
        <h2 className="section-title">School-Specific Preparation</h2>
        <div className="schools-grid">
          {schools.map((school, index) => (
            <div key={index} className="school-card">
              <h4>{school.name}</h4>
              <p>{school.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolSpecificPrep;

