import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import { FormGroup } from 'react-bootstrap'


export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.handleClickSubmit = this.handleClickSubmit.bind(this)
    this.state = {
      username: '',
      password: '',
      email: ''

    };
  }


  handleChange(event) {
    var obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(obj, () => { console.log('new state: ', this.state) });
  }

  handleClickSubmit() {
    axios.post('/main/signup', this.state)
      .then(response => {
        console.log('new login request ===== ', response.data)
      })
  }

  render() {

    return (
      <div>
        <div>
          {/* <Form horizontal> */}
          <FormGroup id="signup">
            <div id="credentials"><label> Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} /></label></div>
            <div id="credentials"><label> Password: <input type="text" name="password" value={this.state.password} onChange={this.handleChange} /></label></div>
            <div id="credentials"><label> Email: <input type="text" name="email" value={this.state.email} onChange={this.handleChange} /></label></div>
            <div ><input type="submit" value="Signup" onClick={this.handleClickSubmit} /></div>
          </FormGroup>
          {/* </Form> */}
        </div>
      </div>
    )
  }
}