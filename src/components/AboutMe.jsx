// Images
import profilePhoto1 from '../assets/images/profilePhoto_1_2023.jpg'
import profilePhoto2 from '../assets/images/profilePhoto_2_2023.jpg'

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <div className="wrapper">
        <h2>
          About Me
          <span></span>
        </h2>

        <div className="aboutMeContainer">
          <div className="imageContainer">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={profilePhoto1} 
                    alt="Adrian Pearman's profile photo" 
                  />
                  <p>Hello! I'm Adrian 😃</p>
                </div>
                <div className="flip-card-back">
                  <img 
                    src={profilePhoto2}
                    alt="Adrian Pearma's cooler profile photo" 
                  />
                  <p>Hello! I'm the cooler Adrian 😎</p>
                </div>
              </div>
            </div>
          </div>
          <div className="textContainer">
            <div aria-hidden className="introTop">
              {`<Introduction>`}
            </div>
            <p>
                I am a Web Developer with over 6 years of relevant work experience across different industries. My roles have allowed me to successfully build, launch, and optimize various applications including websites, web pages, and full-stack platforms for clients. For the last two years, I have shared my love of tech through teaching; as I move to the next opportunity, I am excited to return to hands-on development.
            </p>
            <div aria-hidden className="introBottom">
              {`</Introdcution>`}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;