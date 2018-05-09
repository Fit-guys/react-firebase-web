import React, { Component } from 'react';

import AuthUserContext from '../Session/AuthUserContext';
import withAuthorization from '../Session/withAuthorization';
import { db } from '../../firebase';
import Button from "react-bootstrap/es/Button";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: {}
    };
  }

  componentDidMount() {
    db.onceGetUsers().then(snapshot =>
      this.setState(() => ({ users: snapshot.val() }))
    );
  }

  render() {
    const { users } = this.state;

    return (
      <div>
        <h1>Home</h1>
        <p>The Home Page is accessible by every signed in user.</p>
          { !!users && <UserList users={users} /> }
      </div>
    );
  }
}

const UserList = ({ users }) =>
  <div>
      <AuthUserContext.Consumer>
          {authUser =>
              <div>
                  <h1>Account: {authUser.email}</h1>
                  <Button id={'play-button'}>Play</Button>
              </div>
          }
      </AuthUserContext.Consumer>
    <h2>List of Usernames of Users</h2>
    <p>(Saved on Sign Up in Firebase Database)</p>

    {Object.keys(users).map(key =>
      <div key={key}>{key}</div>
    )}
  </div>;

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);