import React from "react";
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects-section" data-aos="fade-up">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        
        <div className="project-card">
          
          <h3>Smart Canteen Management System</h3>
          <p>A website for ordering food in college canteen is developed using HTML, CSS and javascript as front-end 
            and Node.js as back-end and MongoDB for storage and Razorpay for payments.</p>
          <div className="project-links">
            <a href="https://github.com/Shunmugasubramanian/MiniProject" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>

        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>A personal portfolio webapp built with React showcasing my projects and skills.</p>
          <div className="project-links">
            <a href="https://github.com/Shunmugasubramanian/Portfolio" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>

        <div className="project-card">
          <h3>Travel App</h3>
          <p>A simple MERN travel booking app with searching, selecting and booking features.</p>
          <div className="project-links">
            <a href="https://github.com/Shunmugasubramanian/Travel_Booking" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>

        <div className="project-card">
          <h3>Attendance Viewer</h3>
          <p>A simple Login and Attendance viewer website developed using JavaFX UI elements and MySQL database using JDBC</p>
          <div className="project-links">
            <a href="https://github.com/Shunmugasubramanian/AttendanceViewer" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
