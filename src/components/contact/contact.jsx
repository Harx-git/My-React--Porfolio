import React from 'react'
import './contact.css'
import Image from '../../Assets/logo.svg' 
import mailIcon from '../../Assets/mailicon.svg'
import callIcon from '../../Assets/callicon.svg'
import location from '../../Assets/location.svg'

const contact = () => {
  return (
    <div id="contact" className='contact'>
        <div className="contact-title">
            <h1>Get In Touch</h1>
            <img src={Image} alt="" />
        </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Lets Talk</h1>
            <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
        <div className="contact-details">
            <div className="contact-detail">
                <img src={mailIcon} alt="" /> <p>harshkr1508.in@gmail.com</p>
            </div>
            <div className="contact-detail">
                <img src={callIcon} alt="" /> <p>+91 9690098392</p>
            </div>
            <div className="contact-detail">
                <img src={location} alt="" /> <p>Aligarh, Uttar Pardesh</p>
            </div>
            </div>
        </div>
        <form className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name'/>
            <label htmlFor="">Your E-mail</label>
            <input type="email" name="email" placeholder='Enter your email' />
            <label htmlFor="">Write Your message here..</label>
            <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
            <button className="contact-submit">Submit-Now</button>
        </form>
      </div>
    </div>
  )
}

export default contact
