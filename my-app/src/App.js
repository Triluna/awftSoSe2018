import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {


  
  constructor(props) {
    super(props);
    this.state = {
      isOn: true
    };
  }
  
  toggle = () => {
    this.setState({isOn: !this.state.isOn})
  }

  render() {
    return (

      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <p>MyComponent</p>
          <ul className="list-group">
              <li className="list-group-item">
                  <div>Post1</div>
                  <button onClick={this.editButton}> editieren</button>
              </li>
              <li className="list-group-item">
                  <div>Post2</div>
                  <button>editieren</button>
              </li>
              <li className="list-group-item">
                  <div>Post3</div>
                  <button>editieren</button>
              </li>
          </ul>

          <button onClick={this.toggle}>
          {this.state.isOn ? 'Button State: On' : 'Button State: Off'}
        </button>
      </div>
    );
                }

    editButton() {

    }
}
 export default App;
