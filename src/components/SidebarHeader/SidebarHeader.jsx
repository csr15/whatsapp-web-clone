import React from "react";

import Avatar from "../../assets/images/avatar.webp";
import Status from "../../assets/images/status.svg";
import Chat from "../../assets/images/chat.svg";
import Menu from "../../assets/images/menu.svg";

const SidebarHeader = () => {
  return (
    <div className="sidebar__header">
      <div className="avatar">
        <img src={Avatar} alt="Whatsapp-Clone" />
      </div>
      <div className="icons">
        <div className="icons__panel" style={{marginRight: '10px'}}>
          <img src={Status} alt="Whatsapp-Clone" />
        </div>
        <div className="icons__panel" style={{marginRight: '10px'}}>
          <img src={Chat} alt="Whatsapp-Clone" />
        </div>
        <div className="icons__panel">
          <img src={Menu} alt="Whatsapp-Clone" />
        </div>
      </div>
    </div>
  );
};

export default SidebarHeader;
