import React, { memo } from "react";
import { urlIconMap } from "../../data";
import { IProjects } from "../../interfaces";
import Image from "../Image/Image";
import "./FeaturedProject.scss";

const FeaturedProject: React.FC<IProjects> = ({
  title,
  description,
  techStack,
  image,
  urls,
}) => (
  <div className="featured--project">
    <div className="project--image">
      <Image src={image} aspectRatio="auto" />
    </div>
    <div className="project--content">
      <h3>@{title}</h3>
      <p className="content--div">{description}</p>
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
);

export default memo(FeaturedProject);
