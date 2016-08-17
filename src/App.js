import React, { Component } from 'react';
import moment from 'moment';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/comments')
      .then(result => result.json())
      .then(comments => this.setState({ comments }));
  }

  render() {
    return (
      <div className="container">
        <h1>Lista de comentarios:</h1>
        <ul>
          {this.state.comments.map(comment => (
            <li key={comment.id}>
              <h3>{comment.title} <small>{moment(comment.created_at).fromNow()}</small></h3>
              <p>{comment.body}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
