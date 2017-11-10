import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import { FormGroup } from 'react-bootstrap'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.handleClickSubmit = this.handleClickSubmit.bind(this)
    this.state = {
      username: '',
      password: ''
    };
  }
  handleChange(event) {
    var obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(obj, () => { console.log('new state: ', this.state) });
  }

  handleClickSubmit() {
    console.log('=========',this.state)
    axios.post('/main/login', this.state)
      .then(response => {
        console.log('login response from server ===== ', response.data)
        if (!!response.data) {
          this.props.setCurrentUser(response.data.username, response.data.totalhashes);
          this.props.handleClickViewChange(1);
        }
      })

  }
  render() {

    return (
      <div>
        <div>
          {/* <Form horizontal> */}
          <FormGroup id="login">
            <div id="credentials"><label> Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} /></label></div>
            <div id="credentials"><label> Password: <input type="text" name="password" value={this.state.password} onChange={this.handleChange} /></label></div>
            <div ><input type="submit" value="Login" onClick={this.handleClickSubmit} /></div>
          </FormGroup>
          {/* </Form> */}
        </div>
      </div>
    )
  }
}