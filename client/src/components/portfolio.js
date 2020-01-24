import React from "react";
import { connect } from "react-redux";
// Components
import LoadingComponent from "./loading";
import PortfolioItem from "./portfolio-item";

const Portfolio = ({ projects }) => {
  const portfolioList = projects.map((project, index) => {
    return (
      <PortfolioItem
        key={index}
        title={project.title}
        overview={project.overview}
        stack={project.stack}
        liveLink={project.liveLink}
        repoLink={project.repoLink}
      />
    );
  });

  return (
    <div className="portfolio">
      <div className="row mb-3">
        <div className="section__title col">
          <h1>
            Portfolio <span className="emphasize">/</span>
          </h1>
        </div>
      </div>
      <div className="portfolio__container row">
        {projects.length > 0 ? portfolioList : <LoadingComponent />}
      </div>
      <hr />
    </div>
  );
};

const mapStateToProps = state => {
  const { projects } = state;
  return projects;
};

export default connect(mapStateToProps)(Portfolio);
