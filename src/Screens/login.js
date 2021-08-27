import React from 'react';
import ReactDOM from 'react-dom';
import './loginStyle.css';

export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          toggle: 1,
          codeSent: 0,
      };
    };

    render(){
        return(
            <div className="Container">
                <div className="heading">
                    <div 
                        className={this.state.toggle?"toggleActive":"signUpToggle"}
                        onClick={this.state.toggle?
                            null:
                            ()=>{this.setState({toggle: !this.state.toggle})}}
                    >
                        Sign Up
                    </div>
                    <div 
                        className={this.state.toggle?"loginToggle":"toggleActive"}
                        onClick={this.state.toggle?
                            ()=>{this.setState({toggle: !this.state.toggle})}:
                            null}
                    >
                        Login
                    </div>
                </div>
                <div className="loginDetails">
                    {this.state.toggle?
                        <div>
                        <div className="row"><div className="detailText">Full Name:</div><div className="detailText" style={{color: 'red'}}>*</div></div>
                        <input className="inputBox"/>
                        </div>
                    :null}
                    <div className="row"><div className="detailText">Contact Details:</div><div className="detailText" style={{color: 'red'}}>*</div></div>
                    <input className="inputBox"/>
                    <div className="detailText">Enter Verification Code:</div>
                    <input className="inputBox"/>
                </div>
                <div className="buttons">
                    <div>
                        <button className="Button">{this.state.codeSent?'Re-send Code':'Send Code'}</button>
                    </div>
                    <div>
                        <button className="Button">{this.state.toggle?'Sign Up':'Login'}</button>
                    </div>
                </div>
            </div>
        )
    }
}
