import React from 'react'
import "./Footer.css"
import {
    FaFacebookSquare,
    FaGooglePlusSquare,
    FaLinkedin,
    FaTwitterSquare,
    FaInstagramSquare
} from "react-icons/fa"

const style = { fontSize: "1.5em" }
function Footer() {
    return (
        <div className='body'>
        <footer>
        <div className="footer-content">
            <div className="sec1">
                <a href="/#" className="logo">
                <span className="C"><b>C</b></span>HILL<span className="A"><b>A</b></span>ID
                </a>
                <p>Scelerisque facilisis sapien turpis <br></br>
                facilisis libero eu viverra purus dui <br></br>
                ac leo sed vitae diam morbi sed <br></br>
                nibh in eget dolor phasellus rhoncus odio morbi elit <br></br> 
                nunc id elit donec elementum [...]</p>
                <ul className='box-icon'>
                    <FaFacebookSquare style={style}/>
                    <FaGooglePlusSquare style={style}/>
                    <FaLinkedin style={style}/>
                    <FaTwitterSquare style={style}/>
                    <FaInstagramSquare style={style}/>
                </ul>
            </div>
            <div className="sec2">
                <h3 className='title'>Volutpat Metus Nullam</h3>
                <ul>
                    <li>Sagittis leo morbi quis</li>
                    <hr />
                    <li>Nulla vehicula felis laoreet</li>
                    <hr />
                    <li>Pulvinar proin et eros ac</li>
                    <hr />
                    <li>Mi vulputate accumsan fusce</li>
                    <hr />
                    <li>At massa in sed tortor sit amet</li>
                </ul>
            </div>
            <div className="sec3">
                <h3 className='title'>Tincidunt Ullamcorper</h3>
                <div className="pic-container">
                    <div className="pic">
                        <div className="overlay">
                            <div className="footer-content-piclink">
                                <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                        
                    <div className="pic">
                        <div className="overlay">
                            <div className="footer-content-piclink">
                            <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div className="pic">
                    <div className="overlay">
                            <div className="footer-content-piclink">
                            <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div className="pic">
                    <div className="overlay">
                            <div className="footer-content-piclink">
                            <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div className="pic">
                    <div className="overlay">
                            <div className="footer-content-piclink">
                            <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div className="pic">
                    <div className="overlay">
                            <div className="footer-content-piclink">
                            <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div className="pic">
                    <div className="overlay">
                            <div className="footer-content-piclink">
                            <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div className="pic">
                    <div className="overlay">
                            <div className="footer-content-piclink">
                            <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div className="pic">
                    <div className="overlay">
                            <div className="footer-content-piclink">
                            <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sec4">
                <h3 className='title'>Fusce Vel Lectus Nunc</h3>
                <ul>
                    <li>Lacinia donec tortor lectus varius vel egestas a dictum in odio mauris metus.</li>
                    <li>Friday, 6th April 2045</li>
                    <hr />
                    <li>Turpis iaculis ac hendrerit vel pretium non magna sed non metus ut at nisi morbi.</li>
                    <li>Thursday, 5th April 2045</li>
                </ul>
            </div>
        </div>
        </footer>
        <div className="copyright">
            <p>Copyright © 2018 - All Rights Reserved - Domain Name</p>
            <p>Template by OS Templates</p>
        </div>
    </div>
  )
}

export default Footer