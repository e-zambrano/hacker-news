import { Component } from 'react';
export default class SearchNews extends Component {
  state = {
    searchInput: '',
    searchType: 'story',
  };

  setSearchInput = (event) => {
    const searchInput = event.target.value;
    this.setState({ searchInput });
  };

  setSearchType = (event) => {
    const searchType = event.target.value;
    this.setState({ searchType });
  };

  onClickSearch = () => {
    const { searchInput, searchType } = this.state;

    //pass values to parent component
    //whom takes responsability of what to do with the values
    const { onSearchEvent } = this.props;
    onSearchEvent(searchInput, searchType);
  };

  render() {
    const { searchInput, searchType } = this.state;

    return (
      <div className="search-bar">
        <div>
          <input
            type="text"
            value={searchInput}
            placeholder="type something to search..."
            onChange={this.setSearchInput}
          />
          <button onClick={this.onClickSearch}>🔎 Search</button>
        </div>
        <div className="search-by">
          Search by:
          <label htmlFor="story">Story</label>
          <input
            type="radio"
            id="story"
            name="search-type"
            value="story"
            checked={searchType === 'story'}
            onChange={this.setSearchType}
          />
          <label htmlFor="author">Author</label>
          <input
            type="radio"
            id="author"
            value="author"
            name="search-type"
            checked={searchType === 'author'}
            onChange={this.setSearchType}
          />
        </div>
      </div>
    );
  }
}
