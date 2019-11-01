import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import EvenComponent from './components/EvenComponent';
import OddComponent from './components/OddComponent';

class App extends Component{
  constructor(){
    super();
    this.counter = 21;
    this.state = {
      myState: "TBD"
    };
  }
  onPushMe = () => {
    console.log("You pushed me");
    this.counter++;
    this.setState({
      myState: "now: " + this.counter
    });
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>I am in control of this application and my name is Kelly syntax ⇒ {this.state.myState}.</h1>
          {this.counter % 2 === 0 ? <EvenComponent />:<OddComponent />}
          <button onClick={this.onPushMe}>
            Push Me
          </button>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <MyComponent whatToSay="Whatever" func={this.onPushMe}/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
