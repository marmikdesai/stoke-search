import React, { Component } from 'react';

class ShareData extends Component {
  render() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let product = this.props.product,
        date = new Date(product[0]),
        fullDate = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`

    return (
      <li>
        <div>{fullDate}</div>
        <div>{product[1]}</div>
        <div>{product[2]}</div>
        <div>{product[3]}</div>
        <div>{product[4]}</div>
        <div>{product[5]}</div>
      </li>
    );
  }
}

export default ShareData;
