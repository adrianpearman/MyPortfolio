// Modules
import { useRef, useState } from "react";

const ExperienceCarousel = ({ data }) => {
  const ulElement = useRef(null)
  const [ job, setJob ] = useState(0);

  const handleJobClick = (e, index) => {
    if(e.type === "click" || e.key === "Enter"){
      const siblingJobElements = ulElement.current.children
      for (let i = 0; i < siblingJobElements.length; i++) {
        const element = siblingJobElements[i];
        element.classList.remove("active")
      }
      setJob(index)
    }
  }

  return (
    <>
      { data.length > 0 ? (
        <div className="jobContainer">
          <div className="jobTitleContainer">
            <h3>
              Roles 
              <span></span>
            </h3>
            <ul className="jobTitleList" ref={ulElement}>
              {
                data.map((value, key) => {
                  return (
                    <li 
                      className={key === job ? "active" : ""}
                      key={key} 
                      onClick={(e) => { handleJobClick(e, key) }}
                      onKeyDown={(e) => { handleJobClick(e, key) }}
                      tabIndex={0}
                    >
                      <p><span>{value.title}:</span> {value.employer}</p>
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