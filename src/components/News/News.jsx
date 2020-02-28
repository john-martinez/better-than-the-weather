import React from 'react';
import './News.scss';

function News(props){
    console.log(props.news)
    return (
    <div className="news">
        <p className="news__title"><strong>{props.news.title}</strong></p>
        <p className="news__blurb">{props.news.description}</p>
    </div>
    );
}

export default News