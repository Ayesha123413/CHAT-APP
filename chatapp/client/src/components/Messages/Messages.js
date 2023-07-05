import React from 'react'
import './Messages.css'
import Message from '../Message/Message'
const Messages = ({ messages, name }) => {
  return (
    <div className="messages">
      {messages.map((message) => (
        <div>
          <Message message={message} name={name} />
        </div>
      ))}
    </div>
  )
}

export default Messages
