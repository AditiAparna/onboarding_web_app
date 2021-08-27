import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './components/header';
import Login from './Screens/login';
import UnderConstruction from "./Screens/underConstruction";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <div className="Intro">
        <div style={{width:650, height:400}}>
          <div className="image" />
        </div>
        <div>
          <h1 className="heading">Hey There! Having trouble making friends?</h1>
          <p className="content">We are here to help you find your friends, no matter who you are, we will always welcome you. Come, let's be friends!!</p>
          <div className="buttonContainer">
            <button className="button">Join Us Now</button>
          </div>
        </div>
      </div>
      <div className="bottomImage" />
      <Login />
      <UnderConstruction />
        {/* <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route exact path="/" component={App} />
          <Route path="/Screens" exact component={Login} />
        </Switch> */}
      </Router>
    </div>
  );
}

export default App;
