import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about"data-aos="fade-up">
      <h2>About Me</h2>
      <p>Hello! I’m Shunmuga Subramanian, an aspiring Software Engineer.</p>
      <p>I have strong foundation in Java, Full-stack development, web development and SQL database. 
        I enjoy solving complex coding problems and building responsive applications that deliver real value.
        I seek opportunities to apply my knowledge and skills to solve real-world problems.
        I am eager to demonstrate my capabilities while continually improving my technical proficiency.
      </p>
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-button">Resume</a>
    </section>
  );
}

export default About;