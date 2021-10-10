import React, { memo, useEffect, useRef, useState } from "react";
import { experiences } from "../../data";
import "./Experience.scss";

const Experience: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [interval, setIntervalTimeout] = useState<NodeJS.Timeout>();
  // const [intervalJump, setIntervalTimeout] = useState<NodeJS.Timeout>();
  const scrollRef = useRef<HTMLDivElement>(null);
  const experience = experiences[selectedIndex];
  const createNewInterval = () => {
    const newInterval = setInterval(() => {
      let newIndex = 0;
      setSelectedIndex((prev) => {
        newIndex = prev >= experiences.length - 1 ? 0 : prev + 1;
        return newIndex;
      });
      const width = scrollRef.current?.scrollWidth;
      if (width) {
        scrollRef.current?.scroll({
          left: (width / experiences.length) * newIndex,
          behavior: "smooth",
        });
      }
    }, 3000);
    setIntervalTimeout(newInterval);
  };
  useEffect(() => {
    createNewInterval();
    return () => {
      if (interval) clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="experience__container">
      <aside>
        <div
          className="aside__bar"
          style={{
            height: `${100 / experiences.length}%`,
            top: `${selectedIndex * (100 / experiences.length)}%`,
          }}
        />
        <div className="aside__buttons" ref={scrollRef}>
          {experiences.map((experience, index) => (
            <button
              onClick={() => {
                setSelectedIndex(index);
                if (interval) clearInterval(interval);
                setIntervalTimeout(setTimeout(createNewInterval, 10000));
              }}
              className={`${index === selectedIndex ? "active" : ""}`}
            >
              {experience.company}
            </button>
          ))}
        </div>
      </aside>
      <article>
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
      </article>
    </div>
  );
};

export default memo(Experience);
