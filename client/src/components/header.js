import React from 'react'
import { Link } from 'react-scroll'

// setting duration for the scroll speed
const duration = 500
const offset = -75
const Header = (props) => {
    let styleClasses = props.showNavigation ? 'navbar navbar-dark bg-primary' : 'hidden'
  return (
        <nav className={styleClasses}>
            <ul className='navbar__desktop'>
                <li>
                    <Link
                        to='AboutMe'
                        spy={true}
                        smooth={true}
                        offset={offset}
                        duration={duration}
                    >
                      <h4>About Me</h4>
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
                        <h4>Experience</h4>
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
                        <h4>Portfolio</h4>
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
                      <h4>Contact-Me</h4>
                    </Link>
                </li>
            </ul>

            <ul className='navbar__mobile'>
                <li>About Me</li>
                <li>Experience</li>
                <li>Portfolio</li>
                <li>Contact-Me</li>
            </ul>
        </nav>
  )
}

export default Header
