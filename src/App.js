import "./App.css";
import Header from "./components/header";
import Login from "./Screens/login";
import UnderConstruction from "./Screens/underConstruction";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import {firebase} from "firebase/app";
// import "firebase/auth";
// import firebase from "firebase/app";
// import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

// function setUpRecaptcha(){
//   window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
//     'size': 'invisible',
//     'callback': (response) => {
//       // reCAPTCHA solved, allow signInWithPhoneNumber.
//       onSignInSubmit();
//     }
//   });
  
// }

// function onSignInSubmit(){

//     const phoneNumber = "+91 1234567897";
//     const appVerifier = window.recaptchaVerifier;

//     const auth = getAuth();
//     signInWithPhoneNumber(auth, phoneNumber, appVerifier)
//         .then((confirmationResult) => {
//           // SMS sent. Prompt user to type the code from the message, then sign the
//           // user in with confirmationResult.confirm(code).
//           window.confirmationResult = confirmationResult;
//           // ...
//         }).catch((error) => {
//           // Error; SMS not sent
//           // ...
//         });
//   }
function App() {  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            component={() => (
              <div>
                <Header />
                <Home />
              </div>
            )}
          />
          <Route path="/Login" exact component={() => <Login login={1}/>} />
          <Route path="/SignUp" exact component={() => <Login login={0}/>} />
          <Route path="/soon" exact component={() => <UnderConstruction />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
