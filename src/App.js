import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
    state = {
      todos: [
        {
          id: 1,
          title: 'take the rubbish out',
          completed: false
        },
        {
          id: 2,
          title: 'Have a great day',
          completed: false
        },
        {
          id: 3,
          title: 'Rogers likes Tarquin',
          completed: false
        },
      ]
    }
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
