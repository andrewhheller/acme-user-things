import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import User from './User';

import axios from 'axios';

const root = document.getElementById("root")

class Main extends Component {

  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    return axios.get('/api/users')
      .then(response => response.data)
      .then(users => this.setState ({ users }))
  }

  render() {

    const { users } = this.state;

    return (
      <div className="grid-container">
        {users.map(user => {
            return (
              <User key={user.id} user={user} />
            )
        })}
      </div>
    )
  }



}

ReactDOM.render(<Main />, root);
