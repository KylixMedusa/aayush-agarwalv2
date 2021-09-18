import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import Image from "../../components/Image/Image";
import profileImage from "../../assets/images/aayush.jpeg";
import { getSpannedTitle } from "../../utils";
import "./Home.scss";
import Experience from "../../components/Experience/Experience";
import Footer from "../../components/Footer/Footer";

const Home: React.FC = () => {
  const [scroll, setScroll] = useState(0);
  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="home">
      <header className="hero--wrapper">
        <div className="hero--container">
          <section>
            <div
              className="hero"
              style={{
                filter: `blur(${scroll / 10 > 50 ? 50 : scroll / 10}px)`,
                pointerEvents:
                  scroll > window.innerHeight / 4 ? "none" : "auto",
              }}
            >
              <h1 className="tag hasBefore">{getSpannedTitle("Hi,")}</h1>
              <h1 className="tag hasAfter">{getSpannedTitle("I’m Aayush")}</h1>
              <h2 className="tag section-title">
                I build things, I am an{" "}
                <span className="outline">Engineer</span>.
              </h2>
              <p className="tag section-subtitle">
                Web Developer, App Developer, Painter, Musician
              </p>
              <div className="button-wrapper">
                <Button text="Contact Me" />
              </div>
            </div>
          </section>

          <div className="center__ChevronElement">
            <div className="chevron"></div>
            <div className="chevron"></div>
            <div className="chevron"></div>
            <span className="text">Scroll down</span>
          </div>
        </div>
      </header>
      <Footer />
      <main className="content--wrapper">
        <section className="skills">
          <h2 className="tag section-title hasSpans">
            {getSpannedTitle("Me, Myself and I")}
          </h2>
          <div className="grid">
            <p className="tag section-subtitle">
              <p style={{ marginBottom: "1rem" }}>
                Hello! My name is Aayush Agarwal and I enjoy creating things
                using various technologies. My interest in web development
                started back in 2020 when I decided to build my first{" "}
                <a
                  href="https://kylixmedusa.github.io/"
                  className="section-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  portfolio website
                </a>{" "}
                taught me a lot about HTML & CSS!
              </p>
              <p style={{ marginBottom: "1rem" }}>
                Fast-forward to today, and I’ve had the privilege of working at
                a couple of start-ups and organizations. My main focus these
                days is building products in web and app at{" "}
                <a
                  href="https://tagmango.com"
                  className="section-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  TagMango
                </a>{" "}
                for the creators.
              </p>
              <p style={{ marginBottom: "1rem" }}>
                I also freelance for both web and app and gradually planning to
                learn native Android and iOS development.
              </p>
              <p style={{ marginBottom: "1rem" }}>
                Here are a few technologies I’ve been working with recently:
              </p>
              <ul className="section-list skills-list">
                <li>JavaScript (ES6+)</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>React Native</li>
                <li>Angular</li>
                <li>Flutter</li>
                <li>HTML/CSS</li>
                <li>NodeJS</li>
              </ul>
            </p>
            <div>
              <div className="profile-image">
                <Image src={profileImage} alt="Profile" />
              </div>
            </div>
          </div>
        </section>
        <section className="experience">
          <h2 className="tag section-title hasSpans">
            {getSpannedTitle("Experience")}
          </h2>
          <div className="flex-sb">
            <p className="tag section-subtitle">
              I’ve had the privilege of working at a couple of start-ups and
              organizations. Here a couple of my work experiences in the field
              of development and leadership roles in various fields. For full
              resume visit my{" "}
              <a href="/work" className="section-link">
                resume
              </a>{" "}
              page.
            </p>
            <Button
              onClick={() => {}}
              text="View Resume"
              style={{ marginTop: "1rem" }}
            />
          </div>
          <div className="tag section">
            <Experience />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
