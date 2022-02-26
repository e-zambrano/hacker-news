import { Component } from 'react';
import axios from 'axios';
import News from './components/News';
import Search from './components/Search';

export default class App extends Component {
  baseApiUrl = 'http://hn.algolia.com/api/v1/search?';

  state = {
    isLoading: true,
    news: [],
  };

  componentDidMount() {
    this.getNews('');
  }

  getNews = (params) => {
    this.setState({ isLoading: true });

    const url = `${this.baseApiUrl}${params}`;

    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => {
        this.setState({ isLoading: false, news: data.hits });
      });
  };

  getQueryParams = (searchQuery, searchType) => {
    const params =
      searchType === 'story'
        ? `query=${searchQuery}&tags=story`
        : `tags=story,author_${searchQuery}`;

    return params;
  };

  onSearch = (searchQuery, searchType) => {
    const params = this.getQueryParams(searchQuery, searchType);

    this.getNews(params);
  };

  render() {
    const { isLoading, news } = this.state;
    return (
      <div>
        <div>
          <Search onSearchEvent={this.onSearch} />
        </div>

        {isLoading ? (
          <div>Loading stories ...</div>
        ) : (
          <div>
            {news.map((n) => {
              return <News key={n.objectID} {...n} />;
            })}
          </div>
        )}
      </div>
    );
  }
}
