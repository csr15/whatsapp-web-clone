import React from "react";
import Inbox from "../Inbox/Inbox";
import Search from "../Search/Search";
import SidebarHeader from "../SidebarHeader/SidebarHeader";

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <SidebarHeader />
      <Search />
      <Inbox viewHandler={props.messageHandler} />
    </div>
  );
};

export default Sidebar;
