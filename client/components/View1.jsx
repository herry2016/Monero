import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'react-bootstrap'


export default class View1 extends Component {
  constructor(props) {
    super(props);
    this.checkmine = this.checkmine.bind(this)
    this.state = {
      total: 'calculating...'
    };
  }

  checkmine() {
    if (this.props.viewing === 1) {
      var totalHashes = this.props.miner.getTotalHashes();

      // console.log(totalHashes);
      this.setState({ total: totalHashes })
    }
  }

  componentDidMount() {
    setInterval(() => this.checkmine(), 3000)
  }

  render() {
    //let newTotal = props.total;
    // console.log("new total ", this.state.total);
    var sectionStyle = {
      height: '100vh',
      backgroundImage: "url('https://previews.123rf.com/images/albund/albund1708/albund170800115/84959632-A-physical-monero-cryptocurrency-in-gold-and-silver-coin-form-on-a-dark-studio-background-3D-render-Stock-Photo.jpg')",
    }
    return (
      
      <div id="viewOne" style={sectionStyle}>
        {/* <Button bsStyle="danger" bsSize="large" onClick={this.checkmine}>check</Button> */}
        <h1>Current User: {this.props.currentUser}</h1>
        <h1 id="contributions">{this.props.hashTotalCurrentUser}: hashes</h1>
      </div>
    )
  }
}
