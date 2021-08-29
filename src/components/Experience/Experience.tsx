import React, { memo, useEffect, useRef, useState } from "react";
import "./Experience.scss";

const experiences = [
  {
    company: "TagMango",
    url: "https://tagmango.com/",
    roles: [
      {
        title: "Software Developer",
        date: "Jul 2021 - Present",
        type: "Internship",
        descriptions: [
          "Working on React Native App for developing UI, integrating REST API.",
          "Working on web using React for replicating high fidelity designs and integrating logic with backend integration with REST API.",
        ],
      },
    ],
  },
  {
    company: "Google DSC",
    url: "https://dsck.in/",
    roles: [
      {
        title: "Lead",
        date: "Aug 2020 - Nov 2020",
        type: "KGEC",
        descriptions: [
          "Lead the google developer students club in our college.",
          "Developing projects for the community.",
          "Organize events, take part in community work and facilitate development culture within our college.",
        ],
      },
      {
        title: "Web Development Lead",
        date: "Aug 2020 - Nov 2020",
        type: "KGEC",
        descriptions: [
          "Work and lead team for web projects, websites and give tutorials and seminars on web development.",
          "Organize events, take part in community work and facilitate development culture within our college.",
        ],
      },
    ],
  },
  {
    company: "MindWebs",
    url: "https://mwv.net.in/",
    roles: [
      {
        title: "Software Developer, UI/UX Designer",
        date: "Jul 2020 - Present",
        type: "Part Time",
        descriptions: [
          "Developing and ideating several products in MERN and MEAN stacks for Mindwebs as well as other companies.",
          "Working on client project on web and app(using Flutter).",
          "Participated in organizing Hacktoberfest-2020.",
        ],
      },
      {
        title: "Full Stack Developer",
        date: "May 2020 - Jul 2020",
        type: "Internship",
        descriptions: [
          "Developing several products in MEAN stacks.",
          "Participated in Hackathon to make an event management app.",
          "Made a project to integrate machine learning models into web.",
        ],
      },
    ],
  },
  {
    company: "Topleap",
    url: "https://topleap.co/",
    roles: [
      {
        title: "Software Developer",
        date: "Dec 2021 - Mar 2021",
        type: "Internship",
        descriptions: [
          "Frontend developer- Wrote code for resume building app in React framework.",
          "Built blogs sections and web pages for product demonstration.",
          "Worked on a resume building app using Flutter with referral and profile sections.",
          "Participated in deploying it in Google App Engine.",
        ],
      },
    ],
  },
  {
    company: "Triveous",
    url: "https://triveous.com/",
    roles: [
      {
        title: "Software Developer",
        date: "Aug 2020 - Nov 2020",
        type: "Internship",
        descriptions: [
          "Developing the web app in React. Integrating Firebase Cloud Messaging(FCM) to get real time notifications.",
          "Developing Chrome extensions for the same.",
          "Developing algorithms for the product( highlights, notes etc.)",
        ],
      },
    ],
  },
  {
    company: "Shutterbug",
    url: "https://shutterbugkgec.in/",
    roles: [
      {
        title: "Graphic Designer",
        date: "Nov 2019 - Present",
        type: "KGEC",
        descriptions: [
          "Designing posters on national holidays , making templates for events, logo designs, cover page designs etc.",
          "Taking part in group activities with organizing events.",
        ],
      },
    ],
  },
];

const Experience: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [interval, setIntervalTimeout] = useState<NodeJS.Timeout>();
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
                setTimeout(createNewInterval, 10000);
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
