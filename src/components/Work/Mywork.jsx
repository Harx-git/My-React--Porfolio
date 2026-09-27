import React from 'react'
import './work.css';
import LogoImg from '../../Assets/logo.svg';
import MyWork_data from '../../Assets/mywork_data';
import ArrowImg from '../../Assets/arrow_icon.svg';

const Mywork = () => {
  return (
    <div className='work'id='work'>
        <div className="work-title">
            <h1>My Work</h1>
            <img src={LogoImg} alt="" />
        </div>
        <div className="mywork-container">
            {MyWork_data.map((work,index)=>{
                return <img key={index} src={work.w_img} alt='' />
            })}
        </div>
        <div className="mywork_showmore">
            <p>Show More</p>
            <img src={ArrowImg} alt="" />
        </div>
    </div>
  )
}

export default Mywork
