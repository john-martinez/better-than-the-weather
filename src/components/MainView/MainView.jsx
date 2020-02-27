import React, { Component } from 'react';
import axios from 'axios';
const API_KEY = "d6e0f59ad2174a7b9e3abd197d40271a";
const LINK = "http://api.openweathermap.org/data/2.5/weather";

class MainView extends Component {
    state = { location: "", weather: "" }

    componentDidMount(){
        document.title = 'Better Than The Weather App';
        navigator.geolocation.getCurrentPosition(position=> {
            let long = position.coords.longitude;
            let lat = position.coords.latitude;
            let weather = "";
            let location = "";
            axios.get(`${LINK}?lat=${lat}&lon=${long}&appid=${API_KEY}`)
            .then(data=>{
                weather = data.data.weather[0].main;
                location = data.data.name;
            })
            .then(data=>this.setState({location, weather}))
            .catch(console.log)
        })
    }

    componentDidUpdate(prevProps, prevState){
        console.log(this.state.location);
        console.log(this.state.weather)
    }
    render(){   
        return (
            <div>
                <p>Location: {this.state.location}</p>
                <p>Weather: {this.state.weather}</p>
            </div>
        )
    }    
}

export default MainView;