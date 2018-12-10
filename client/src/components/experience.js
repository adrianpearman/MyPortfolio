import React, { Component } from 'react'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import axios from 'axios'
import ExperienceItem from './experience-items'
import LoadingComponent from './loading'

class Experience extends Component {
    state = {
        experienceList: []
    }

    fetchExperienceHandler = () => {
        axios.get('/api/data/experienceList')
            .then((res) => {
                const experienceData = res.data
                // console.log(experienceData)
                this.setState({ experienceList: experienceData })
            })
            .catch(err => console.log(err))
    }

    componentWillMount(){
        this.fetchExperienceHandler()
    }

  render() {
      const experienceList = this.state.experienceList.map((experience, index) => {
          return (
              <ExperienceItem
                  key={index}
                  dates={experience.dates}
                  employer={experience.employer}
                  location={experience.location}
                  title={experience.title}
                  responsibilities={experience.responsibilities}
              />
          )
      })
      
    return (
      <div className='experience'>
        <div className='experience__title section__title'>
           <h1>Professional Experience <span className='emphasize'>/</span></h1> 
        </div>
        <VerticalTimeline layout='1-column'>
                {this.state.experienceList.length > 0 ? experienceList : <LoadingComponent /> }
            {/* {
                data.experience.map((experience, index) => {
                    return (
                        <ExperienceItem 
                            key={index}
                            dates={experience.dates}
                            employer={experience.employer}
                            location={experience.location}
                            title={experience.title}
                            responsibilities={experience.responsibilities}
                        />
                    )
                })
            } */}
         </VerticalTimeline>  
      </div>
    )
  }
}

export default Experience
