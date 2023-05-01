// NPM Modules
import { useState } from "react"

const ProjectCarousel = ({ data }) => {
  const [ carouselIndex, setCarouselIndex ] = useState(0)

  const handleDecreaseIndex = () => {
    const condition = carouselIndex !== 0 ? (carouselIndex - 1) : (data.length - 1);
    setCarouselIndex(condition)
  }

  const handleIncreaseIndex = () => {
    const condition = carouselIndex !== (data.length - 1) ? (carouselIndex + 1) : 0;
    setCarouselIndex(condition)
  }

  return (
    <div className='carousel'>
      {
        data.length > 0 ? (
          <>
            <button onClick={handleDecreaseIndex}>Previous</button>
            <div>
              <p><span>title</span>{data[carouselIndex].title}</p>
              <p><span>overview</span>{data[carouselIndex].overview}</p>
              <p><span>liveLink</span>{data[carouselIndex].liveLink}</p>
              <p><span>repolink</span>{data[carouselIndex].repoLink}</p>
              <p><span>Stack</span></p>
              <ul>
                {data[carouselIndex].stack.map((language, key) => {
                  return (
                    <li key={key}>{language}</li>
                  )
                })}
              </ul>
            </div>
            <button onClick={handleIncreaseIndex}>Next</button>
          </>
        ) : (
          <p>No Projects to show!</p>
        )
      }
    </div>
  )
}

export default ProjectCarousel;