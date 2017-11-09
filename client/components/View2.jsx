import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'react-bootstrap'
import Leaderboard from './Leaderboard.jsx'


export default class View2 extends Component {
  constructor(props) {
    super(props);
    
    this.testvalue = [
      { username: 'jeff', totalhashes: 2 },
      { username: 'jen', totalhashes: 100 },
      { username: 'jay', totalhashes: 55 }
    ]

    this.state = {
      userList: this.testvalue
    };
  }

  render() {
    var sectionStyle = {
      height: '100vh',
      backgroundImage: "url('https://secure.img1-ag.wfcdn.com/im/92318338/resize-h800%5Ecompr-r85/3600/36006914/Homebase%20High%20Density%20Foam%205%20Step%20Pet%20Stair.jpg')",
    }
    return (
      <div id="viewTwo" style={sectionStyle}>
        <h2>Leaderboard</h2>
        <div id="entries"><Leaderboard userList={this.state.userList} /></div>
      </div>
    )
  }
}
