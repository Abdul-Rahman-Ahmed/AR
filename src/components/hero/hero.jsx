import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './hero.css'
import {
  faDownload,
  faLocationDot,
  faStar,
} from '@fortawesome/free-solid-svg-icons'
import me from '../../assets/me.jpg'

const Hero = () => {
  return (
    <section className="hero" id="Home">
      <div className="photo">
        <img src={me} alt="me" />
      </div>
      <div className="content">
        <div className="short-head">
          <FontAwesomeIcon className="icon" icon={faStar} />
          Hey There! I'm
        </div>
        <div className="person-info">
          <h1 className="name">AbdulRahman Ahmed</h1>
          <h2 className="title color-bg">Full-Stack Developer</h2>
        </div>
        <div className="details">
          Specializing in building exceptional digital experiences with
          cutting-edge technologies. Let's create something amazing together! 🚀
        </div>
        <div className="location">
          <FontAwesomeIcon icon={faLocationDot} /> Cairo, Egypt . Remote
          Available
        </div>
        <h3>TECH STACK</h3>
        <ul className="stacks">
          <li>React</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Express</li>
          <li>Redux</li>
          <li>JavaScript</li>
        </ul>
        <div className="buttons">
          <button>View Portfolio</button>
          <button>
            <FontAwesomeIcon icon={faDownload} className="icon" /> Download CV
          </button>
        </div>
      </div>
      <div className="shape-container">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
    </section>
  )
}

export default Hero
