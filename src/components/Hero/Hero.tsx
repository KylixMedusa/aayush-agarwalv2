import React, { memo, useEffect, useState } from "react";
import { getSpannedTitle } from "../../utils";
import Button from "../Button/Button";
import "./Hero.scss";

const Hero: React.FC = () => {
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
    <header className="hero--wrapper">
      <div className="hero--container">
        <section>
          <div
            className="hero"
            style={{
              filter: `blur(${scroll / 10 > 50 ? 50 : scroll / 10}px)`,
              pointerEvents: scroll > window.innerHeight / 4 ? "none" : "auto",
            }}
          >
            <h1 className="tag hasBefore">{getSpannedTitle("Hi,")}</h1>
            <h1 className="tag hasAfter">
              {getSpannedTitle("I’m ")}
              <span className="noBounce a">
                A<span aria-hidden>A</span>
              </span>
              {getSpannedTitle("ayush")}
            </h1>
            <h2 className="tag section-title">
              I build things, I am an <span className="outline">Engineer</span>.
            </h2>
            <p className="tag section-subtitle">
              Web Developer, App Developer, Painter, Musician
            </p>
            <div className="button-wrapper">
              <Button
                text="Contact Me"
                url="#contact"
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              />
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
  );
};

export default memo(Hero);
