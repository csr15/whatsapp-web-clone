import React, { useState } from "react";

import Avatar from "../../assets/images/avatar.webp";
import Search from "../../assets/images/message-search.svg";
import Menu from "../../assets/images/menu.svg";

const MessengerHeader = (props) => {
  const [showContactTap, setShowContactTap] = useState(true);

  setTimeout(() => {
    setShowContactTap(false);
  }, 3000);

  return (
    <div className="messenger__header">
      <div className="avatar">
        <img src={props.avatar} alt="Whatsapp-Clone" />
        <div style={{ marginLeft: "15px" }}>
          <h5>{props.name}</h5>
          {showContactTap && <p>Click Here to see contact info</p>}
        </div>
      </div>
      <div className="icons">
        <div className="icons__panel" style={{ marginRight: "10px" }}>
          <img src={Search} alt="Whatsapp-Clone" />
        </div>
        <div className="icons__panel">
          <img src={Menu} alt="Whatsapp-Clone" />
        </div>
      </div>
    </div>
  );
};

export default MessengerHeader;
