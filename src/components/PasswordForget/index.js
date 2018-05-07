import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase';
import * as routes from '../../constants/routes';
import FormGroup from "react-bootstrap/es/FormGroup";
import Button from "react-bootstrap/es/Button";
import FormControl from "react-bootstrap/es/FormControl";
import Col from "react-bootstrap/es/Col";
import Form from "react-bootstrap/es/Form";
import Row from "react-bootstrap/es/Row";
import Panel from "react-bootstrap/es/Panel";
import './passchange.css';

const PasswordForgetPage = () =>
  <div>
    <PasswordForgetForm />
  </div>;

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email } = this.state;

    auth.doPasswordReset(email)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  };

  render() {
    const {
      email,
      error,
    } = this.state;

    const isInvalid = email === '';

    return (
        <div id={'panel-container'}>
            <Panel id={'form-panel'} bsStyle="primary">
                <Panel.Heading>
                    <Panel.Title componentClass="h3">Forgot password</Panel.Title>
                </Panel.Heading>
                <Row id={'panel-content-container'}>
                    <Form onSubmit={this.onSubmit} horizontal>
                        <FormGroup controlId="formHorizontalPassword">
                            <div id={'row-container'}>
                                <Col sm={4} id={'password-caption'}>
                                    Email
                                </Col>
                                <Col sm={8}>
                                    <FormControl
                                        value={this.state.email}
                                        onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
                                        type="text"
                                        placeholder="Email Address"
                                    />
                                </Col>
                            </div>
                        </FormGroup>

                        <FormGroup>
                            <Button disabled={isInvalid} type="submit" bsStyle="primary" id={'signup-button'}>Reset password</Button>
                        </FormGroup>

                        <p>Ready? <Link to={routes.SIGN_IN}>Sign In</Link></p>
                        { error && <p id={'error-message'}>{error.message}</p> }
                    </Form>
                </Row>
            </Panel>
            {/*<form onSubmit={this.onSubmit}>
        <input
          value={this.state.email}
          onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <button disabled={isInvalid} type="submit">
          Reset My Password
        </button>

        { error && <p>{error.message}</p> }
      </form>*/}
        </div>
    );
  }
}

const PasswordForgetLink = () =>
  <p>
    <Link to={routes.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>;

export default PasswordForgetPage;

export {
  PasswordForgetForm,
  PasswordForgetLink,
};
