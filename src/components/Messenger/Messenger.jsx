import React from "react";
import firebase from "../../firebase/base";

const Messenger = ({ messages, uid }) => {
  return (
    <div className="messenger">
      {messages &&
        messages.map((msg) => {
          const messageClass = msg.uid === uid ? "sent" : "received";

          return (
            <div className={`message ${messageClass}`}>
              <p>{msg.text}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Messenger;
