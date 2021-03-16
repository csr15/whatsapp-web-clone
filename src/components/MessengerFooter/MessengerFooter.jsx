import React from "react";

import Emoji from "../../assets/images/smiley.svg";
import Attach from "../../assets/images/attach.svg";
import Mic from "../../assets/images/mic.svg";

const MessengerFooter = ({messageHandler, onSendMessageHandler, message}) => {
  return (
    <div className="messenger__footer">
      <img src={Emoji} alt="Whatsapp-Clone" />
      <img src={Attach} alt="Whatsapp-Clone" />
      <form className="form__group" onSubmit={onSendMessageHandler}>
        <input
          type="text"
          name="message"
          id="message"
          autoComplete="off"
          placeholder="Type a message"
          value={message}
          onChange={messageHandler}
        />
      </form>
      <img src={Mic} alt="Whatsapp-Clone" />
    </div>
  );
};

export default MessengerFooter;
