import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';
import firebase from 'firebase';
import Button from "react-bootstrap/es/Button";

const provider = new firebase.auth.GoogleAuthProvider();

provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

firebase.auth().languageCode = 'en';

provider.setCustomParameters({
    'login_hint': 'user@example.com'
});

const SignInPage = ({ history }) =>
  <div>
    <h1>SignIn</h1>
    <SignInForm history={history} />
    <PasswordForgetLink />
    <SignUpLink />
  </div>;

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  withGoogle  = () => {
      const {
          history,
      } = this.props;

      firebase.auth().signInWithPopup(provider).then(() => {
          this.setState(() => ({...INITIAL_STATE}));
          history.push(routes.HOME);
      }).catch(function (error) {
      });

  };

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  };

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <div>
          <form onSubmit={this.onSubmit}>
              <input
                  value={email}
                  onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
                  type="text"
                  placeholder="Email Address"
              />
              <input
                  value={password}
                  onChange={event => this.setState(updateByPropertyName('password', event.target.value))}
                  type="password"
                  placeholder="Password"
              />
              <button disabled={isInvalid} type="submit">
                  Sign In
              </button>

              { error && <p>{error.message}</p> }
          </form>
          <Button onClick={this.withGoogle}>
              Ggl
          </Button>
      </div>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};
