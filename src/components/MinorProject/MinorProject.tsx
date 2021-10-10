import React, { memo } from "react";
import { urlIconMap } from "../../data";
import { IProjects } from "../../interfaces";
import Image from "../Image/Image";
import "./MinorProject.scss";

const MinorProject: React.FC<IProjects> = ({
  title,
  description,
  techStack,
  image,
  urls,
}) => (
  <div className="minor--project">
    <div className="project--image">
      <Image src={image} aspectRatio="auto" />
    </div>
    <div className="project--content">
      <div>
        <h3>{title}</h3>
        <p className="content--div">{description}</p>
      </div>
      <div>
        <p className="tech-stack">
          {techStack.map((i) => (
            <span>{i}</span>
          ))}
        </p>
        <div className="project-links">
          {urls.map((url) => (
            <a
              href={url.link}
              aria-label={`${url.type} Link`}
              rel="noopener noreferrer"
              target="_blank"
            >
              {urlIconMap[url.type]}
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default memo(MinorProject);
