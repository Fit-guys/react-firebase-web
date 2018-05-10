import React, { Component } from 'react';
//import './style.css';
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/es/Col";
import Image from "react-bootstrap/es/Image";
import reactLogo from '../../images/react-logo.png';
import firebaseLogo from '../../images/logo_firebase_1920px_clr.png';
import unityLogo from '../../images/unity-logo.png';
import bootstrapLogo from '../../images/bootstrap-logo.png';

class Technologies extends Component {
    render() {
        return (
            <div id={'t-main-container'}>
                <h1 id={"technologies-header"}><b>WHAT DO WE USE?</b></h1>
                <div id={'grid'}>
                    <Row className="show-grid text-center" id="row">
                        <Col xs={12} sm={3} className="person-wrapper">
                            <Image src={reactLogo} id={"react"} rounded className="profile-pic"/>
                            <h3>React</h3>
                            <p>React is a JavaScript tool that makes it easy to reason about, construct, and maintain stateless and stateful user interfaces. It provides the means to declaratively define and divide a UI into UI components (a.k.a., React components) using HTML-like nodes called React nodes.</p>
                        </Col>
                        <Col xs={12} sm={3} className="person-wrapper">
                            <Image src={bootstrapLogo} rounded className="profile-pic"/>
                            <h3>Bootstrap</h3>
                            <p>Bootstrap is a free front-end framework for faster and easier web development. Bootstrap includes HTML and CSS based design templates for typography, forms, buttons, tables, navigation, modals, image carousels and many other, as well as optional JavaScript plugins.</p>
                        </Col>
                        <Col xs={12} sm={3} className="person-wrapper" >
                            <Image src={firebaseLogo} rounded className="profile-pic"/>
                            <h3>Firebase</h3>
                            <p>Firebase gives you functionality like analytics, databases, messaging and crash reporting so you can move quickly and focus on your users.</p>
                        </Col>
                        <Col xs={12} sm={3} className="person-wrapper">
                            <Image src={unityLogo} rounded className="profile-pic"/>
                            <h3>Unity</h3>
                            <p>Unity is the ultimate game development platform. Use Unity to build high-quality 3D and 2D games, deploy them across mobile, desktop, VR/AR, consoles or the Web, and connect with loyal and enthusiastic players and customers.</p>
                        </Col>
                    </Row>
                </div>
                    <footer id={'t-footer'}>
                        <h2>
                            Any question?
                        </h2>
                        <h3>
                            Feel free to write us with any issue <span>help.cyber@gmail.com</span>
                        </h3>
                    </footer>
            </div>
        );
    }
}

export default Technologies;