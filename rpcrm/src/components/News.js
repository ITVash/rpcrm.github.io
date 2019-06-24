import React, { Component } from 'react';
import NewsServices from '../services/NewsServices';

const apiKey = "80ba6484ce8841618bee940b2f107937";
export default class News extends Component {
  state = {
    post: []
  }
  res = new NewsServices();
  componentDidMount() {
    this.onload();
  }
  onload = async () => {
    const news = await this.res.getNews();
    try {
      this.setState({ post: news });
      console.log(`Массив2: ${news}`);
    } catch (error) {
      throw new Error(`Ошибка: ${error}`);
    }
  }
  renderPost(arr) {
    return arr.map(src => {
      const { title, url, description, urlToImage } = src;
      return (
        //<div>
        <a href={url}>
          <h1>{title}</h1>
          <img src={urlToImage} alt={title} />
          <p>{description}</p>
        </a>
        //</div>
      )
    }).join('\n');
  }

  newNews = async () => {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?sources=google-news-ru&apiKey=${apiKey}`);
    const json = await res.json();
    return json.articles.map(article => this.creatVer(article)).join('\n');
  }
  creatVer(article) {
    return `
    <a href=${article.url}>
      <h1>${article.title}</h1>
      <img src=${article.urlToImage} alt=${article.title}/>
      <p>${article.description}</p>
    </a>
    `;
  }

  render() {
    //const {post} = this.state;
    //const items = this.renderPost(post);
    //const nn = this.newNews;
    return (
      <div className="tt">
        {this.newNews}
      </div>
    )
  }
}