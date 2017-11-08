import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'react-bootstrap'
import View1 from './View1.jsx'
import View2 from './View2.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClickButton1 = this.handleClickButton1.bind(this)
    this.handleClickButton2 = this.handleClickButton2.bind(this)

    this.state = {
      viewing: 1
    };
  }

  handleClickButton1() {
    this.setState({ viewing: 1 }, () => { console.log('new state: ', this.state) });
  }

  handleClickButton2() {
    this.setState({ viewing: 2 }, () => { console.log('new state: ', this.state) });
  }

  render() {

    return (
      <div>
        <div>
          <Button bsStyle="warning" bsSize="large" onClick={this.handleClickButton1}>View1</Button>
          <Button bsStyle="info" bsSize="large" onClick={this.handleClickButton2}>View2</Button>
        </div>
        <div>
          {/* {this.state.viewing === 1 ? <div><View1 /></div> : null}
          {this.state.viewing === 2 ? <div><View2 /></div> : null} */}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))