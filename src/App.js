import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import About from './components/About';
import Skill from './components/Skill';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer   from './components/Footer';

import './App.css';

function App() {
  /*  AOS  */
  useEffect(() => { 
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="dark">
          <Header />
          <About />
          <Projects />
          <Skill />
          <Certifications />
          <Contact />
          <Footer />
    </div>
  );
}

export default App;
