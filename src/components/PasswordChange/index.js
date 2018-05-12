import React, { Component } from 'react';

import { auth } from '../../firebase';
import Panel from "react-bootstrap/es/Panel";
import Row from "react-bootstrap/es/Row";
import Form from "react-bootstrap/es/Form";
import FormGroup from "react-bootstrap/es/FormGroup";
import FormControl from "react-bootstrap/es/FormControl";
import Col from "react-bootstrap/es/Col";
import Button from "react-bootstrap/es/Button";

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
  success: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { passwordOne } = this.state;

    auth.doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        this.setState(updateByPropertyName('success', 'Ваш пораль успішно змінено'));
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  };

  render() {
    const {
      passwordOne,
      passwordTwo,
      error,
      success,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '';

    return (
        <div>
            <div id={'panel-container'}>
                <Panel id={'form-panel'} bsStyle="primary">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">Змінити пароль</Panel.Title>
                    </Panel.Heading>
                    <Row id={'panel-content-container'}>
                        <Form onSubmit={this.onSubmit} horizontal>
                            <FormGroup controlId="formHorizontalPassword">
                                <Col sm={4} id={'password-caption'}>
                                    Пароль
                                </Col>
                                <Col sm={8}>
                                    <FormControl
                                        value={passwordOne}
                                        onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))}
                                        type="password"
                                        placeholder="New Password"
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
                                        placeholder="Confirm New Password"
                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Button disabled={isInvalid} type="submit" bsStyle="primary" id={'signup-button'}>Змінити пароль</Button>
                            </FormGroup>

                            { error && <p>{error.message}</p> }
                            { success && <p>{success}</p> }
                        </Form>
                    </Row>
                </Panel>
            </div>
            {/*<form onSubmit={this.onSubmit}>
                <input
                    value={passwordOne}
                    onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))}
                    type="password"
                    placeholder="New Password"
                />
                <input
                    value={passwordTwo}
                    onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))}
                    type="password"
                    placeholder="Confirm New Password"
                />
                <button disabled={isInvalid} type="submit">
                    Змінити пароль
                </button>

                { error && <p>{error.message}</p> }
            </form>*/}
        </div>
    );
  }
}

export default PasswordChangeForm;