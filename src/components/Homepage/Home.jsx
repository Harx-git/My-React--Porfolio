import React from 'react';
import './home.css';
import image from "../../Assets/myimg.jpg";

const Home = () => {
  return (
    <div id="home" className="hero">
        <img className='ring-image' src={image} alt="profile picture"/>
        <h1><span>I'm Harsh,</span> frontend developer based in USA.</h1>
        <p>I am a frontend Developer from California, USA with 10 year of Experience in multiple companies like Microsoft, Tesla and Apple.</p>
        <div className="hero-action">
            <div className="connect-me">Connect With me</div>
            <div className="resume">My Resume</div>
        </div>
    </div>
  );
}

export default Home;
