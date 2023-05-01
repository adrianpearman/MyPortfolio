// Modules
import { useState } from "react";

const ExperienceCarousel = ({ data }) => {
  const [ job, setJob ] = useState(0)

  return (
    <>
      { data.length > 0 ? (
        <div className="jobContainer">
          <div className="jobTitleContainer">
            <h3>
              Roles 
              <span></span>
            </h3>
            <ul className="jobTitleList">
              {
                data.map((value, key) => {
                  return (
                    <li key={key} onClick={() => { setJob(key) }}>
                      <p>{value.title} - {value.employer}</p>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className="jobTitleDescription">
            <p><span>Company: </span>{data[job].employer}</p>
            <p><span>Title: </span>{data[job].title}</p>
            <p><span>Location: </span>{data[job].location}</p>
            <p><span>Dates: </span>{data[job].dates}</p>
            <p><span>Responsibilities:</span></p>
            {
              data[job].responsibilities.length > 0 ? (
                <ul>
                  {data[job].responsibilities.map((task, key) => {
                    return (
                      <li key={key}>
                        <p>{task}</p>
                      </li>
                    )
                  })}
                </ul>
              ):
              (
                <p>Responsibilities coming soon!</p>
              )
            }
          </div>
        </div>
      ) : null
    }
    </>
  )  
}

export default ExperienceCarousel