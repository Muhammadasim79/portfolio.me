import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPhoneAlt, } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <FontAwesomeIcon icon={faHome} /> Lahore, Punjab, Pakistan
          <br />
          <br />
          <FontAwesomeIcon icon={faPhoneAlt} /> (+92300) 0383479 
        </div>
        <div className='right'>
    <h1>Contact info :</h1>
    <br />
          <a href="https://github.com/Muhammadasim79" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className='social-icon' />
          </a>
          <a href="https://web.facebook.com/muhammadasim.jutt.58" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className='social-icon' />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-asim-204297264/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className='social-icon' />
          </a>
          <a href="https://www.instagram.com/asim.jutt79/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className='social-icon' />
          </a>
        </div>
      </div>
    </div>
  );
}
