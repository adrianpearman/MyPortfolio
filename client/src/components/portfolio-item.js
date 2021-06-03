import React, { Fragment } from "react";

const PortfolioItem = props => {
  return (
    <div className="portfolio__item">
      <div className="card portfolio__item-card">
        <div className="card-body">
          <h3 className="card-title emphasize-title">Project: {props.title}</h3>
          <Fragment>
            <div className="portfolio__item-link-container">
              <p className="col">
                <a
                  href={props.liveLink}
                  className="card-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Site
                </a>
              </p>
              <p className="col">
                <a
                  href={props.repoLink}
                  className="card-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repository
                </a>
              </p>
            </div>
            <h4>Project Overview:</h4>
            <p className="card-text">{props.overview}</p>
            <h4>Technologies Used:</h4>
            <ul className="technology-stack">
              {props.stack.map((technology, index) => {
                return <li key={index}>{technology}</li>;
              })}
            </ul>
          </Fragment>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
