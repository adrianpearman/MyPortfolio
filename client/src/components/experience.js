import React, { Component } from 'react'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import ExperienceItem from './experience-items'
import data from '../data.json'

class Experience extends Component {
  render() {
      
    return (
      <div className='experience'>
        <div className='experience__title'>
           <h1>Professional Experience <span className='emphasize'>/</span></h1> 
        </div>
        <VerticalTimeline layout='one-column'>
            {
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
            }
            
         </VerticalTimeline>  
      </div>
    )
  }
}

export default Experience
