import React from 'react'
import './Input.css'
import sendIcon from '../../Assets/send.png'
const Input = ({ message, sendMessage, setMessage }) => (
  <form className="form">
    <input
      className="messageinput"
      placeholder="Type a message..."
      value={message}
      onChange={(e) => {
        setMessage(e.target.value)
      }}
      onKeyPress={(e) => e.key === 'Enter' && sendMessage(e)}
    />
    <button className="inputbtn" onClick={(e) => sendMessage(e)}>
      <img src={sendIcon} />
    </button>
  </form>
)

export default Input
