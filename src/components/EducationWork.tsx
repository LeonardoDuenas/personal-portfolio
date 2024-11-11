import EducationCard from "./EducationCard";
import WorkCard from "./WorkCard";
import DownloadCV from "./DownloadCV";

function EducationWork() {
  return (
    <div className="container">
      <h1 className="display-5" id="experience-section">
        Experiences
      </h1>
      <div className="hstack gap-3">
        <EducationCard />
        <WorkCard
          position="hotel receptionist"
          company="Hotel Sueños del Inka"
          link="https://www.suenosdelinka.com/"
          date="2022 - 2022"
        />
        <WorkCard
          position="freelance web developer"
          company="Hotel Sueños del Inka"
          link="https://www.suenosdelinka.com/"
          date="2024 - current"
        />
      </div>
      <div className="d-flex flex-row hstack">
        <h3 className="mt-4">More details? Get my CV</h3>
        <DownloadCV />
      </div>
    </div>
  );
}

export default EducationWork;
