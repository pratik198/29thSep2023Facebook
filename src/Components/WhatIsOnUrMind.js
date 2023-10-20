import React from "react";
import "../Styles/WhatIsOnUrMind.css";
import Avatar from '@mui/material/Avatar';

function WhatIsOnUrMind() {
  return (
    <div className="wht-is-on-your-mind">
      <div className="mind-box">
        <div className="boxx">
        <input
              className="box__name"
              type="text"
              placeholder="What's on your mind..?"
            />
        </div>
        <div className="parent-avtar">
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </div>
      </div>
    </div>
  );
}

export default WhatIsOnUrMind;
