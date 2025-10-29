import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section" data-aos="fade-up">
      <h2>Contact Me</h2>
      <p>If you'd like to connect or collaborate, feel free to reach out!</p>

      <div className="contact-icons">
        <a
          href="mailto:shunmugamalavarayan1@gmail.com"
          aria-label="Send Email"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <i className="fas fa-envelope"></i>
          Email
        </a>

        <a
          href="https://github.com/Shunmugasubramanian"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <i className="fab fa-github"></i>
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/shunmugasubramanian/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <i className="fab fa-linkedin"></i>
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;
