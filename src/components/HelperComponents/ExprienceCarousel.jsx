// Modules
import { useState } from "react";

const ExperienceCarousel = ({ data }) => {
  const [ job, setJob ] = useState(0)

  return (
    <>
      { data.length > 0 ? (
        <div className="carousel">
          <div className="jobTitleContainer">
            <ul className="jobTitleList">
              {
                data.map((value, key) => {
                  return (
                    <li 
                      key={key}
                      onClick={() => { setJob(key) }}
                    >
                      <p>{value.title}</p>
                      <p>{value.employer}</p>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className="jobTitleDescription">
            <p><span>COMPANY: </span>{data[job].employer}</p>
            <p><span>TITLE: </span>{data[job].title}</p>
            <p><span>LOCATION: </span>{data[job].location}</p>
            <p><span>DATES: </span>{data[job].dates}</p>
            <p><span>RESPONSIBILITIES:</span></p>
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