import React from 'react'
import './Content7.css'

function Content3() {
  return (
    <div className='content7-container'>
      <div className='contact-box-title'>
        <p style={{fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'}}>Lorem aenean nunc aenean sagittis</p>
        <p style={{fontSize : '2.5rem'}}>Imperdiet Massa Maecenas</p>
      </div>
      <div className="content5-3pic">
          <div className="content5-pic-box">
            <div className="content7-pic">
            <div className="overlay">
                            <div className="footer-content-piclink">
                            <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
            </div>
            <div className="content7-picname">
              <div style={{display: 'flex', gap: '10px'}}>
                <i class="fas fa-user"></i>
                <p>Admin</p>
              </div>
              <div style={{display: 'flex', gap: '10px'}}>
                <i class="fas fa-comments"></i>
                <p>Comments (3)</p>
              </div>
            </div>
            <div className="content7-databox">
              <p>05 APR 2045</p>
              <p>Quam Justo Suscipit At Blandit At
                <br></br> Blandit Vitae Tellus Maecenas</p>
            </div>

          </div>
          <div className="content5-pic-box">
            <div className="content7-pic">
            <div className="overlay">
                            <div className="footer-content-piclink">
                            <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
            </div>
            <div className="content7-picname">
            <div style={{display: 'flex', gap: '10px'}}>
                <i class="fas fa-user"></i>
                <p>Admin</p>
              </div>
              <div style={{display: 'flex', gap: '10px'}}>
                <i class="fas fa-comments"></i>
                <p>Comments (6)</p>
              </div>
            </div>
            <div className="content7-databox">
            <p>04 APR 2045</p>
              <p>Commodo Mauris A Semper Posuere
                <br></br> Sem Arcu Cursus Felis Non Cursus</p>
            </div>

          </div>
          <div className="content5-pic-box">
            <div className="content7-pic">
            <div className="overlay">
                            <div className="footer-content-piclink">
                            <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
            </div>
            <div className="content7-picname">
            <div style={{display: 'flex', gap: '10px'}}>
                <i class="fas fa-user"></i>
                <p>Admin</p>
              </div>
              <div style={{display: 'flex', gap: '10px'}}>
                <i class="fas fa-comments"></i>
                <p>Comments (10)</p>
              </div>
            </div>
            <div className="content7-databox">
            <p>03 APR 2045</p>
              <p>Enim Odio In Odio Suspendisse
                <br></br> Commodo Suscipit Nisi Nam Tellus</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Content3