import React from 'react'
import './Content4.css'

function Content4() {
  return (
    <div className='content4-container'>
      <div className='contact-box-title'>
        <p style={{fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'}}>Rutrum erat nec mollis augue mauris</p>
        <p style={{fontSize : '2.5rem'}}>Ac Pede Phasellus Commodo
        </p>
      </div>
      <div className="content4-flexbox-4circle">
        <div className="circle-box">
          <div className="percent">
            <svg>
              {/* <circle className='cc-outline' cx='70' cy='70' r='85' strokeDasharray={5} strokeDashoffset={1040}></circle> */}
              <circle cx={70} cy={70} r ={70}></circle>
              <circle cx={70} cy={70} r ={70} 
              style={{strokeDashoffset: 'calc(440 - (440 * 25) / 100)', stroke: ' var(--color-blue)'}}></circle>
            </svg>
            <div className="content4-number-percent">
              <p>25%</p>
            </div>
          </div>
        <p className='content4-text'>PORTTITOR</p>
        </div>
        <div className="circle-box">
          <div className="percent">
            <svg>
              <circle cx={70} cy={70} r ={70}></circle>
              <circle cx={70} cy={70} r ={70} 
              style={{strokeDashoffset: 'calc(440 - (440 * 50) / 100)', stroke: ' var(--color-blue)'}}></circle>
            </svg>
            <div className="content4-number-percent">
              <p>50%</p>
            </div>
          </div>
        <p className='content4-text'>CONDIMENTUM</p>
        </div><div className="circle-box">
          <div className="percent">
            <svg>
              <circle cx={70} cy={70} r ={70}></circle>
              <circle cx={70} cy={70} r ={70} 
              style={{strokeDashoffset: 'calc(440 - (440 * 75) / 100)', stroke: ' var(--color-blue)'}}></circle>
            </svg>
            <div className="content4-number-percent">
              <p>75%</p>
            </div>
          </div>
        <p className='content4-text'>SOLLICITUDIN</p>
        </div><div className="circle-box">
          <div className="percent">
            <svg>
              <circle cx={70} cy={70} r ={70}></circle>
              <circle cx={70} cy={70} r ={70} 
              style={{strokeDashoffset: 'calc(440 - (440 * 100) / 100)', stroke: ' var(--color-blue)'}}></circle>
            </svg>
            <div className="content4-number-percent">
              <p>100%</p>
            </div>
          </div>
        <p className='content4-text'>VENENATIS</p>
        </div>

      </div>
    </div>
  )
}

export default Content4