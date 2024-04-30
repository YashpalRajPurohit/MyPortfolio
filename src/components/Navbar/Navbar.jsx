import React, { useState } from 'react'
import './Navbar.css'
import MobileNav from '../MobileNav/MobileNav'

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };
  return (
    <>
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>

    <nav className='nav-wrapper'>
        <div className='nav-content'>
        <img className='logo' src={require('../../assets/WlogoNobackground.png')} alt='logo'/>
            <ul>
                <li>
                    <a href="" className='menu-item'>Home</a>
                </li>
                <li>
                    <a href="" className='menu-item'>Skills</a>
                </li>
                <li>
                    <a href="" className='menu-item'>Work Experience</a>
                </li>
                <li>
                    <a href="" className='menu-item'>Contact Me</a>
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
    </>
  )
}

export default Navbar