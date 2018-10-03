// Lamp.js
import React, { Component } from 'react';
import './Lamp.css'

class Lamp extends Component {

    constructor(props) {
        super(props);
        this.state = {
          on: props.on
        };
    }
    
    handleClick = () => {
        this.setState({ on: !this.state.on });
    };

    render() {
        const light = this.state.on ? 'on' : 'off';
        return (
        <div className="Lamp">
            <button 
                /*className={light}>{light.toUpperCase()} */
                onClick={this.handleClick}
                className={light}
            >
                {light.toUpperCase()}
            </button>
            <figure className={light} />
        </div>
    );
  }
}

export default Lamp;