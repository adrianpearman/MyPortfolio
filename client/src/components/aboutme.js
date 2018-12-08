import React from 'react'
import profilePhoto from '../assets/images/profilePhoto.jpg'

const AboutMe = () => {
  return (
    <div className='about-me'>
        <div className='row mb-3'>
            <div className='section__title first col'>
              <h1>About Me <span className='emphasize'>/</span></h1>
            </div>
        </div>
        <div className='row'>
            <div className='about-me__photo--container'>
                <img className='about-me__image' src={profilePhoto} alt=''/>
                <div className='about-me__triangle'></div>
            </div>
            <div className='about-me__description col'>
                <div className='about-me__container'>
                     <p>
                        I’m a Full-Stack Web Developer based in Toronto, Ontario, Canada. Creating the best possible product is my goal as a developer; and with that in mind, my objective is to help <span className='emphasize'>YOU</span> create the best product possible for any and all of <span className='emphasize'>YOUR</span> needs!
                    <br />
                        When it comes to your needs, deadlines and working hours are pliable as needed. I’m also flexible when it comes to working arrangements whether its solo or in a working group environment.
                    </p>
                    <div className='contact-container mt-5'>
                        <div className='row'>
                            <div className='col'>
                                <div className='contact__me linkedin'>
                                    <a 
                                        href='https://www.linkedin.com/in/adrian-pearman/' 
                                        target='_blank' 
                                        alt="Link to Adrian Pearman's professional LinkedIn profile"
                                        rel="noopener noreferrer"
                                    >
                                      Linkedin
                                    </a> 
                                 </div>
                              </div>
                            <div className='col'>
                                <div className='contact__me github'>
                                      <a 
                                        href='https://github.com/adrianpearman' 
                                        target='_blank' 
                                        alt="Link to Adrian Pearman's Github profile"
                                        rel="noopener noreferrer"
                                      >
                                         Github
                                      </a>
                                </div>
                              </div>
                            <div className='col'>
                                <div className='contact__me email'>
                                      E-Mail
                                </div>
                            </div>
                        </div>
                        <div className='contact-container-bar'></div>
                    </div>
                </div>
            </div>
        </div>
        <hr/>
    </div>
  )
}

export default AboutMe
