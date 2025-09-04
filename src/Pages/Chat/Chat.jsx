import React from 'react'
import './Chat.css'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../Components/RightSidebar/RightSidebar'
import ChatBox from '../../Components/ChatBox/ChatBox'
const Chat = () => {
  return (
    <div className='chat'>
      <div className="chat-container">
        <LeftSidebar/>
        <RightSidebar/>
        <ChatBox/>
      </div>
    </div>
  )
}

export default Chat