import React, { Component } from 'react'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

class UserEntry extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <Row>
        <div>
          <span>{this.props.user.username}</span>
          <span> {this.props.user.totalhashes}</span>
        </div>
      </Row>
    )
  }
}

export default UserEntry