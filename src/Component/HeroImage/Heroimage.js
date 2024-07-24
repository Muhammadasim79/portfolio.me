import React from 'react';
import './heroimage.css';
import { Link } from 'react-router-dom';
import TypewriterComponent from './TypewriterComponent.js'; // Ensure the path is correct


const Heroimage = () => {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1 className="hello-title">
          <br />
          Hello,
          <br />
          I'm Muhammad Asim
        </h1>
        <h1 className="name-title">
          <TypewriterComponent text="Front-end Developer" speed={100} />
        </h1>
        <p>I'm an expert frontend developer specializing in React.js,<br /> crafting dynamic and intuitive user interfaces.</p>
        <div>
          <Link to="/project" className="btn">Project</Link>
          <Link to="/contact" className="btn-light">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Heroimage;
