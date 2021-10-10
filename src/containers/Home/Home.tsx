import React from "react";
import Button from "../../components/Button/Button";
import Image from "../../components/Image/Image";
import profileImage from "../../assets/images/aayush.jpeg";
import { getSpannedTitle } from "../../utils";
import "./Home.scss";
import Experience from "../../components/Experience/Experience";
import Footer from "../../components/Footer/Footer";
import Map from "../../components/Image/Map";
import ContactForm from "../../components/ContactForm/ContactForm";
import Hero from "../../components/Hero/Hero";
import FeaturedProject from "../../components/FeaturedProject/FeaturedProject";
import { featuredProjects } from "../../data";
import FadeInSection from "../../components/FadeInSection";

const Home: React.FC = () => {
  return (
    <div className="home">
      <Hero />
      <Footer />
      <main className="content--wrapper">
        <FadeInSection className="skills">
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
        </FadeInSection>
        <FadeInSection className="experience">
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
              url="/resume"
              text="View Resume"
              style={{ marginTop: "1rem" }}
            />
          </div>
          <div className="tag section">
            <Experience />
          </div>
        </FadeInSection>
        <FadeInSection className="projects">
          <h2 className="tag section-title hasSpans">
            {getSpannedTitle("Projects")}
          </h2>
          <div className="flex-sb">
            <p className="tag section-subtitle">
              I’ve worked on a couple of projects during my learning process.
              Here a couple of my projects which I feel are note-worthy. For all
              projects visit my{" "}
              <a href="/work" className="section-link">
                portfolio
              </a>{" "}
              page.
            </p>
            <Button
              url="/portfolio"
              text="View Portfolio"
              style={{ marginTop: "1rem" }}
            />
          </div>
          <div className="tag section">
            {featuredProjects.slice(0, 3).map((project) => (
              <FeaturedProject {...project} />
            ))}
            <Button
              url="/portfolio"
              text="View All Projects"
              style={{
                marginTop: "3rem",
              }}
            />
          </div>
        </FadeInSection>
        <FadeInSection className="contact" id="contact">
          <h2 className="tag section-title hasSpans">
            {getSpannedTitle("Get in touch")}
          </h2>
          <div className="tag form">
            <div className="contact--grid">
              <ContactForm />
              <div className="contact--content">
                <div className="map--wrapper">
                  <Map />
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </main>
    </div>
  );
};

export default Home;
