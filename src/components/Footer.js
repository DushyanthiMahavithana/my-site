import React from 'react'
import Linkedin from '@material-ui/icons/LinkedIn';
import Github from '@material-ui/icons/GitHub';
import Mail from '@material-ui/icons/Mail';
import '../styles/Footer.css';
import { Facebook } from '@material-ui/icons';

function Footer() {
  return (
    <div className='footer'>
    <div className='socialMedia'>
      <a href='mailto:nbdush@gmail.com' className='icon-link'><Mail/></a>
      <a href='https://www.linkedin.com/in/dushyanthimahavithana/' target="_blank" rel="noopener noreferrer"className='icon-link'><Linkedin/></a> 
      <a href='https://github.com/DushyanthiMahavithana' target="_blank" rel="noopener noreferrer" className='icon-link'><Github/></a>
    </div>
    <p>&copy; 2023 dushyanthimahavithana.com</p>
    
  </div>
  )
}

export default Footer
