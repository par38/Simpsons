// src/App.js
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Quotes from "./Quotes";
import Lamp from "./Lamp";
// import Working from "./Working";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pause: props.pause
    };
  }

  handleClick = () => {
    this.setState({ pause: !this.state.pause });
  };


  render() {

    const workingPause = this.state.pause ? 'Working' : 'Pause';
    // let workingPause = ""
    // if (this.state.pause){
    //   workingPause = "Working"
    // }else {
    //   workingPause =  'Pause'
    // }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={workingPause} alt="logo" 
            // onClick={this.handleClick}
            // className={workingPause}
          />
          <h1 className="App-title">Simpson Quotes</h1>
        </header>

    
        <div className="">
            <button 
                onClick={this.handleClick}
            >
                {workingPause.toUpperCase()}
            </button>
            <figure className={workingPause} />
        </div>
        <Lamp on />
        <Lamp />
        <Quotes />
      </div>
    );
  }
}

export default App;
