import React, { useState } from 'react'
import './Navbar.css'
import MobileNav from '../MobileNav/MobileNav'
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };
  return (
    <BrowserRouter>
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>

    <nav className='nav-wrapper'>
        <div className='nav-content'>
        <img className='logo' src={require('../../assets/WlogoNobackground.png')} alt='logo'/>
            <ul>
                <li>
                    <Link to="#" className='menu-item' smooth>Home</Link>
                </li>
                <li>
                    <Link to="#skills" className='menu-item' smooth>Skills</Link>
                </li>
                <li>
                    <Link to="#workexperience" className='menu-item' smooth>Work Experience</Link>
                </li>
                <li>
                    <Link to="#contactme" className='menu-item' smooth>Contact Me</Link>
                </li>
                <button className='contact-btn' onClick={() => {}}>
                    Hire Me
                </button>
            </ul>

            <button className='menu-btn' onClick={toggleMenu}>
                <span class={"material-symbols-outlined"} style={{fontSize: "1.8rem"}}>
                    {openMenu ?
                    <img className='close-bar' src={require('../../assets/close.png')} alt='close-bar'/> 
                    :
                    <img className='menu-bar' src={require('../../assets/menu-bar.png')} alt='menu-bar'/> 
                }
                </span>
            </button>
        </div>
    </nav>
    </BrowserRouter>
  )
}

export default Navbar