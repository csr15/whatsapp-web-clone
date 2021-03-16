import Container from "./Container/Container";

import firebase from "./firebase/base";

import { useAuthState } from "react-firebase-hooks/auth";
import Signin from "./components/Signin/Signin";

const auth = firebase.auth();

const App = () => {
  const [user] = useAuthState(auth);
  console.log(auth.currentUser )

  return <>{user ? <Container /> : <Signin />}</>;
};

export default App;
