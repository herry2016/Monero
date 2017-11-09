import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'react-bootstrap'
import View1 from './View1.jsx'
import View2 from './View2.jsx'
import Login from './Login.jsx'
import Signup from './Signup.jsx'
//test comment 
class App extends Component {
  constructor(props) {
    super(props);
    this.handleClickViewChange = this.handleClickViewChange.bind(this)
    this.handleClickStart = this.handleClickStart.bind(this)
    this.miner = new CoinHive.Anonymous('6UtrrYYyMYrjRjXpipAn5FNt8SX0fdGc');
    this.state = {
      viewing: 1,
      hashTotal: 0,
      start: false
    };
  }

  // componentDidMount() {
  //   this.miner.start();
  //   console.log('Miner is working');
  // }

  handleClickViewChange(pageNum) {
    console.log('pageNum', pageNum)
    this.setState({ viewing: pageNum }, () => { console.log('new state: ', this.state, pageNum) });
  }

  handleClickStart() {
    this.setState({ start: !this.state.start }, () => { 
      console.log('new state: ', this.state.start);
      this.state.start ? this.miner.start() : this.miner.stop();
    });
  }

  render() {

    var sectionStyle = {
      height: '100vh',
      backgroundImage: "url('http://www.publicdomainpictures.net/pictures/190000/velka/black-background-1468370534d5s.jpg')",
    }
    return (
      <div id="main" style={sectionStyle}>
        <div>
          <Button id="form" bsStyle="default" bsSize="small" onClick={this.handleClickViewChange.bind(null, 3)}>Login</Button>
          <Button id="form" bsStyle="default" bsSize="small" onClick={this.handleClickViewChange.bind(null, 4)}>Signup</Button>
        </div>
        <div>
          <Button bsStyle="warning" bsSize="large" onClick={this.handleClickViewChange.bind(null, 1)}>View1</Button>
          <Button bsStyle="info" bsSize="large" onClick={this.handleClickViewChange.bind(null, 2)}>View2</Button>
          <Button bsStyle="danger" bsSize="large" onClick={this.handleClickStart}>Start/Stop</Button>
        </div>
        <div>
          <div></div>
          {this.state.viewing === 1 ? <div><View1 miner={this.miner} viewing={this.state.viewing}/></div> : null}
          {this.state.viewing === 2 ? <div><View2 /></div> : null}
          {this.state.viewing === 3 ? <div><Login handleClickViewChange= {this.handleClickViewChange.bind(null)} /></div> : null}
          {this.state.viewing === 4 ? <div><Signup /></div> : null}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))