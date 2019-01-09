import React, { Component } from 'react';
//import socketIOClient from "socket.io-client";
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import ShareData from './ShareData';

const options = {
  title: {
    text: 'My stock chart'
  },
  rangeSelector: {
    selected: 2
  },
  series: [{
    type: 'ohlc',
    name: 'Marmik',
    data: [],
    dataGrouping: {
        units: [[
            'week', // unit name
            [1] // allowed multiples
        ], [
            'month',
            [1, 2, 3, 4, 6]
        ]]
    }
  }]
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
//      endpoint: "http://kaboom.rksv.net/",
      data: "",
      pageNumber: 0
    }
  }

  componentDidMount() {
/*
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);

    socket.on("api/", data => {
      console.log('check 2', socket.connected);
      this.setState({
        data: data
      })
    })
*/
    this.callApi()
  }

  async callApi() {
    const apiHead = {
      method: 'GET'
    };

    const request = new Request('http://kaboom.rksv.net/api/historical?interval=1%20HTTP/1.1', apiHead);

    const response = await fetch(request)
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const result = await response.json();
      this.setState({
        data: result
      });
/*
      .then((result) => {
          await result.json();
      }).then((data) => {
        this.setState({
          data: data
        })
      })
*/
  }

  render() {
    if(this.state.data === "") {
      return (
        <div>Loading</div>
      )
    }

    let tempData = [],
        products = [],
        sortArray = {};

    for(var i in this.state.data) {
      tempData.push(this.state.data[i].split(",", 6).map(Number))
    }

    sortArray = tempData.sort((previousArray, newArray) => previousArray[0] - newArray[0])
    options.series[0].data = sortArray;

//pagination code to fix performance issue 

    Object.entries(sortArray).forEach(([key, product]) => {
      products.push(<ShareData product={product} key={key} />)
    });

    return (
      <div>
        <div className="wrapper">
          <div className="printData">
            <ul>{products}</ul>
          </div>
          <div className="chartWrapper">
            <HighchartsReact
              highcharts={Highcharts}
              constructorType={'stockChart'}
              options={options}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
