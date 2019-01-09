import React, { Component } from 'react';
import SearchBox from './SearchBox';
import ShowList from './ShowList';

class Search extends Component {

  handleSearch = (val, searchType) => {
    const url = `http://api.tvmaze.com/search/${searchType}?q=${val}`;

    fetch(url)
      .then(response => response.json())
      .then((shows) => {
        this.setState({
          shows: shows
        });
      });
  }

  render() {
    return (
      <div>
        <h1>Search TV Shows </h1>
        <SearchBox handleSubmit={this.handleSearch} />
        {
          this.state != null ?
            this.state.shows.length > 0 ?
              <ShowList shows={this.state.shows} /> :
              <div>Found Nothing</div>
            : null
        }

      </div>
    );
  }
}

export default Search;
