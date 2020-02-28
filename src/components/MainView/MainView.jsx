import React, { Component } from 'react';
import Clock from '../Clock/Clock';
import axios from 'axios';
import './MainView.scss';
const API_KEY = "d6e0f59ad2174a7b9e3abd197d40271a";
const LINK = "http://api.openweathermap.org/data/2.5/weather";

class MainView extends Component {
    state = { location: "", weather: "", images: []}

    componentDidMount(){
        document.title = 'Better Than The Weather App';
        navigator.geolocation.getCurrentPosition(position=> {
            let long = position.coords.longitude;
            let lat = position.coords.latitude;
            let weather = "";
            let location = "";
            let images = [];
            let timeOfDay = new Date(Date.now()).getHours() < 17 ? "morning" : "night";
            axios.get(`${LINK}?${this.props.match.params.city ? `q=${this.props.match.params.city}`: `lat=${lat}&lon=${long}`}&appid=${API_KEY}`)
            .then(data=>{
                weather = data.data.weather[0].description;
                location = data.data.name
            })
            .then(data=>{
                let queryWeather = weather.split(" ").join("%20");
                let queryLocation = location.split(" ").join("%20");
                return axios.get(`https://api.unsplash.com/search/photos?query=${queryWeather}%20${queryLocation}%20${timeOfDay}&client_id=fa6zT77K5kKv6fbg8vwcZgBroVESwIu6_aLCo2FNC7Q`)
            })
            .then(data=>images = data.data.results)
            .then(data=>this.setState({location, weather, images}))
            .catch(console.log)
        })
    }

    componentDidUpdate(prevProps, prevState){
        this.refs.mainBg.style.backgroundImage = `url("${this.state.images[Math.floor(Math.random() * Math.floor(10))].urls.full}")`;
    }
    render(){  
        if (this.state.images.length > 0){
            return (
                <div className="mainview">
                    <div className="mainview__bg" ref="mainBg"></div>
                    <div className="mainview__overlay"></div>
                    <div className="mainview__blurb">
                        <Clock />
                        <p className="mainview__location">{this.state.location}</p>
                        <p className="mainview__weather">{this.state.weather}</p>
                    </div>

                </div>
            )
        } else {
            return <h1>LOADING</h1>
        }
    }    
}

export default MainView;