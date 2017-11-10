import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'react-bootstrap'
import View1 from './View1.jsx'
import View2 from './View2.jsx'
import Login from './Login.jsx'
import Signup from './Signup.jsx'
import axios from 'axios'
//test comment 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: 'default',
      viewing: 1,
      hashTotal: 0,
      hashIncremented: 0,
      hashCurrentUser: 0,
      start: false
    };
    this.handleClickViewChange = this.handleClickViewChange.bind(this)
    this.handleClickStart = this.handleClickStart.bind(this)
    this.setCurrentUser = this.setCurrentUser.bind(this)
    this.addHashEarnedToDB = this.addHashEarnedToDB.bind(this)
    this.minerReset = this.minerReset.bind(this)
    this.updateCurrentMine = this.updateCurrentMine.bind(this)
    this.miner = new CoinHive.Anonymous('6UtrrYYyMYrjRjXpipAn5FNt8SX0fdGc');
  }

  // componentDidMount() {
  //   this.miner.start();
  //   console.log('Miner is working');
  // }
  componentDidMount() {
    // report current hash infor every x milliseconds
    setInterval(() => this.updateCurrentMine(), 1000)
    setInterval(() => this.addHashEarnedToDB(), 3000);
  }

  updateCurrentMine() {
    var hashTotal = this.miner.getTotalHashes();
    console.log('totalHashes', hashTotal);
    this.setState({ hashTotal: hashTotal })
  }

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

  setCurrentUser(username, hashTotal) {
    
    console.log('set current user invoked, hashTotal', hashTotal)
    this.setState({ currentUser: username },
      () => { console.log('new state: ', this.state.currentUser) });
  }

  addHashEarnedToDB() {
    this.updateCurrentMine();
    console.log(this.state)
    console.log('reporting hash info');
    let usor = {username: this.state.currentUser,
      hashIncremented: this.state.hashIncremented}
    axios.post('/main/update', usor)
      // .then(response => {
      //   console.log('update  ===== ', response.data);
      // })
    this.minerReset()
  }

  minerReset() {
    this.miner.stop();
    this.miner = new CoinHive.Anonymous('6UtrrYYyMYrjRjXpipAn5FNt8SX0fdGc');
    this.setState({ start: true });
    this.miner.start();
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
          <Button bsStyle="default" bsSize="large" onClick={this.handleClickViewChange.bind(null, 1)}>View1</Button>
          <Button bsStyle="info" bsSize="large" onClick={this.handleClickViewChange.bind(null, 2)}>View2</Button>
          <Button bsStyle="warning" bsSize="large" onClick={this.handleClickStart}>Start/Stop</Button>
          <Button bsStyle="danger" bsSize="large" onClick={this.minerReset}>Reset</Button>
        </div>
        <div>
          <div></div>
          {this.state.viewing === 1 ? <div><View1 miner={this.miner} viewing={this.state.viewing} 
            currentUser = {this.state.currentUser}/></div> : null}
          {this.state.viewing === 2 ? <div><View2 hashTotal={this.state.hashTotal}/></div> : null}
          {this.state.viewing === 3 ? <div><Login 
            handleClickViewChange= {this.handleClickViewChange.bind(null)}
            setCurrentUser={this.setCurrentUser.bind(null)} /></div> : null}
          {this.state.viewing === 4 ? <div><Signup /></div> : null}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))

//componentWillReceivedProps