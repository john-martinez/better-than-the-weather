import React, { Component } from 'react';
import Clock from '../Clock/Clock';
import NewsList from '../NewsList/NewsList';
import axios from 'axios';
import './MainView.scss';
const API_KEY = "d6e0f59ad2174a7b9e3abd197d40271a";
const LINK = "https://api.openweathermap.org/data/2.5/weather";

class MainView extends Component {
    state = { location: "", weather: "", images: [], advice: ""}
    stillMounted = false;
    componentDidMount(){
        this.stillMounted = true;
        document.title = 'Better Than The Weather App';
        navigator.geolocation.getCurrentPosition(position=> {
            let long = position.coords.longitude;
            let lat = position.coords.latitude;
            console.log(long,lat)
            let weather = "";
            let location = "";
            let images = [];
            let temp = 0;
            let advice = "";
            let timeOfDay = new Date(Date.now()).getHours() < 17 ? "morning" : "night";
            axios.get(`${LINK}?${this.props.match.params.city ? `q=${this.props.match.params.city}`: `lat=${lat}&lon=${long}`}&appid=${API_KEY}`)
            .then(data=>{
                weather = data.data.weather[0].description;
                location = data.data.name;
                temp = Math.floor(data.data.main.temp-273.15);
                switch(true){
                    case (temp > 25): advice = "Make sure to stay hydrated and wear sunscreen!"; break;
                    case (temp > 0): advice = "It's a nice day"; break;
                    case (temp > -11): advice = "Wear layers and bring your gloves!"; break;
                    case (temp > -25): advice = "Don't even bother coming out"; break;
                }
            })
            .then(data=>{
                let queryWeather = weather.split(" ").join("%20");
                return axios.get(`https://api.unsplash.com/search/photos?query=${queryWeather}%20${timeOfDay}%20${location}&client_id=fa6zT77K5kKv6fbg8vwcZgBroVESwIu6_aLCo2FNC7Q`)
            })
            .then(data=>images = data.data.results)
            .then(data=>this.stillMounted ? this.setState({location, weather, images, advice}) : '')
            .catch(console.log)
        })
    }

    componentDidUpdate(prevProps, prevState){
        if (this.refs.mainBg.style.backgroundImage === ""){
            this.refs.mainBg.style.backgroundImage = `url("${this.state.images[Math.floor(Math.random() * Math.floor(10))].urls.full}")`;
        }
    }
    componentWillUnmount(){
        this.stillMounted = false;
    }
    render(){  
        if(this.props.match.path === '/news' && this.state.location){
            return (
                <div className="mainview">
                    <div className="mainview__bg" ref="mainBg"></div>
                    <div className="mainview__overlay"></div>
                    <NewsList loc={this.state.location}/>
                </div>
            )
        } else {
            if (this.state.images.length > 0){
                return (
                    <div className="mainview">
                        <div className="mainview__bg" ref="mainBg"></div>
                        
                        <div className="mainview__overlay"></div>
                        <div className="mainview__blurb">
                            <Clock />
                            <p className="mainview__location">{this.state.location}</p>
                            <p className="mainview__weather">{this.state.weather}</p>
                            <p className="mainview__advice">{this.state.advice}</p>
                        </div>
                    </div>
                )
            } else {
                return <h1>LOADING</h1>
            }
        }
    }    
}

export default MainView;