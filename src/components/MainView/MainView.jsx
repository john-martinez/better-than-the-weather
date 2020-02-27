import React, { Component } from 'react';
import axios from 'axios';
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
            axios.get(`${LINK}?lat=${lat}&lon=${long}&appid=${API_KEY}`)
            .then(data=>{
                weather = data.data.weather[0].main;
                location = data.data.name;
            })
            .then(data=> axios.get(`https://api.unsplash.com/search/photos?query=${location}%20${weather}&client_id=fa6zT77K5kKv6fbg8vwcZgBroVESwIu6_aLCo2FNC7Q`))
            .then(data=>images = data.data.results)
            .then(data=>this.setState({location, weather, images}))
            .catch(console.log)
        })
    }

    componentDidUpdate(prevProps, prevState){
        console.log(this.state.location);
        console.log(this.state.weather);
        console.log(this.state.images);
    }
    render(){  
        if (this.state.images){
            return (
                <div>
                    {this.state.images.map(item=><img src={item.urls.full} key={item.id} alt={item.description} /> )}
                    <p>Location: {this.state.location}</p>
                    <p>Weather: {this.state.weather}</p>
                </div>
            )
        } else {
            return <h1>LOADING</h1>
        }
    }    
}

export default MainView;