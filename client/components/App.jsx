import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'react-bootstrap'
import View1 from './View1.jsx'
import View2 from './View2.jsx'
import Login from './Login.jsx'
import Signup from './Signup.jsx'
import Chat from './Chat.jsx'
import axios from 'axios'
//test comment 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: 'not logged',
      viewing: 1,
      hashTotal: 0,
      hashIncremented: 0,
      hashTotalCurrentUser: 0,
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
    this.setState({ hashIncremented: hashTotal })
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

  setCurrentUser(username, hashTotalCurrentUser) {
    
    console.log('set current user invoked, hashTotalCurrentUser', hashTotalCurrentUser)
    this.setState({ currentUser: username, hashTotalCurrentUser: hashTotalCurrentUser },
      () => { console.log('new state: ', this.state.currentUser) });
  }

  addHashEarnedToDB() {
    this.updateCurrentMine();
    // console.log(this.state)
    console.log('reporting hash info');
    let usor = {username: this.state.currentUser,
      hashIncremented: this.state.hashIncremented}
    axios.post('/main/update', usor)
      .then(response => {
        console.log('update  ===== ', response.data);
        this.setState({ hashTotalCurrentUser: response.data.total})
      })
    this.minerReset()
  }

  minerReset() {
    this.miner.stop();
    this.miner = new CoinHive.Anonymous('6UtrrYYyMYrjRjXpipAn5FNt8SX0fdGc');
    this.state.start ? this.miner.start() : this.miner.stop();
  }
  

  render() {

    var sectionStyle = {
      height: '100vh',
    }
    var sectionStyle2 = {
      width: '800px',
      height: '260px'
    }
    return (
      <div id="main" style={sectionStyle}>
      {/* <div><img src='http://www.publicdomainpictures.net/pictures/190000/velka/black-background-1468370534d5s.jpg'></img></div> */}


        <div>
          <Button id="form" bsStyle="default" bsSize="small" onClick={this.handleClickViewChange.bind(null, 3)}>Login</Button>
          <Button id="form" bsStyle="default" bsSize="small" onClick={this.handleClickViewChange.bind(null, 4)}>Signup</Button>
        </div>
        <div>
          <Button bsStyle="info" bsSize="large" onClick={this.handleClickViewChange.bind(null, 1)}>Main</Button>
          <Button bsStyle="warning" bsSize="large" onClick={this.handleClickViewChange.bind(null, 2)}>Leaderboard</Button>
          <Button bsStyle="danger" bsSize="large" onClick={this.handleClickStart}>Start/Stop</Button>
          <Button bsStyle="primary" bsSize="large" onClick={this.handleClickViewChange.bind(null, 5)}>Chat</Button>
          {/* <Button bsStyle="default" bsSize="large" onClick={this.minerReset}>Reset</Button> */}
        </div>
        <div>
          {this.state.viewing === 1 ? <div><View1 
            miner={this.miner} 
            viewing={this.state.viewing} 
            currentUser = {this.state.currentUser}
            hashTotalCurrentUser={this.state.hashTotalCurrentUser}
            /></div> : null}
          {this.state.viewing === 2 ? <div><View2 hashTotal={this.state.hashTotal}/></div> : null}
          {this.state.viewing === 3 ? <div><Login 
            handleClickViewChange= {this.handleClickViewChange.bind(null)}
            setCurrentUser={this.setCurrentUser.bind(null)} /></div> : null}
          {this.state.viewing === 4 ? <div><Signup /></div> : null}
          {this.state.viewing === 5 ? <div><Chat /></div> : null}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))

//componentWillReceivedProps