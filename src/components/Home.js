import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="Intro">
        <div className="outerImage">
          <div className="image" />
        </div>
        <div>
          <h1 className="heading">Hey There! Having trouble making friends?</h1>
          <p className="content">
            We are here to help you find your friends, no matter who you are, we
            will always welcome you. Come, let's be friends!!
          </p>
          <div className="buttonContainer">
            <Link to="/SignUp">
              <button className="button">Join Us Now</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bottomImage" />
    </div>
  );
}
