import { faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons'
import './footer.css'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <footer>
      <div className="main container">
        <div className="info">
          <h1>AbdulRahman Ahmed</h1>
          <p>
            Full-Stack JavaScript Developer passionate about building modern web
            applications and solving complex problems.
          </p>
        </div>

        <div className="links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Skills">Skills</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="connect">
          <h2>Connect With Me</h2>
          <ul className="following">
            <li>
              <a href="https://github.com/Abdul-Rahman-Ahmed" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/https://www.linkedin.com/in/abdul-rahman-ahmed-935881313/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href="mailto:abdulrahman102034@gmail.com" target="_blank">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        &copy; 2026 AbdulRahman Ahmed. Made with{' '}
        <FontAwesomeIcon icon={faHeart} className="icon" /> and lots of coffee.
        All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
