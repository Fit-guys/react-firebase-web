import React, { Component } from 'react';
import {
  Link,
  withRouter,
} from 'react-router-dom';

import { auth, db } from '../../firebase';
import * as routes from '../../constants/routes';
import Button from "react-bootstrap/es/Button";
import FormGroup from "react-bootstrap/es/FormGroup";
import FormControl from "react-bootstrap/es/FormControl";
import Col from "react-bootstrap/es/Col";
import Row from "react-bootstrap/es/Row";
import Form from "react-bootstrap/es/Form";
import Panel from "react-bootstrap/es/Panel";
import './signup.css';

const SignUpPage = ({ history }) =>
    <SignUpForm history={history} />;

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      username,
      email,
      passwordOne,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {

        // Create a user in your own accessible Firebase Database too
        db.doCreateUser(authUser.uid, username, email, 'SOSI HUI', true)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push(routes.HOME);
          })
          .catch(error => {
            this.setState(updateByPropertyName('error', error));
          });

      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      username === '' ||
      email === '';

    return (
      <div id={'panel-container'}>
          <Panel id={'form-panel'} bsStyle="primary">
              <Panel.Heading>
                  <Panel.Title componentClass="h3">Реєстрація</Panel.Title>
              </Panel.Heading>
              <Row id={'panel-content-container'}>
                  <Form onSubmit={this.onSubmit} horizontal>
                      <FormGroup controlId="formHorizontalEmail">
                          <Col sm={4} id={'email-caption'}>
                              Ім'я
                          </Col>
                          <Col sm={8}>
                              <FormControl
                                  value={username}
                                  onChange={event => this.setState(updateByPropertyName('username', event.target.value))}
                                  type="text"
                                  placeholder="Ім'я користувача"
                              />
                          </Col>
                      </FormGroup>

                      <FormGroup controlId="formHorizontalPassword">
                          <Col sm={4} id={'password-caption'}>
                              Емейл
                          </Col>
                          <Col sm={8}>
                              <FormControl
                                  value={email}
                                  onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
                                  type="text"
                                  placeholder="Емейл адреса"
                              />
                          </Col>
                      </FormGroup>

                      <FormGroup controlId="formHorizontalPassword">
                          <Col sm={4} id={'password-caption'}>
                              Пароль
                          </Col>
                          <Col sm={8}>
                              <FormControl
                                  value={passwordOne}
                                  onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))}
                                  type="password"
                                  placeholder="Пароль"
                              />
                          </Col>
                      </FormGroup>

                      <FormGroup controlId="formHorizontalPassword">
                          <Col sm={4} id={'password-caption'}>
                          </Col>
                          <Col sm={8}>
                              <FormControl
                                  value={passwordTwo}
                                  onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))}
                                  type="password"
                                  placeholder="Підтвердження пароля"
                              />
                          </Col>
                      </FormGroup>

                      <FormGroup>
                          <Button disabled={isInvalid} type="submit" bsStyle="primary" id={'signup-button'}>Зареєструватись</Button>
                      </FormGroup>

                      { error && <p id={'error-message'}>{error.message}</p> }
                  </Form>
              </Row>
          </Panel>
      </div>
    );
  }
}

const SignUpLink = () =>
  <p>
    Не маєте акаунту?
    {' '}
    <Link to={routes.SIGN_UP}>Зареєструватись</Link>
  </p>;

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
};