import React from 'react';
import './heroproject.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser,  faTasks, faCloudSun,  faBookOpen } from '@fortawesome/free-solid-svg-icons';

export default function Heroproject() {
  return (
    <div>
      <br />
      <br />
      <br />
      <h2>My Projects</h2>
      <p>
        <FontAwesomeIcon icon={faShoppingCart} /> E-commerce Platform: A fully functional e-commerce site with React.js.
      </p>
      <p>
        <FontAwesomeIcon icon={faUser} />  Portfolio Website: A personal portfolio site built using React.js.
      </p>
      
      <p>
        <FontAwesomeIcon icon={faTasks} />  Task Manager: A task management app developed with React.js.
      </p>
      
      <p>
        <FontAwesomeIcon icon={faCloudSun} />  Weather App: A weather forecasting app built in React.js.
      </p>
      
      
      
      <p>
        <FontAwesomeIcon icon={faBookOpen} /> Online Learning Platform: An e-learning platform created with React.js.
      </p>
    </div>
  );
}
