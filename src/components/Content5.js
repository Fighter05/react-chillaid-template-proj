import React from 'react'
import './Content5.css'

function Content5() {
  return (
    <div className='content5-container'>
      <div className='contact-box-title'>
        <p style={{fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'}}>Purus ut mi sed velit urna ut</p>
        <p style={{fontSize : '2.5rem'}}>Sapien Posuere In Iaculis</p>
      </div>
      <div className="content5-3pic">
          <div className="content5-pic-box">
            <div className="content5-pic">
            <div className="overlay">
                            <div className="footer-content-piclink">
                            <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
            </div>
            <div className="content5-picname">
              <p>A. Doe</p>
              <p>Euismod nec hendrerit</p>
            </div>
          </div>
          <div className="content5-pic-box">
            <div className="content5-pic">
            <div className="overlay">
                            <div className="footer-content-piclink">
                            <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
            </div>
            <div className="content5-picname">
              <p>B. Doe</p>
              <p>Vel velit aliquam massa</p>
            </div>
          </div>
          <div className="content5-pic-box">
            <div className="content5-pic">
            <div className="overlay">
                            <div className="footer-content-piclink">
                            <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
            </div>
            <div className="content5-picname">
              <p>C. Doe</p>
              <p>Vulputate aliquet purus</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Content5