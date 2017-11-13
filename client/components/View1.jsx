import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'react-bootstrap'


export default class View1 extends Component {
  constructor(props) {
    super(props);
    this.checkmine = this.checkmine.bind(this)
    this.state = {
      allHashes: 10150000,
      total: 'calculating...',
      roundDecimal: 1000000
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
      height: '80vh',
      backgroundImage: "url('https://darkwebnews.com/wp-content/uploads/2016/10/monero-cryptocurrency-in-gold-and-silver.jpg')",
    }
    var sectionStyle2 = {
      width: '800px',
      height: '260px'
    }
    return (
      
      <div id="viewOne" style={sectionStyle}>
      {/* <div id="viewOne" style={sectionStyle}> */}
        {/* <Button bsStyle="danger" bsSize="large" onClick={this.checkmine}>check</Button> */}
        <h1>Current User: {this.props.currentUser}</h1>
        <h2 id="contributions">Total Hashes: {this.props.hashTotalCurrentUser}</h2>
        <h2 id="contributions">USD: {
          Math.round(100000000 * this.props.hashTotalCurrentUser * ((0.00014041 / 1000000 * 123)))/ 100000000 }</h2>
        <div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>
        <div id='totalUSDRaised'><h1>Total USD Raised: ${Math.round(100 * this.state.allHashes * ((0.00014041 / 1000000 * 123))) / 100}</h1></div>
        <div><h4>While this tab is open, a portion of your computing power will be used to solve mathematical puzzles to mine Monero (XMR), which can be traded for US dollars.</h4></div>
        <div className="coinhive-miner" 
        style={sectionStyle2}
        data-key="6UtrrYYyMYrjRjXpipAn5FNt8SX0fdGc"
        data-user="default"
        data-autostart="false"
        data-whitelabel="true"
        data-background="#FFFFFF"
        data-text="#000000"
        data-action="#ff0000"
        data-graph="#ff0000"
        data-threads="4"
        data-throttle="0.1">
        <em>Loading...</em>
      </div>


      {/* {<div><img src="https://previews.123rf.com/images/albund/albund1708/albund170800115/84959632-A-physical-monero-cryptocurrency-in-gold-and-silver-coin-form-on-a-dark-studio-background-3D-render-Stock-Photo.jpg"></img></div>} */}


      </div>

      
    )
  }
}
