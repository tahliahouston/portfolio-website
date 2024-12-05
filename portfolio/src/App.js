import React, { useEffect } from 'react';
import './App.css';
import './style.css';

function App() {
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');

    anchors.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault(); 
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
        });
      });
    });

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
          });
        });
      });
    };
  }, []); 

  return (
    <div className="App">
      <header>
        <h1>hi, tahlia here</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section id="about">
        <h2>about me</h2>
        <p> I'm a passionate software developer with a knack for building impactful solutions. Currently, I work at a dynamic startup, where I dive into the world of full-stack development to create seamless and innovative digital experiences.
          I'm also pursuing my Honours in Computing, continually expanding my knowledge and staying on top of the latest industry trends.
          When I'm not coding, you'll likely find me gaming or streaming on Twitch, where I combine my love for technology and storytelling to connect with an awesome community.
          Feel free to explore my projects, and let's connect if you'd like to collaborate or just chat about tech and gaming!</p>
      </section>
      <section id="technologies">
        <h2>technologies I have worked with</h2>
        <ul>
          <li><p>C#</p></li>
          <li><p>Java</p></li>
          <li><p>Dart</p></li>
          <li><p>SQL</p></li>
        </ul>
      </section>
      <section id="experience">
        <h2>experience</h2>
        <p></p>
      </section>
      <section id="projects">
        <h2>projects</h2>
        <p>Showcase your work here with links and descriptions.</p>
      </section>
      <section id="contact">
        <h2>contact me</h2>
        <p>Add a contact form or your email here.</p>
      </section>
      <footer>
        <p>Built and designed by Tahlia Houston. All rights reserved. ©</p>
      </footer>
    </div>
  );
}

export default App;
