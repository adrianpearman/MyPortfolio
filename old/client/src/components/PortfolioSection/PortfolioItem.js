import React from "react";
import { v4 as uuid } from 'uuid';

const PortfolioItem = props => {
  
  const style = {
    backgroundImage: `url(${props.photo})`,
    backgroundSize: "cover",
  }

  return (
    <li className="portfolio__item" style={style}>
      <div className="portfolio__item-container" tabIndex={0}>
        <div className="portfolio__item-header">
          <h3 className="">Project: {props.title}</h3>
        </div>
        <div className="portfolio__item-content">
          <div className="portfolio__item-links">
              <a
                className="card-link"
                href={props.liveLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                Live Site
              </a>
              <a
                className="card-link"
                href={props.repoLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                Repository
            </a>
          </div>
          <h4>Technologies Used:</h4>
          <ul className="portfolio__item-technology">
            {props.stack.map((technology) => {
              return <li key={uuid()}><p>{technology}</p></li>;
            })}
          </ul>
          <h4>Project Overview:</h4>
          <p className="">{props.overview}</p>
        </div>
      </div>
    </li>
  );
};

export default PortfolioItem;
