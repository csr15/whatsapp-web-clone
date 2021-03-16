import React, { useState, useRef } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";

import Messenger from "../Messenger/Messenger";
import firebase from "../../firebase/base";
import MessengerFooter from "../MessengerFooter/MessengerFooter";
import MessengerHeader from "../MessengerHeader/MessengerHeader";
import Intro from "../Intro/Intro";

const MessageContainer = (props) => {
  const dummy = useRef();
  const [formValue, setFormValue] = useState("");
  const firestore = firebase.firestore();
  const auth = firebase.auth();

  const messageRef = firestore.collection("messages");
  const query = messageRef.orderBy("createdAt").limit(25);
  const [messages] = useCollectionData(query, { idField: "id" });

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!formValue) {
      return;
    }

    await messageRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid: auth.currentUser.uid,
      photoURL: auth.currentUser.photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behaviour: "smooth" });
  };
  return (
    <div className="message__container">
      {props.userDetails ? (
        <>
          <MessengerHeader
            name={props.userDetails.firstName}
            avatar={props.userDetails.avatar}
          />
          <Messenger messages={messages} uid={auth.currentUser.uid} />
          <div ref={dummy}></div>
          <MessengerFooter
            message={formValue}
            messageHandler={(e) => setFormValue(e.target.value)}
            onSendMessageHandler={sendMessage}
          />
        </>
      ) : (
        <Intro />
      )}
    </div>
  );
};

export default MessageContainer;
