import React from 'react';
import './Skill.css';

const skills = [
  { name: 'Java',   icon: 'devicon-java-plain' },
  { name: 'MySQL',  icon: 'devicon-mysql-plain' },
  { name: 'React',  icon: 'devicon-react-original' },
  { name: 'Node.js', icon: 'devicon-nodejs-plain' },
  { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
  { name: 'HTML5',  icon: 'devicon-html5-plain' },
  { name: 'CSS3',   icon: 'devicon-css3-plain' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain'},
  { name: 'Python', icon: 'devicon-python-plain'},
  { name: 'C', icon: 'devicon-c-plain'},
];

function Skill() {
  return (
    <section id="skills" className="skills-section" data-aos="fade-up">
      <h2 className="skills-title">Skills</h2>

      <div className="skills-grid">
        {skills.map(({ name, icon }) => (
          <div className="skill-card" key={name} data-aos="zoom-in">
            <i className={`${icon} colored skill-icon`} />
            <span className="skill-name" title={name}>{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skill;
