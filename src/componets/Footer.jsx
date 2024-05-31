import React from 'react';
import '../css/Footer.css'; // Import the CSS file

function Footer() {
  return (
    <div className="footer"> 
      <nav className="navbar justify-content-start">
        <ul className="nav nav-underline">
          <li className="nav-item">
            <a className="nav-link" href="https://www.linkedin.com/">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://github.com/Jaystarz360">
              <i className="fab fa-github"></i> GitHub
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Footer;