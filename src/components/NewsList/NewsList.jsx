import React, { Component } from 'react';
import News from '../News/News';
import axios from 'axios';
import './NewsList.scss';

const LINK = "http://newsapi.org/v2/everything?q=vancouver&apiKey=5365a5d284064c309a7bf33dfe7f28f3"
class NewsList extends Component {
    state={news: []}
    componentDidMount(){
        axios.get(LINK)
        .then(data=>this.setState({news: data.data.articles}))
        .catch(console.log);
    }
    componentDidUpdate(){
        console.log(this.state.news);
    }
    render(){
        if (this.state.news.length > 0) {
            return (
                <div className="news-list">
                    { this.state.news.map((item,i)=><News key={i} news={item}/>) }    
                </div>
            )
        } else {
            return <h2>LOADING</h2>
        }
    }
}

export default NewsList