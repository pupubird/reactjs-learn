import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    //jsx syntatic sugar
    // return (
    //   <div className="App">
    //     <Person />
    //     <h1> Hi, I'm a react apppppp</h1>
    //   </div>
    // );

    //it then compile to the code below
    return React.createElement('div', { className: 'App' },
      React.createElement('Person', null, null),
      React.createElement('h1', null, 'Hi, I am a react appppp')
    );
  }
}

export default App;
