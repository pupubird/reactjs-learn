import React, { useState, Component } from 'react';
import './App.css';
import Person from './Person/Person';

//class based state manilulation
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

  buttonHandle = (newName) => {
    // dont manipulate like this: this.state.persons[0].name = 'PUPUBIRD';
    //use this.setState()
    this.setState({
      persons: [
        { name: newName, age: 10 },
        { name: 'manu', age: 11 },
        { name: 'pikupoku', age: 90 }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.buttonHandle}>
          My hobby is: racing
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age} />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[1].age} />
        <button onClick={this.buttonHandle.bind(this, 'pupupu')}>Switch Name</button>
      </div>
    );
  }
}


export default App;
