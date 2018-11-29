import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'

const ExperienceItems = (props) => {
  return (
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: '#a8ce00' }}
    >
        <h5 className="vertical-timeline-element-title mb-3">
            <span className='emphasize-title'>Title:</span> {props.title} 
        </h5>
        <h5 className="vertical-timeline-element-subtitle mb-3">
            <span className='emphasize-title'>Location:</span> {props.location}
        </h5>
        <h5 className="vertical-timeline-element-subtitle mb-3">
            <span className='emphasize-title'>Dates:</span> {props.dates}
        </h5>
        <h5>
            <span className='emphasize-title'>Responsibilities:</span>
        </h5>
        <ul>
            {
                props.responsibilities.map((responsibility, index) => {
                    return <li key={index}>{responsibility}</li>
                })
            }
        </ul>
    </VerticalTimelineElement>
  )
}

export default ExperienceItems
