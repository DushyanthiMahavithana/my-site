import React from 'react';
import Linkedin from '@material-ui/icons/LinkedIn';
import Github from '@material-ui/icons/GitHub';
import Mail from '@material-ui/icons/Mail';
import '../styles/Contact.css'; 
/*import { Button } from '@material-ui/core';*/

function Contact() {
  return (
    <div className='contact-container'>
      <h2>Contact Me</h2>
      <div className='contact-info'>
        <div className='contact-item'>
          <a href='mailto:nbdush@gmail.com'>
            <Mail />
          </a>
          <p>nbdush@gmail.com</p>
        </div>
        <div className='contact-item'>
          <a href='https://www.linkedin.com/in/dushyanthimahavithana/' target='_blank' rel='noopener noreferrer'>
            <Linkedin />
          </a>
          <p>My LinkedIn Profile</p>
        </div>
        <div className='contact-item'>
          <a href='https://github.com/DushyanthiMahavithana' target='_blank' rel='noopener noreferrer'>
            <Github />
          </a>
          <p>My Github Profile</p>
        </div>
      </div>
      <a href="/DushyanthiCV.pdf" download className="link-button">  
      <button className='buttons'>Download My CV</button>
      </a>
    </div>
  );
}

export default Contact;

