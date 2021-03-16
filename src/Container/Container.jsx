import React, { useState } from "react";

import "./Container.css";
import Sidebar from "../components/Sidebar/Sidebar";
import MessageContainer from "../components/MessageContainer/MessageContainer";

const Container = () => {
  const [userDetails, setUserDetails] = useState("");
  return (
    <div className="container">
      <Sidebar
        messageHandler={({ data }) => {
          setUserDetails(data);
        }}
      />
      <MessageContainer userDetails={userDetails} />
    </div>
  );
};

export default Container;
