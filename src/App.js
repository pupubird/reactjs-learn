import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {
        name: 'max',
        age: 28
      },
      {
        name: 'manu',
        age: 29
      },
      {
        name: 'rain',
        age: 30
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My hobby is: racing
        </Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[1].age}></Person>
        <button>Switch Name</button>
      </div>
    );
  }
}

export default App;
