import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './contact.css'
import {
  faEnvelope,
  faPaperPlane,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (
    <div className="contact container" id="Contact">
      <h1 className="color-bg head-section">Get In Touch</h1>
      <p className="details">
        Have a project in mind or want to collaborate? I'd love to hear from
        you. Drop me a message and let's create something amazing together!
      </p>
      <div className="content">
        <div className="form">
          <form>
            <div className="input-container">
              <label htmlFor="Name">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name please"
                id="Name"
              />
            </div>
            <div className="input-container">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                placeholder="Enter your Email please"
                id="email"
              />
            </div>
            <div className="input-container">
              <label htmlFor="message">Your message</label>
              <input
                type="text"
                placeholder="Tell me about your project ....."
                id="message"
              />
            </div>
            <button>
              <FontAwesomeIcon icon={faPaperPlane} />
              Send Message
            </button>
          </form>
        </div>
        <div className="connect">
          <h2>Let's Connect</h2>
          <p>
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Whether you need a
            full-stack developer for your team or want to build something from
            scratch, let's talk!
          </p>
          <ul className="connect-methods">
            <li>
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              abdulrahman102034@gmail.com
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} className="icon" /> 01093210683
            </li>
          </ul>
          <h3>Follow Me</h3>
          <ul className="following">
            <li>
              <a href="https://github.com/Abdul-Rahman-Ahmed">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/https://www.linkedin.com/in/abdul-rahman-ahmed-935881313/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact
