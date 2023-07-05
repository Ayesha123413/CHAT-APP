import React from 'react'
import './Message.css'
const Message = ({ message, name }) => {
  let isSentByCurrentUser = false

  if (message.user === name) {
    isSentByCurrentUser = true
  }
  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <div className="messagebox backgroundDark ">
        <p className="messagetext colorWhite">{message.text}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart ">
      <div className="messagebox backgroundLight">
        <p className="messagetext colorDark">{message.text}</p>
      </div>
      <p className="sendername">{message.user}</p>
    </div>
  )
}

export default Message
