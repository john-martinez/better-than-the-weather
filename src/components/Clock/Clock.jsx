import React, { Component } from 'react';
import './Clock.scss';
class Clock extends Component {
    state = { currentTime: "" }
    timerId = "";

    componentDidMount(){ 
        this.setState( {currentTime: this.retrieveTime()} )
    }

    componentDidUpdate(){
        clearInterval(this.timerId);
        this.timerId = setInterval(()=>this.setState({ 
            currentTime: this.retrieveTime()
        }), 1000)   
    }

    retrieveTime = () => {
        const today = new Date();
        let hours = "";
        if (today.getHours() === 0){
            hours = '1';
        }
        else if (today.getHours() > 12) {
            hours = today.getHours()-12;
            hours = hours < 10 ? '0' + hours : hours;
        }
        else {
            hours = today.getHours();
        }
        hours = hours < 10 ? '0' + hours : hours;
        const mins = `${today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes() }`
        const secs = `${today.getSeconds() < 10 ? '0' + today.getSeconds() : today.getSeconds() }`;
        return `${hours}:${mins}:${secs} ${today.getHours() > 11 ? "PM" : "AM"}`
    }
    render() {
        return (
            <div className="clock">
                <div className ="clock-container">
                <p className="clock__time">{this.state.currentTime}</p>
            </div>
            </div>
        )
    }
}

export default Clock