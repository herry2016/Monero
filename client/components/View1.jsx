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
      width: '100%',
      height: '100%',
      backgroundImage: "url('https://www.monero.how/photos/monero-coin7-1024x909.jpg')",
      repeat: "no-repeat"
    }
    return (
      
      <div id="viewOne" style={sectionStyle}>
       
        View1
      </div>
    )
  }
}

// {document.getElementById("viewOne").appendChild(elem)}
// {elem.src = 'https://www.monero.how/photos/monero-coin7-1024x909.jpg'}