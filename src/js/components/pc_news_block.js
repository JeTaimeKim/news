import React from 'react';
import{Card} from 'antd';
import {BrowserRouter as Router,HashRouter,Link,BrowserRouter,history} from 'react-router-dom';
import jsonp from '../common/commonJson';

export default class PCNewsBlock extends React.Component{
  constructor(){
    super();
    this.state={
      news:''
    };
  }

  componentWillMount(){
var myFetchOptions={
      method:'GET'
    };
    fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type='+this.props.type+
    '&count='+this.props.count,myFetchOptions)
    .then(response=>response.json())
    .then(json=>this.setState({news:json}));
  };


  render(){

    const {news} =this.state;
    const newsList=news.length
    ?
    news.map((newsItem,index)=>(
  
      <li key={index}>

        <Link to={`/details/${newsItem.uniquekey}`} target='_blank'>
          {newsItem.title}
        </Link>

      </li>
    ))
    :
    '没有加载任何新闻';

    return(
      <div class='topNewsList'>
        <Card>

          <ul>
            {newsList}
          </ul>

        </Card>
      </div>
    );
  };
}
