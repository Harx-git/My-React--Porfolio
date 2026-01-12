import React from 'react'
import './About.css';
import logo from '../../Assets/logo.svg';
import 'remixicon/fonts/remixicon.css';

const About = () => {
  return (
    <div id="about" className='main'>
        <div className='header'>
            <h1>About me</h1>
            <img src={logo} alt="logo"/>
        </div>
        <div className='about-section'>
            <div className="about-left">
                <img src="" alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
                    <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>Javascript</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>Java</p><hr style={{width:"50%"}}/></div>
                    
                </div>
            </div>
        </div>
        <div className="about-achivement">
            <div className="about-achieve">
                <h1>1+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achieve">
                <h1>5+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achieve">
                <h1>10+</h1>
                <p>HAPPY CLIENT</p>
            </div>
        </div>
      
    </div>
  )
}

export default About
