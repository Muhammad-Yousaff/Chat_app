import React from 'react';
import './Chatbox.css';
import assets from '../../assets/assets';

const ChatBox = () => {
  return (
    <div className="chat-box">
      <div className="chat-user">
        <img src={assets.profile_img} alt="Profile" />
        <p>
          Richard Sanford <img src={assets.green_dot} alt="Online" />
        </p>
        <img src={assets.help_icon} className="help" alt="Help Icon" />
      </div>
    </div>
  );
};

export default ChatBox;
