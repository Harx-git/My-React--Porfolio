import React from 'react'
import './service.css';
import LogoImg from '../../Assets/logo.svg';
import Service_Data from '../../Assets/sevices_data';
import Arrow_Img from '../../Assets/arrow_icon.svg';

const Service = () => {
  return (
    <div className='services' id='services'>
        <div className="service-title">
            <h1>My Services</h1>
            <img src={LogoImg} alt="" />
        </div>
        <div className="service-container">
            {Service_Data.map((service,index)=>{
                return <div key={index} className='service-format'> 
                <h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
                <p>{service.s_desc}</p>
                <div className='services-readmore'>
                    <p>Read more</p>
                    <img src={Arrow_Img} alt="" />
                </div>
                </div>
            })}
        </div>
      
    </div>
  )
}

export default Service 
