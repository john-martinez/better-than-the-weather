import React, { Component } from 'react';

class Clock extends Component {
    state = { currentTime: "" }
    timerId = "";

    componentDidMount(){ 
        this.setState( {currentTime: ""} )
    }

    componentDidUpdate(){
        const today = new Date();
        clearInterval(this.timerId);
        this.timerId = setInterval(()=>this.setState({ 
            currentTime: `${today.getHours()}:${today.getMinutes()}:${today.getSeconds() < 10 ? '0' + today.getSeconds() : today.getSeconds() }` 
        }), 1000)   
    }
    render() {
        return (
            <div className="clock">
                <p>{this.state.currentTime}</p>
            </div>
        )
    }
}

export default Clock