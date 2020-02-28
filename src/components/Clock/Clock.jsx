import React, { Component } from 'react';

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
        // let hours = `${(today.getHours() > 12 ? today.getHours()-12 : today.getHours()) < 10 }`;
        console.log(today.getHours())
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
        const mins = today.getMinutes();
        const secs = `${today.getSeconds() < 10 ? '0' + today.getSeconds() : today.getSeconds() }`;
        return `${hours}:${mins}:${secs} ${today.getHours() > 11 ? "PM" : "AM"}`
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