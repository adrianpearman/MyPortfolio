import React, { Component } from 'react'
import PortfolioItem from './portfolio-item'
import data from '../data.json'

class Portfolio extends Component {
  render() {
    return (
      <div className='portfolio'>
            <div className='row mb-3'>
                <div className='section__title col'>
                    <h1>Portfolio <span className='emphasize'>/</span></h1>
                </div>
            </div>
            <div className='portfolio__container row'>
                { data.projects.map((project, index) => {
                    return (
                        <PortfolioItem 
                            key={index}
                            title={project.title}
                            overview={project.overview}
                            stack={project.stack}
                            liveLink={project.liveLink}
                            repoLink={project.repoLink}
                        />
                        )
                    })
                }
            </div> 
            <hr/>  
      </div>
    )
  }
}

export default Portfolio
