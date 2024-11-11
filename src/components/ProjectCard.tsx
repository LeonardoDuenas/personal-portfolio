import "../styles/ProjectCard.css";
import githubIcon from "../icons/github.svg";
import { useState } from "react";

interface ProjectProps {
  name: string;
  technology: string;
  description: string;
  link: string;
}

function Projects({ name, technology, description, link }: ProjectProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="container">
      <div
        className="card-square-container vstack"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <p className="font-monospace" style={{ padding: "5px" }}>
          {name} -<small> {technology}</small>
        </p>
        <p style={{ fontSize: "12px", padding: "5px" }}>{description}</p>

        <div className={isHovered ? "visible" : "hidden"}>
          <a
            className={"btn btn-success github-button"}
            href={link}
            role="button"
          >
            Check it out on Github{" "}
            <img
              src={githubIcon}
              alt="github"
              width="20"
              height="20"
              className="githubIcon"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
