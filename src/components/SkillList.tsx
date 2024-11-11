import { useState } from "react";

interface SkillListProps {
  title: string;
  skills: string[];
  color: "primary" | "danger" | "success" | "info" | "warning";
}

function SkillList({ title, skills, color }: SkillListProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="hstack gap-3"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className={"text-" + color + " fw-bold"}>{title}</h2>

      {isHovered && (
        <ul className="list-inline ms-auto">
          {skills.map((skill) => (
            <li className="list-inline-item">{skill}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default SkillList;
