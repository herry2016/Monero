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
      backgroundImage: "url('https://previews.123rf.com/images/albund/albund1708/albund170800115/84959632-A-physical-monero-cryptocurrency-in-gold-and-silver-coin-form-on-a-dark-studio-background-3D-render-Stock-Photo.jpg')",
    }
    return (
      
      <div id="viewOne" style={sectionStyle}>
      
       
        <h1 id="contributions"> contributed $0.003</h1>
      </div>
    )
  }
}
