import React, { Component } from 'react';
import Show from './Show';

class ShowList extends Component {
  render() {
    let shows = [];
    Object.entries(this.props.shows).forEach(([key, show]) => {
      shows.push(<Show show={show} key={key} />)
    });

    return (
      <div className="list-group">
        {shows}
      </div>
    )
  }
}
export default ShowList;
