import React from 'react'
import { Link } from 'react-scroll'


const Footer = (props) => {
    const duration = props.duration
    const offset = props.offset
  return (
    <footer className='footer'>
        <nav className='footer__nav'>
            <ul>
                <li id='linkedin'>
                    <a 
                        href='https://www.linkedin.com/in/adrian-pearman/'
                        target='_blank'
                        alt="Link to Adrian Pearman's professional LinkedIn profile"
                        rel="noopener noreferrer"
                     >
                        LinkedIn
                    </a>
                </li>  
                <li id='github'>
                    <a 
                        href='https://github.com/adrianpearman'
                        target='_blank'
                        alt="Link to Adrian Pearman's Github profile"
                        rel="noopener noreferrer"
                     >
                        GitHub
                    </a>
                </li>  
                <li>
                    <Link
                        to='AboutMe'
                        spy={true}
                        smooth={true}
                        offset={offset}
                        duration={duration}
                    >
                        <p>About Me</p>
                    </Link>
                </li>
                <li>
                    <Link
                        to='Experience'
                        spy={true}
                        smooth={true}
                        offset={offset}
                        duration={duration}
                    >
                        <p>Experience</p>
                    </Link>
                </li>
                <li>
                    <Link
                        to='Portfolio'
                        spy={true}
                        smooth={true}
                        offset={offset}
                        duration={duration}
                    >
                        <p>Portfolio</p>
                    </Link>
                </li>
                <li>
                    <Link
                        to='ContactMe'
                        spy={true}
                        smooth={true}
                        offset={offset}
                        duration={duration}
                    >
                        <p>Contact-Me</p>
                    </Link>
                </li>
            </ul>
        </nav>
        <h4 className='footer__copyright'>&copy; Adrian Pearman {new Date().getFullYear()}</h4>
    </footer>
  )
}

export default Footer
