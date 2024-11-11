interface WorkCardProps {
  position: string;
  company: string;
  link: string;
  date: string;
}

function WorkCard({ position, company, link, date }: WorkCardProps) {
  return (
    <div className="card" style={{ width: "18rem", height: "20rem" }}>
      <div className="card-body">
        <h2 className="card-title">Work</h2>
        <a href={link}>
          <p className="card-subtitle mb-2 text-muted">{company}</p>
        </a>
        <p className="card-subtitle mb-2 text-muted">{position}</p>
        <p className="card-text">{date}</p>
      </div>
    </div>
  );
}

export default WorkCard;
