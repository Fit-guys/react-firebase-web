import React, {Component} from 'react';
import Panel from "react-bootstrap/es/Panel";
import Row from "react-bootstrap/es/Row";
import Form from "react-bootstrap/es/Form";
import FormGroup from "react-bootstrap/es/FormGroup";
import Col from "react-bootstrap/es/Col";
import FormControl from "react-bootstrap/es/FormControl";
import Button from "react-bootstrap/es/Button";

class ShareWithEmail extends Component {
    render() {
        return (
            <div id={'panel-container'}>
                <Panel id={'form-panel'} bsStyle="primary">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">Sign In</Panel.Title>
                    </Panel.Heading>
                    <Row id={'panel-content-container'}>
                        <Form onSubmit={this.onSubmit} horizontal>
                            <FormGroup controlId="formHorizontalEmail">
                                <Col sm={2} id={'email-caption'}>
                                    Email
                                </Col>
                                <Col sm={10}>
                                    <FormControl
                                        onChange={event => {}}
                                        type="text"
                                        placeholder="Email Address"
                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="formHorizontalPassword">
                                <Col sm={2} id={'password-caption'}>
                                    Password
                                </Col>
                                <Col sm={10}>
                                    <FormControl
                                        onChange={event => {}}
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Button disabled={(isInvalid) =>{}} type="submit" bsStyle="primary">Sign in</Button>
                            </FormGroup>

                            {/* error && <p id={'error-message'}>{error.message}</p> */}
                        </Form>
                    </Row>
                </Panel>
            </div>
        );
    }
}

export default ShareWithEmail;