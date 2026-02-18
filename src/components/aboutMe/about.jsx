import about from '../../assets/about.png'
import Animated from '../animation'
import './about.css'

const AboutMe = () => {
  return (
    <Animated className="about container" id="About">
      <h1 className="color-bg head-section">About Me</h1>
      <div className="content-container">
        <div className="photo">
          <img src={about} alt="photo for abdulrahman" />
        </div>
        <div className="text">
          <h2>Hi, I'm AbdulRahman</h2>
          <p>
            I'm a passionate Full-Stack JavaScript Developer with over 4 years
            of experience building modern, scalable web applications. I
            specialize in the MERN stack and have a deep love for creating
            seamless user experiences.
          </p>
          <p>
            My expertise spans across frontend frameworks like React and Redux,
            to backend technologies including Node.js, Express.js, and MongoDB.
            I'm committed to writing clean, maintainable code and following best
            practices.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new technologies,
            contributing to open-source projects, or sharing knowledge with the
            developer community through blog posts and mentorship.
          </p>
        </div>
      </div>
    </Animated>
  )
}

export default AboutMe
