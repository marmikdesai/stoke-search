import React, { Component } from 'react';

class SearchBox extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(event.target.querySelector("#search").value, event.target.querySelector("select").value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <select>
          <option value="shows">Shows</option>
        </select>
        <input name="text" type="text" placeholder="Search" id="search"/>
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchBox;
