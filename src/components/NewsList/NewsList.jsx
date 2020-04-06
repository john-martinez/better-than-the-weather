import React, { Component } from 'react';
import News from '../News/News';
import axios from 'axios';
import './NewsList.scss';

// const API_KEY = "apiKey=5365a5d284064c309a7bf33dfe7f28f3";
class NewsList extends Component {
    stillMounted = false;
    state={news: []}
    componentDidMount(){
        this.stillMounted = true;
        axios.get(`https://newsapi.org/v2/everything?q=${this.props.loc}&apiKey=5365a5d284064c309a7bf33dfe7f28f3`)
        .then(data=>this.stillMounted ? this.setState({news: data.data.articles}) : '')
        .catch(console.log);
    }

    componentWillUnmount(){ this.stillMounted = false; }
    render(){
        console.log(this.props.loc);
        if (this.state.news.length > 0) {
            return (
                <div className="news-list">
                    { this.state.news.map((item,i)=><a key={i} href={item.url} target="_blank"> <News  news={item} /></a>) }    
                </div>
            )
        } else {
            return <></>
        }
    }
}

export default NewsList