import React, { Component } from 'react';

class Show extends Component {
  render() {
    let val = this.props.show;
    return (
      <div className="Show">
        <a href={val.show.officialSite} target="_blank" rel="noopener noreferrer">
          <img src={val.show.image != null ? val.show.image.medium : ''} alt={val.show.name} />
          <div className="container">
            <div className="holder">
              <div>{val.score}</div>
              <div>{val.show.name}</div>
              <div>{val.show.language}</div>
              <div>{val.show.rating.average}</div>
              <div>{val.show.status}</div>
            </div>
            <div className="summary" dangerouslySetInnerHTML={{ __html: val.show.summary }} ></div>
          </div>
        </a>
      </div>
    );
  }
}

export default Show;
