import React from 'react'
import './Content2.css'

function Content2() {
  return (
    <div className='content2-container'>
        <div className="content2-4box">
          <div className="content2-icon-box">
            <a href="#"><i class="fas fa-hand-rock"></i></a>
            <p>Feugiat Fermentum</p>
            <p>Ac orci proin porttitor lacus <br></br>
            eget mi pellentesque non.</p>
          </div>
          <div className="content2-icon-box">
            <a href="#"><i class="fas fa-dove"></i></a>
            <p>Malesuada Accumsan</p>
            <p>Sapien sed metus congue <br></br>
            sodales vivamus scelerisque.</p>
          </div>
          <div className="content2-icon-box">
            <a href="#"><i class="fas fa-history"></i></a>
            <p>Mauris Placerat</p>
            <p>Et interdum vulputate purus <br></br>
            nisl fringilla sapien quis.</p>
          </div>
          <div className="content2-icon-box">
          <a href="#"><i class="fas fa-heartbeat"></i></a>
            <p>Elementum Rhoncus</p>
            <p>Sollicitudin dui mauris dui <br></br>
            nunc lorem tortor pharetra.</p>
          </div>
        </div>
        <div className="content2-2pic">
          <div className="content2-pic-box">
            <div className="content2-pic"></div>
            <div className="content2-picname">
              <p>Accumsan Placerat</p>
              <a href=""><i class="fas fa-angle-right"></i></a>
            </div>
          </div>
          <div className="content2-pic-box">
            <div className="content2-pic"></div>
            <div className="content2-picname">
              <p>Scelerisque Etiam</p>
              <a href=""><i class="fas fa-angle-right"></i></a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Content2