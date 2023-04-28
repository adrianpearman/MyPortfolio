import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { v4 as uuid } from "uuid";
// Components
import LoadingComponent from "../utils/LoadingComponent";
import PortfolioItem from "./PortfolioItem";

const Portfolio = ({ projects }) => {

  const portfolioData = [
    {
    stack: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "jQuery"
    ],
    _id: "5fd6ab476809c232254a2c5e",
    title: "Trillo",
    photo: "https://picsum.photos/800/600",
    overview: "",
    liveLink: "https://adrianpearman.github.io/Trillo/",
    repoLink: "https://github.com/adrianpearman/Trillo"
    },
    {
    stack: [
    "HTML5",
    "Materialize",
    "JavaScript",
    "React",
    "React-Hook-Form",
    "Node",
    "Express",
    "MongoDB",
    "Helmet"
    ],
    _id: "5fd6ab266809c232254a2c5d",
    title: "Travel Log App",
    photo: "https://picsum.photos/800/600",
    overview: "",
    liveLink: "https://vast-temple-60193.herokuapp.com/",
    repoLink: "https://github.com/adrianpearman/CodingGardenTravelLog_App"
    },
    {
    stack: [
    "HTML5",
    "JavaScript",
    "Sass",
    "Vue.js",
    "Nuxt",
    "Node"
    ],
    _id: "5fd6ab106809c232254a2c5c",
    title: "New Seaton Landing Page",
    photo: "https://picsum.photos/800/600",
    overview: "",
    liveLink: "https://newseaton.com/",
    repoLink: "https://newseaton.com/"
    },
    {
    stack: [
    "HTML5",
    "Materialize",
    "JavaScript",
    "React",
    "React-Router",
    "Node",
    "Express",
    "NoSQL",
    "GoogleOAuth"
    ],
    _id: "5fd6ab046809c232254a2c5b",
    title: "MERN Email Response App",
    photo: "https://picsum.photos/800/600",
    overview: "",
    liveLink: "https://warm-journey-33149.herokuapp.com/",
    repoLink: "https://github.com/adrianpearman/React_Node_EmailApp"
    },
    {
    stack: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "jQuery"
    ],
    _id: "5fd6aaee6809c232254a2c5a",
    title: "Omnifood",
    photo: "https://picsum.photos/800/600",
    overview: "",
    liveLink: "https://adrianpearman.github.io/Omnifood/",
    repoLink: "https://github.com/adrianpearman/Omnifood"
    },
    {
    stack: [
    "HTML5",
    "CSS3",
    "SASS"
    ],
    _id: "5fd6aadc6809c232254a2c59",
    title: "Ventours",
    photo: "https://picsum.photos/800/600",
    overview: "",
    liveLink: "https://adrianpearman.github.io/Ventours/",
    repoLink: "https://github.com/adrianpearman/Ventours"
    },
    {
    stack: [
    "HTML5",
    "Bootstrap",
    "JavaScript",
    "React",
    "React-Router",
    "GraphQL",
    "Node"
    ],
    _id: "5fd6aab56809c232254a2c58",
    title: "SpaceX Rocket Tracker",
    photo: "https://picsum.photos/800/600",
    overview: "",
    liveLink: "https://spacextracker.herokuapp.com/ ",
    repoLink: "https://github.com/adrianpearman/GraphQLReact_TraversyMedia"
    },
    {
    stack: [
    "HTML5",
    "Sass",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "Express.js",
    "Firebase"
    ],
    _id: "5fd6aaa46809c232254a2c57",
    title: "React Expense Tracker",
    photo: "https://picsum.photos/800/600",
    overview: "",
    liveLink: "https://protected-beyond-22981.herokuapp.com/",
    repoLink: "https://github.com/adrianpearman/React-Expense-App"
    },
    {
    stack: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Node"
    ],
    _id: "5fd6aa7e6809c232254a2c56",
    title: "Indecision App",
    photo: "https://picsum.photos/800/600",
    overview: "",
    liveLink: "https://safe-reef-13947.herokuapp.com/",
    repoLink: "https://github.com/adrianpearman/Indecesion-App"
    },
    {
    stack: [
    "HTML5",
    "CSS3",
    "JavaScript"
    ],
    _id: "5fd6aa6b6809c232254a2c55",
    title: "Dice Game",
    photo: "https://picsum.photos/800/600",
    overview: "",
    liveLink: "https://adrianpearman.github.io/DiceGame/",
    repoLink: "https://github.com/adrianpearman/DiceGame"
    },
    {
    stack: [
    "HTML5",
    "CSS3",
    "JavaScript"
    ],
    _id: "5fd6aa4e6809c232254a2c54",
    title: "Budget Application",
    photo: "https://picsum.photos/800/600",
    overview: "",
    liveLink: "https://adrianpearman.github.io/Budget-App/",
    repoLink: "https://github.com/adrianpearman/Budget-App"
    },
    {
    stack: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Node"
    ],
    _id: "5fd6aa376809c232254a2c53",
    title: "Hackernews Clone",
    photo: "https://picsum.photos/800/600",
    overview: "",
    liveLink: "https://shielded-tor-87839.herokuapp.com/",
    repoLink: "https://github.com/adrianpearman/HackerNewsClone"
    },
    {
    stack: [
    "HTML5",
    "Bootstrap",
    "JavaScript",
    "jQuery",
    "Ruby on Rails",
    "PostgreSQL"
    ],
    _id: "5fd6aa046809c232254a2c52",
    title: "Hoptimal",
    photo: "https://picsum.photos/800/600",
    overview: "",
    liveLink: "https://hoptimal.herokuapp.com/",
    repoLink: "https://github.com/adrianpearman/hoptimal"
    }
  ]
  const [ amountOfProjects, setAmountOfProjects ] = useState(5)
  const [ showCaseProjects, setShowCaseProjects ] = useState([])

  useEffect(() => {
    const data = portfolioData.slice(0, amountOfProjects)
    setShowCaseProjects(data)
  }, [projects, amountOfProjects])

  const handleShowMore = () => {
    amountOfProjects + 5 <= projects.length ? setAmountOfProjects(amountOfProjects + 5) : setAmountOfProjects(projects.length)
  }

  const portfolioList = () => {
    return(
      showCaseProjects.map(({title, overview, stack, liveLink, repoLink, photo}) => {
        return (
          <PortfolioItem
            key={uuid()}
            liveLink={liveLink}
            overview={overview}
            photo={photo}
            repoLink={repoLink}
            stack={stack}
            title={title}
          />
        );
      })
    )
  }

  return (
    <section className="portfolio">
    <div className="portfolio_title">
      <h2> Portfolio <span className="emphasize">/</span></h2>
    </div>
    <div className="portfolio_items">
      <ul className="portfolio__container row">
        {projects.length > 0 ? portfolioList() : <LoadingComponent />}
      </ul>
      <button onClick={() => handleShowMore()}>Show More Projects</button>
    </div>
      <hr />
    </section>
  );
};

const mapStateToProps = ({ fetchDataReducer }) => {
  const { projects } = fetchDataReducer;
  return { projects };
};

export default connect(mapStateToProps)(Portfolio);
