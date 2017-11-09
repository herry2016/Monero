import React, { Component } from 'react'

class UserEntry extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <span>{this.props.user.username}</span>
        <span>   {this.props.user.totalhashes}</span>
      </div>
    )
  }
}

export default UserEntry