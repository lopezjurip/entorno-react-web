import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      comments: [{
        id: 1,
        title: 'Heya',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      }],
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Lista de comentarios:</h1>
        <ul>
          {this.state.comments.map(comment => (
            <li key={comment.id}>
              <h3>{comment.title}</h3>
              <p>{comment.body}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
