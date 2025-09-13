import React from 'react';
import './Chatbox.css';
import assets from '../../assets/assets';

const ChatBox = () => {
  return (
    <div className="chat-box">
      <div className="chat-user">
        {/* Profile image */}
        <img src={assets.profile_img} alt="Profile" className="profile" />

        {/* Username with green dot */}
        <p>
          Richard Sanford 
          <img  src={assets.green_dot} alt="Online" className="green-dot" />
        </p>

        {/* Help icon */}
        <img src={assets.help_icon} className="help" alt="Help Icon" />
      </div>
      <div className='chat-input'>
        <input type="text" placeholder='Send a message' />
        <input type="file" id='image' accept='image/png , image/jpeg' hidden/>
        <label htmlFor="image"> 
          <img src={assets.gallery_icon} alt="" />
        </label>
        <img src={assets.send_button} alt="" />
      </div>
    </div>
  );
};

export default ChatBox;
