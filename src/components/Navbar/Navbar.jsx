import React from 'react';
import './navbar.css';
import { ImGift, ImMenu } from "react-icons/im";
import { useRef,useState } from 'react';
import { ImCross } from "react-icons/im";
import UnderLine from '../../Assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';



const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [underline, setUnderline] = useState('home');
  const menuRef = useRef();

  const openMenu = () =>{
    menuRef.current.style.right='0';
  }
  const closeMenu = () =>{
    menuRef.current.style.right='-250px';
  }

  return (
    <>
    <div className="navbar">
      <h1>HarshX</h1>
      <ImMenu className='nav-mob-open' onClick={openMenu}/>
        <ul ref={menuRef} className="menu-item">
            <ImCross className='nav-mob-close' onClick={closeMenu}/>
            <li><AnchorLink className='anchor-link'  href='#home'><p onClick={()=>{setUnderline('home')}}>Home</p>{underline==='home'?<img src={UnderLine} alt='underline-img'/>:<></>}</AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>{setUnderline('services')}}>Services</p>{underline==='services'?<img src={UnderLine} alt=''/>:<></>}</AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>{setUnderline('about')}}>About me</p>{underline==='about'?<img src={UnderLine} alt=''/>:<></>}</AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>{setUnderline('work')}}>Portfolio</p>{underline==='work'?<img src={UnderLine} alt=''/>:<></>}</AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>{setUnderline('contact')}}>Contact</p>{underline==='contact'?<img src={UnderLine} alt=''/>:<></>}</AnchorLink></li>
        </ul>
      <div className="connect">Connect With me </div>
      {/* <div className="menu" onClick={() => setIsOpen(true)}>
          <ImMenu />
        </div> */}
    </div>
    {/* <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="close-btn" onClick={() => setIsOpen(false)}>
          <ImCross />
        </div>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>About me</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </div> */}

      {/* Overlay (optional, to darken background) */}
      {/* {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>} */}
    </>
  )
}

export default Navbar;