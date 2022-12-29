import React from 'react'
import './Content6.css'

function Content6() {
  return (
    <div className='content6-container'>
      <div className='content6-box-title'>
        <p style={{fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'}}>Maecenas ultrices faucibus felis</p>
        <p style={{fontSize : '2.5rem'}}>Nunc Lacus Nulla Luctus Duis</p>
      </div>
      <div className="content6-flexbox">
        <div className="content6-box">
          <div className="content6-imgbox">
            <div className="content6-img-circle"></div>
            <div>
              <p>D. Doe</p>
              <p>Adipiscing fusce eu velit</p>
            </div>
          </div>
          <div className="content6-databox">
            <p>Pulvinar tortor quis nisi in hac habitasse platea dictumst donec ac tellus fusce venenatis laoreet elit sed est tortor molestie in consectetuer fringilla suscipit ut odio ut ac.</p>
          </div>
        </div>
        <div className="content6-box">
          <div className="content6-imgbox">
            <div className="content6-img-circle"></div>
            <div>
            <p>E. Doe</p>
            <p>Mauris erat aliquam leo</p>
            </div>
          </div>
          <div className="content6-databox">
            <p>Orci vitae dolor scelerisque blandit morbi eu dui sed volutpat etiam leo leo bibendum vel dictum sed sollicitudin a mi pellentesque ligula nulla facilisi sed bibendum ornare.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content6