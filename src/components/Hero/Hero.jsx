import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero-container'>
        <div className='hero-content'>
            <h2>Engineering Tomorrow: Harnessing AI, Cloud, and Web Innovations </h2>
            <p>
                Passionate about AI, ML, and cloud computing | Dedicated to advancing technology and contributing to cutting-edge projects
            </p>
        </div>

        <div className='hero-img'>
            <div>
                <div className='tech-icon'>
                    <img src={require('../../assets/Hero-me.png')} alt='hai kuch' />
                </div>
                <img src={require('../../assets/Hero-me.png')} alt='aur bhi hai kuch' />
            </div>

            <div>
                <div className='tech-icon'>
                    <img src={require('../../assets/html-icon.png')} alt='hai kuch' />
                </div>
                <div className='tech-icon'>
                    <img src={require('../../assets/css-icon.png')} alt='hai kuch' />
                </div>
                <div className='tech-icon'>
                    <img src={require('../../assets/dl-icon.png')} alt='hai kuch' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
