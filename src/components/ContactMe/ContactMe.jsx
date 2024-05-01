import React from 'react'
import './ContactMe.css';
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import emailIcon from '../../assets/email-white.png'
import githubIcon from '../../assets/github-white.png'
import ContactForm from './ContactForm/ContactForm';


const ContactMe = () => {
  return (
    <section className='contact-container' id='contactme'>
        <h5>Contact Me</h5>    
        <div className='contact-content'>
            <div style={{flex:1}}>
                <ContactInfoCard 
                iconUrl= {emailIcon}
                text="yashpalsinghrajpurohith2003@gmail.com"
                />
                <ContactInfoCard
                iconUrl= {githubIcon}
                text="https://github.com/YashpalRajPurohit"
                />
            </div>
            <div style={{flex:1}}>
                <ContactForm />
            </div>
        </div>
    </section>
  );
};

export default ContactMe
