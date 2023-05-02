// Components
import HelperFlipCard from './HelperComponents/HelperFlipCard'
import HelperLinkScroll from './HelperComponents/HelperLinkScroll'
// Images
import pdf from "../assets/pdfs/Adrian_Pearman_Resume-2023.pdf"
import profilePhoto1 from '../assets/images/profilePhoto_1_2023.jpg'
import profilePhoto2 from '../assets/images/profilePhoto_2_2023.jpg'

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <div className="wrapper">
        <h2>About Me<span></span></h2>
        <div className="aboutMeContainer">
          <div className="imageContainer">
            <HelperFlipCard>
              <div className='flipImgContainerFront'>
                <img src={profilePhoto1} />
                <p>Hello! I'm Adrian 😃</p>
              </div>
              <div className='flipImgContainerBack'>
                <img src={profilePhoto2} />
                <p>And I'm the <span>cooler</span> Adrian 😎</p>
              </div>
            </HelperFlipCard>
          </div>
          <div className="textContainer">
            <div aria-hidden className="introTop">
              {`<Introduction>`}
            </div>
            <p>
                I am a Web Developer with over 6 years of relevant work experience across different industries. My roles have allowed me to successfully build, launch, and optimize various applications including websites, web pages, and full-stack platforms for clients. For the last two years, I have shared my love of tech through teaching; as I move to the next opportunity, I am excited to return to hands-on development.
            </p>
            <div aria-hidden className="introBottom">
              {`</Introduction>`}
            </div>
            <div className='buttonContainer'>
              <HelperLinkScroll 
                className={""}
                height={false}
                id={""}
                linkName={"Let's work together!"}
                scrollToElement={"ContactForm"} 
              />
             
              <a
                alt="Link to Adrian Pearman's resume, opens in new tab"
                href={pdf}
                id="resume"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa-solid fa-file"></i>
                Resume
              </a>   
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;