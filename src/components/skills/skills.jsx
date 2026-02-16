import './skills.css'
const Skills = () => {
  const skills = [
    { name: 'HTML', level: 95, color: 'oklch(70.5% .213 47.604)' },
    { name: 'CSS', level: 90, color: 'oklch(62.3% .214 259.815)' },
    { name: 'JavaScript', level: 95, color: 'oklch(79.5% .184 86.047)' },
    { name: 'React', level: 92, color: 'oklch(71.5% .143 215.221)' },
    { name: 'Redux Toolkit', level: 88, color: 'oklch(62.7% .265 303.9)' },
    { name: 'Node.js', level: 90, color: 'oklch(72.3% .219 149.579)' },
    { name: 'Express.js', level: 87, color: 'oklch(44.6% .03 256.802)' },
    { name: 'MongoDB', level: 85, color: 'oklch(69.6% .17 162.48)' },
  ]

  const technologies = [
    { name: 'TypeScript', category: 'Language' },
    { name: 'Next.js', category: 'Framework' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'Git & GitHub', category: 'Version Control' },
    { name: 'REST APIs', category: 'Backend' },
    { name: 'GraphQL', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Jest', category: 'Testing' },
    { name: 'Webpack', category: 'Build Tools' },
    { name: 'Figma', category: 'Design' },
  ]
  return (
    <div className="skills container" id="Skills">
      <h1 className="color-bg head-section">Skills & Expertise</h1>
      <h2>Core Technologies</h2>
      <ul className="skills-list">
        {skills.map((el, key) => {
          return (
            <li key={key}>
              <div className="text">
                <h3>{el.name}</h3>
                <p className="level">{el.level}%</p>
              </div>
              <div className="linear">
                <div
                  className="progress"
                  style={{ backgroundColor: el.color, width: el.level + '%' }}
                ></div>
              </div>
            </li>
          )
        })}
      </ul>
      <h2>Additional Technologies</h2>
      <ul className="technologies-list">
        {technologies.map((el, key) => {
          return (
            <li key={key}>
              <h3>{el.name}</h3>
              <p>{el.category}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Skills
