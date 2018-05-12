import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';

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
          <MyComponent name="Aktuelle Webtechnologien: Frameworks und Tools (SoSe18)" />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.toggle}>
          {this.state.isOn ? 'Button State: On' : 'Button State: Off'}
        </button>
      </div>
    );
  }
}

export default App;

// Simple page with own component and no controll element
// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import MyComponent from './MyComponent';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//           <MyComponent name="Aktuelle Webtechnologien: Frameworks und Tools (SoSe18)" />
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
