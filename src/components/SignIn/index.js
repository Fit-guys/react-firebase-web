import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from '../SignUp/index';
import { PasswordForgetLink } from '../PasswordForget';
import {auth, db} from '../../firebase';
import * as routes from '../../constants/routes';
import firebase from 'firebase';
import Button from "react-bootstrap/es/Button";
import FormGroup from "react-bootstrap/es/FormGroup";
import Col from "react-bootstrap/es/Col";
import FormControl from "react-bootstrap/es/FormControl";
import Form from "react-bootstrap/es/Form";
import Panel from "react-bootstrap/es/Panel";
import './login.css';
import Row from "react-bootstrap/es/Row";

const provider = new firebase.auth.GoogleAuthProvider();

provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

provider.setCustomParameters({
    'login_hint': 'user@example.com'
});

const SignInPage = ({ history }) =>
  <div>
    <SignInForm history={history} />
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
          username,
          email,
      } = this.state;

      const {
          history,
      } = this.props;

      firebase.auth().signInWithPopup(provider).then((authUser) => {
          db.doCreateUser(authUser.uid, username, email, '')
              .then(() => {
                  this.setState(() => ({ ...INITIAL_STATE }));
                  history.push(routes.HOME);
              })
              .catch(error => {
                  this.setState(updateByPropertyName('error', error));
              });
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
      <div id={'panel-container'}>
          <Panel id={'form-panel'} bsStyle="primary">
              <Panel.Heading>
                  <Panel.Title componentClass="h3">Вхід</Panel.Title>
              </Panel.Heading>
              <Row id={'panel-content-container'}>
                  <Form onSubmit={this.onSubmit} horizontal>
                      <div id={'provider-buttons'}>
                          <Button onClick={this.withGoogle} id={"google"} bsStyle={'primary'}>
                              Goolge
                          </Button>
                          <Button onClick={this.withGoogle} id={'facebook'} bsStyle={'primary'}>
                              Facebook
                          </Button>
                          <Button onClick={this.withGoogle} id={'github'} bsStyle={'primary'}>
                              Github
                          </Button>
                      </div>
                      <FormGroup controlId="formHorizontalEmail">
                          <Col sm={2} id={'email-caption'}>
                              Емейл
                          </Col>
                          <Col sm={10}>
                              <FormControl
                                  value={email}
                                  onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
                                  type="text"
                                  placeholder="Емейл"
                              />
                          </Col>
                      </FormGroup>

                      <FormGroup controlId="formHorizontalPassword">
                          <Col sm={2} id={'password-caption'}>
                              Пароль
                          </Col>
                          <Col sm={10}>
                              <FormControl
                                  value={password}
                                  onChange={event => this.setState(updateByPropertyName('password', event.target.value))}
                                  type="password"
                                  placeholder="Пароль"
                              />
                          </Col>
                      </FormGroup>

                      <FormGroup>
                              <Button disabled={isInvalid} type="submit" bsStyle="primary">Увійти</Button>
                      </FormGroup>

                      { error && <p id={'error-message'}>{error.message}</p> }
                      <PasswordForgetLink />
                      <SignUpLink />
                  </Form>
              </Row>
          </Panel>
      </div>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};
