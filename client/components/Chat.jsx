import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import { Button } from 'react-bootstrap'
import axios from 'axios'
// import { FormGroup } from 'react-bootstrap'
import io from 'socket.io-client'

export default class Chat extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      messages: []
    }
  }

  componentDidMount() {
    this.socket = io('/')
    this.socket.on('message', message => {
      this.setState({ messages: [message, ...this.state.messages] })
    })
  }
  

  handleSubmit(event) {
    console.log('handleSubmit invoked')
    const body = event.target.value
    if (event.keyCode === 13 && body) {
      const message = {
        body: body,
        from: this.props.currentUser + '(' + this.props.hashTotalCurrentUser + ')'
      }
      this.setState({messages: [message, ...this.state.messages] })
      this.socket.emit('message', [message.from, message.body])
      event.target.value = ''
    }
  }

  render() {
    const messages = this.state.messages.map((message, index) => {
      return <li key={index}><b>{message.from}:</b>{message.body}</li>
    })
    return (
      <div>
        <h1>Current User: {this.props.currentUser}</h1>
        <input type='text' placeholder='Enter a message...' onKeyUp={this.handleSubmit} />
        {messages}
      </div>
    )
  }
}