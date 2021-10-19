import React from "react";
import "./Resume.scss";
import { getSpannedTitle } from "../../utils";
import Footer from "../../components/Footer/Footer";
import { educations, experiences } from "../../data";

const Resume: React.FC = () => {
  return (
    <div className="resume">
      <Footer />
      <main>
        <section className="education">
          <h2 className="tag section-title hasSpans">
            {getSpannedTitle("Education")}
          </h2>
          <div className="tag section" style={{ marginTop: "3rem" }}>
            <ul className="education-list">
              {educations.map((education) => (
                <li className="education-item">
                  <h3>{education.title}</h3>
                  <h4>
                    @
                    <a
                      href={education.url}
                      className="section-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {education.institution}
                    </a>
                  </h4>
                  <p>
                    {education.date} | {education.marks}
                  </p>
                  <p>{education.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="experience" style={{ paddingTop: 0 }}>
          <h2 className="tag section-title hasSpans">
            {getSpannedTitle("Experience")}
          </h2>
          <p className="tag section-subtitle">
            I’ve had the privilege of working at a couple of start-ups and
            organizations. Here a couple of my work experiences in the field of
            development and leadership roles in various fields.
          </p>
          <div className="tag section">
            <ul className="experience-list">
              {experiences.map((experience) => (
                <ol>
                  {experience.roles.map((role) => (
                    <li>
                      <h3>
                        {role.title}
                        <span>
                          @
                          <a
                            href={experience.url}
                            className="section-link"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {experience.company}
                          </a>
                        </span>
                      </h3>
                      <p>
                        {role.date} | {role.type}
                      </p>
                      <ul className="section-list">
                        {role.descriptions.map((description) => (
                          <li>{description}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Resume;
