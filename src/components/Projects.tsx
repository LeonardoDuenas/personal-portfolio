import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="container vstack gap-4">
      <h1 className="display-5" id="projects-section">
        Projects
      </h1>
      <div className="hstack">
        <ProjectCard
          name="Project G"
          technology="Love2d Lua"
          description="A 2D game developed using the Love2d framework and Lua programming language"
          link="https://github.com/LeonardoDuenas/Project_G"
        />
        <ProjectCard
          name="Contact Tree"
          technology="C++"
          description="A contact tree data structure developed using C++"
          link="https://github.com/LeonardoDuenas/ContactTreeC-"
        />
        <ProjectCard
          name="FENT Games website"
          technology="HTML, CSS, JavaScript, PHP"
          description="Colaborated on developing a chidren's game website using sql databases and php"
          link="https://github.com/zikail/PrjPhp-FENTGames"
        />
        <ProjectCard
          name="Cinema Reservation System"
          technology="Java"
          description="A cinema system developed using Java and following multiple design patterns"
          link="https://github.com/LeonardoDuenas/Cinema-Reservation-System"
        />
      </div>
      <div className="hstack">
        <ProjectCard
          name="Multitier C# Application"
          technology="C#, .Net"
          description="Multitier architecture application following the ADO.Net model"
          link="https://github.com/LeonardoDuenas/Multitier-C-with-SQL"
        />
        <ProjectCard
          name="MultiWindForms App"
          technology="C#, .Net"
          description="Aplication showcasing multiple functionalities in different Windows Forms"
          link="https://github.com/LeonardoDuenas/MultiWindForms"
        />
        <ProjectCard
          name="Java Database Management"
          technology="Java, JavaSwing, Sqlite3"
          description="A database management system developed using Java and Sqlite3"
          link="https://github.com/LeonardoDuenas/Java-Swing-Form"
        />
        <ProjectCard
          name="Booking Engine Web App"
          technology="HTML, CSS, JavaScript, PHP"
          description="A booking engine web application developed using PHP and JavaScript"
          link="https://github.com/LeonardoDuenas/Hotel-Reserve-Engine"
        />
      </div>
      <div className="hstack">
        <ProjectCard
          name="Personal Portfolio"
          technology="React, TypeScript"
          description="My personal portfolio website"
          link="https://github.com/LeonardoDuenas/personal-portfolio"
        />
      </div>
    </div>
  );
}

export default Projects;
