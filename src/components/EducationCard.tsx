function EducationCard() {
  return (
    <div className="card" style={{ width: "18rem", height: "20rem" }}>
      <div className="card-body">
        <h2 className="card-title">College</h2>
        <a href="https://collegelasalle.lcieducation.com/fr">
          <p className="card-subtitle mb-2 text-muted">
            Lasalle College Montreal
          </p>
        </a>
        <p className="card-subtitle mb-2 text-muted">
          CEGEP - Computer Science Programming
        </p>
        <p className="card-text">2022 - Current</p>
      </div>
    </div>
  );
}

export default EducationCard;
