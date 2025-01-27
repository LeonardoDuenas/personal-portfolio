import SkillList from "./SkillList";

function Skills() {
  return (
    <div className="container">
      <h1 className="display-5" id="skills-section">
        Skills and Technologies
      </h1>
      <SkillList
        title="Programming Languages"
        skills={["Java", "Python", "JavaScript", "TypeScript", "C#"]}
        color="primary"
      />
      <SkillList
        title="Web Developement"
        skills={["HTML", "CSS", "PHP", "DJango", "React", "NodeJs"]}
        color="info"
      />
      <SkillList
        title="Mobile Development"
        skills={["Android Studio", "IOS", "Swift"]}
        color="success"
      />
      <SkillList
        title="Database Management"
        skills={[
          "SQLite",
          "Oracle",
          "MongoDB",
          "Microsoft SQL Server",
          "Firebase",
        ]}
        color="warning"
      />
      <SkillList
        title="Tools and Technologies"
        skills={["Agile", "Github", "Vite", "Linux", "APIs"]}
        color="danger"
      />
    </div>
  );
}
export default Skills;
