import React from "react";
import { getSpannedTitle } from "../../utils";
import FeaturedProject from "../../components/FeaturedProject/FeaturedProject";
import { featuredProjects, minorProjects } from "../../data";
import Footer from "../../components/Footer/Footer";
import "./Portfolio.scss";
import MinorProject from "../../components/MinorProject/MinorProject";

const Portfolio: React.FC = () => {
  return (
    <div className="portfolio">
      <Footer />
      <main>
        <section className="projects">
          <h2 className="tag section-title hasSpans">
            {getSpannedTitle("Portfolio")}
          </h2>
          <div className="tag section">
            {featuredProjects.map((project) => (
              <FeaturedProject {...project} />
            ))}
            <div className="divider">Other Projects</div>
            <div className="projects__grid">
              {minorProjects.map((project) => (
                <MinorProject {...project} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
