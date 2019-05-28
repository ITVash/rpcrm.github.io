import React, {Component} from 'react';

const apiKey = "80ba6484ce8841618bee940b2f107937";
export default class Post extends Component {
  state = {
    post: []
  }
  newNews = async () => {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?sources=google-news-ru&apiKey=${apiKey}`);
    const json = await res.json();
    this.setState({
      post: json.articles
    });
  }  
  creatVer = (article) => {
    return (
      <div key={article.title}>
        <a href={article.url} target="_blanc">
          <h1>{article.title}</h1>
          <img src={article.urlToImage} alt={article.title}/>
          <p>{article.description}</p>
        </a>
      </div>
    );
  }
  componentDidMount() {
    this.newNews();
  }
  render() {
    const i = this.state.post;
    const items = i.map(this.creatVer);
    return(
      <div>
        {items}
      </div>
    )
  }
}