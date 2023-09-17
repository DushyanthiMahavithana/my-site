import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import ReorderIcon from '@material-ui/icons/Reorder';
import '../styles/Navbar.css';


  

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);
    const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  }
  return (
    <div className='navbar'>
        <div className='icon' id={openLinks ? "open" : "close"}>
          <div className='hidden-menu-icon'>
            <Link to='/' >Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/work'>My Work</Link>
            <Link to='/contact'>Contact</Link>
          </div>
        </div>
        <div className='menu'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/work'>My Work</Link>
            <Link to='/contact'>Contact</Link>
        </div>
        <div className='menu-icon'>
            <button onClick={toggleNavbar}>
              <ReorderIcon></ReorderIcon>
            </button>
          </div>
    </div>
  )
}

export default Navbar
