import React from "react";
import Logo from "../../assets/images/logo.svg";

import firebase from "../../firebase/base";

const auth = firebase.auth();

function Signin() {
  const signinWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div className="signin">
      <header>
        <div className="logo">
          <img src={Logo} alt="Whatsapp-web clone" />
          <h1>WHATSAPP WEB CLONE</h1>
        </div>
      </header>
      <div className="container">
        <h4>Signin with google to continue</h4>
        <button onClick={signinWithGoogle}>Sign in with google</button>

        <aside>
          <p>
            <strong>NOTE:</strong>This is a whatsapp clone so I'm using google
            to initiate coversation
          </p>
        </aside>
      </div>
    </div>
  );
}

export default Signin;
