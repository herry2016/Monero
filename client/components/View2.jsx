import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'react-bootstrap'
import Leaderboard from './Leaderboard.jsx'
import axios from 'axios'


export default class View2 extends Component {
  constructor(props) {
    super(props);
    
    this.testvalue = [
      { username: 'jeff', totalhashes: 2 },
      { username: 'jen', totalhashes: 100 },
      { username: 'jay', totalhashes: 55 }
    ]

    this.state = {
      userList: []
    };
    this.getAllUserData = this.getAllUserData.bind(this)
  }

  componentDidMount() {
    // report current hash infor every x milliseconds
    
    setInterval(() => this.getAllUserData(), 1000)
    this.getAllUserData()
  }

  getAllUserData() {
    axios.get('/main/getAll')
      .then(response => {
        console.log('login response from server ===== ', response.data)
        this.setState({ userList: response.data.userList })
      })    
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
