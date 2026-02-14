import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import armonia from '../../assets/projects/armonia.png'
import usersSystem from '../../assets/projects/users-systems.png'
import axit from '../../assets/projects/Axit.png'
import Bondi from '../../assets/projects/bondi.png'
import taskat from '../../assets/projects/taskat.png'
import ehya from '../../assets/projects/ehya.png'
import './projects.css'

const Projects = () => {
  const projects = [
    {
      name: 'Armonia Italia',
      detials:
        'Responsive dynamic menu built with HTML, SCSS, and JavaScript, featuring category-based rendering and clean, scalable code structure.',
      tools: ['HTML', 'Pug', 'CSS', 'scss', 'JS', 'Gulp'],
      imgSrc: armonia,
      gitLink: 'https://github.com/Abdul-Rahman-Ahmed/armonia-italia',
      demo: 'https://abdul-rahman-ahmed.github.io/armonia-italia/dist/',
    },
    {
      name: 'Users system',
      detials:
        'A User Management System built with Node.js, Express.js, MongoDB, and JWT for secure authentication and role-based access control (RBAC).',
      tools: [
        'Node.js',
        'Express.js',
        'MongoDB',
        'Mongoose',
        'JWT',
        'bcrypt.js',
        'Validator',
        'Nodemailer',
      ],
      imgSrc: usersSystem,
      gitLink: 'https://github.com/Abdul-Rahman-Ahmed/users-system',
      demo: 'https://github.com/Abdul-Rahman-Ahmed/users-system?tab=readme-ov-file#installation',
    },
    {
      name: 'AXIT',
      detials:
        'A modern, responsive landing page built using HTML, CSS and Bootstrap. The design features multiple sections such as hero banner with call-to-action buttons',
      tools: ['HTML', 'CSS', 'JS', 'Bootstrap'],
      imgSrc: axit,
      gitLink: 'https://github.com/Abdul-Rahman-Ahmed/armonia-italia',
      demo: 'https://abdul-rahman-ahmed.github.io/armonia-italia/dist/',
    },
    {
      name: 'Bondi',
      detials:
        'Responsive dynamic menu built with HTML, SCSS, and JavaScript, featuring category-based rendering and clean, scalable code structure.',
      tools: ['HTML', 'CSS', 'JS', 'Bootstrap'],
      imgSrc: Bondi,
      gitLink: 'https://github.com/Abdul-Rahman-Ahmed/Bondi',
      demo: 'https://abdul-rahman-ahmed.github.io/Bondi/',
    },
    {
      name: 'Taskat',
      detials:
        'Responsive dynamic menu built with HTML, SCSS, and JavaScript, featuring category-based rendering and clean, scalable code structure.',
      tools: ['HTML', 'CSS', 'JS', 'anmation'],
      imgSrc: taskat,
      gitLink: 'https://github.com/Abdul-Rahman-Ahmed/Taskat',
      demo: 'https://abdul-rahman-ahmed.github.io/Taskat/',
    },
    {
      name: 'Ehya',
      detials:
        'Responsive dynamic menu built with HTML, SCSS, and JavaScript, featuring category-based rendering and clean, scalable code structure.',
      tools: ['HTML', 'CSS', 'JS', 'anmation'],
      imgSrc: ehya,
      gitLink: 'https://github.com/Abdul-Rahman-Ahmed/ehya',
      demo: 'https://abdul-rahman-ahmed.github.io/ehya/',
    },
  ]
  return (
    <div className="projects container" id="Projects">
      <h1 className="color-bg head-section">Featured Projects</h1>
      <p className="details">
        Here are some of my recent projects that showcase my skills in
        full-stack development. Each project demonstrates my ability to build
        modern, scalable applications.
      </p>
      <div className="cards">
        {projects.map((el, key) => {
          return (
            <div className="card" key={key}>
              <div className="img">
                <img src={el.imgSrc} alt="img" />
              </div>
              <div className="content">
                <h2>{el.name}</h2>
                <p>{el.detials}</p>
                <ul className="tools">
                  {el.tools.map((tool, key) => {
                    return <li key={key}>{tool}</li>
                  })}
                </ul>
                <div className="buttons">
                  <a className="code" href={el.gitLink} target="_blank">
                    <FontAwesomeIcon icon={faGithub} /> Code
                  </a>
                  <a href={el.demo} target="_blank">
                    <FontAwesomeIcon icon={faExternalLink} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
