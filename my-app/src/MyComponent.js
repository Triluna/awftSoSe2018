import React, { Component } from 'react';

const MyComponent = (props) => (
    <div>Hello {props.name}!</div>
);

//Defining own class with render() function
// class MyComponent extends Component {
//   render() {
//     return (
//        <div>Hello World! from MyComponent :)</div>
//     )
//   }
// };

export default MyComponent;