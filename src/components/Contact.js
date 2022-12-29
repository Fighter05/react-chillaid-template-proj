import React from 'react'
import './Contact.css'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {IoLocationSharp} from 'react-icons/io5'
import {FiMail} from'react-icons/fi'

function Contact() {
  return (
    <div className='contact-container'>
      <div className='contact-box-title'>
        <p style={{fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'}}>Enim eleifend dignissim bibendum</p>
        <p style={{fontSize : '2.5rem'}}>Id Tristique Id Metus Nulla</p>
      </div>
      <div className='contact-box-content'>
        <div className="contact-left">
          <div className="contact-1">
            <div className="contact-icon-box">
              <BsFillTelephoneFill />
            </div>
            <div className="contact-data-box">
              <p style={{fontWeight: 'bold'}}>Give Us A Call:</p>
              <p>+00 (123) 456 7890</p>
            </div>
          </div>
          <div className="contact-1">
            <div className="contact-icon-box">
              <IoLocationSharp/>
            </div>
            <div className="contact-data-box">
              <p style={{fontWeight: 'bold'}}>Send Us A Mail:</p>
              <p>support@domain.com</p>
            </div>
          </div>
          <div className="contact-1">
            <div className="contact-icon-box">
              <FiMail/>
            </div>
            <div className="contact-data-box">
              <p style={{fontWeight: 'bold'}}>Come Visit Us:</p>
              <p>Directions to <span>our location</span></p>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <p style={{fontSize: '1.5rem', marginBottom: '10px'}}>Purus Nullam Arcu Integer</p>
          <div className='contact-grid'>
            <p style={{fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'}}>Elementum nisi ac volutpat vestibulum enim mi tincidunt eros sed justo <br></br>
            magna odio sed lacus ut non ante sit amet est luctus dictum ut dolor ac.</p>
              <input className='contact-input' type="text" placeholder='Name'/>
              <input className='contact-input' type="text" placeholder='Email'/>
          </div>
          <button className='contact-btn'>SUBMIT</button>
        </div>
      </div>
    </div>
  )
}

export default Contact