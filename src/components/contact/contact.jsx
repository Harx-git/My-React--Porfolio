import React, { useRef, useState } from 'react'
import './contact.css'
import Image from '../../Assets/logo.svg' 
import mailIcon from '../../Assets/mailicon.svg'
import callIcon from '../../Assets/callicon.svg'
import location from '../../Assets/location.svg'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    emailjs.sendForm(
      'service_een97wh',
      'template_hrrob1d',
      form.current,
      '0hAWWF3wjYzOy-N4M'
    )
    .then(() => {
      setStatus('success');
      form.current.reset(); // clear form after sending
    })
    .catch((err) => {
      console.error(err);
      setStatus('error');
    })
    .finally(() => setSending(false));
  };

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
        <form ref={form} className="contact-right" onSubmit={sendEmail}>
            <label htmlFor="name">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' required/>
            <label htmlFor="email">Your E-mail</label>
            <input type="email" name="email" placeholder='Enter your email' required/>
            <label htmlFor="message">Write Your message here..</label>
            <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>
            <button className="contact-submit" type="submit" disabled={sending}>
              {sending ? 'Sending...' : 'Submit-Now'}
            </button>
            {status === 'success' && <p style={{color: 'green'}}>Message sent successfully!</p>}
            {status === 'error' && <p style={{color: 'red'}}>Something went wrong. Try again.</p>}
        </form>
      </div>
    </div>
  )
}

export default Contact