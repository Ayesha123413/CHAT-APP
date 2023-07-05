import React, { useEffect, useState } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import Infobar from '../Infobar/Infobar'
import './Chat.css'
import Input from '../Input/Input'
import Messages from '../Messages/Messages'

let socket
const Chat = ({ location }) => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const Endpoint = 'localhost:5000'

  useEffect(() => {
    const { search } = window.location
    const { name, room } = queryString.parse(search)
    setName(name)
    setRoom(room)
    socket = io(Endpoint)

    socket.emit('join', { name, room })
    console.log(socket)
    return () => {
      socket.emit('disconnect')
      socket.off()
    }
  }, [Endpoint, window.location.search])

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message])
    })
    console.log(messages)
  }, [messages])

  //function for sending message
  const sendMessage = (e) => {
    e.preventDefault()
    if (message) {
      socket.emit('sendmessage', message, () => setMessage(''))
    }
  }
  console.log(message, messages)
  return (
    <div className="outerContainer">
      <div className="container">
        <Infobar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          sendMessage={sendMessage}
          setMessage={setMessage}
        />
      </div>
    </div>
  )
}

export default Chat
