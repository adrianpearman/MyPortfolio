import React, { Component } from 'react'
import axios from 'axios'

import LoadingComponent from './loading'
import PortfolioItem from './portfolio-item'

class Portfolio extends Component {
    state = {
        projectList: []
    }

    fetchPortfolioHandler = () => {
        axios.get('/api/data/projectList')
            .then((res) => {
                let projects = res.data
                // console.log(projects)
                this.setState({ projectList: projects })
            })
            .catch(err => console.error(err))
    }

    componentWillMount(){
        this.fetchPortfolioHandler()
    }

  render() {

      const portfolioList = this.state.projectList.map((project, index) => {
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

    return (
      <div className='portfolio'>
            <div className='row mb-3'>
                <div className='section__title col'>
                    <h1>Portfolio <span className='emphasize'>/</span></h1>
                </div>
            </div>
            <div className='portfolio__container row'>
                {this.state.projectList.length > 0 ? portfolioList : <LoadingComponent />}
            </div> 
            <hr/>  
      </div>
    )
  }
}

export default Portfolio
