import React from 'react'
import './Infobar.css'
import closeIcon from '../../Assets/logout.png'
import onlineIcon from '../../Assets/onlineIcon.png'
const Infobar = ({ room }) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img className="onlineIcon" src={onlineIcon} alt="online img" />
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          <img className="closeIcon" src={closeIcon} alt="closeimg" />
        </a>
      </div>
    </div>
  )
}

export default Infobar
