export default class NewsServices {
  constructor() {
    const apiKey = "80ba6484ce8841618bee940b2f107937";
    this._apiBase = `https://newsapi.org/v2/top-headlines?sources=google-news-ru&apiKey=${apiKey}`;
  }
  getNews = async () => {
    const res = await fetch(`${this._apiBase}`);
    const arc = await res.json();
    //console.log(`News: ${arc.articles}`);
    return arc.articles;
  }
}