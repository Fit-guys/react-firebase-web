import React from 'react';
import Image from "react-bootstrap/es/Image";
import headerImage from '../../images/header-image.jpg';
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/es/Col";
import reactLogo from '../../images/react-logo.png';
import firebaseLogo from '../../images/logo_firebase_1920px_clr.png';
import unityLogo from '../../images/unity-logo.png';
import face from '../../images/face.jpg';
import './style.css';
import Jumbotron from "react-bootstrap/es/Jumbotron";
import Button from "react-bootstrap/es/Button";

const LandingPage = () =>
    <div id={"landing"}>
        <Image src={headerImage} className="header-image" alt={"header image"}  responsive/>
        <Jumbotron>
            <h1>Our project</h1>
            <p>Our project description....</p>
            <p>Our project description....</p>
            <p>Our project description....</p>
            <p>Our project description....</p>
            <p>Our project description....</p>
            <Button bsSize="large" id="getStarted">Get Started</Button>
        </Jumbotron>
        <h1 id={"technologies-header"}>Who we are?</h1>
        <Row className="show-grid text-center" id="row-people">
            <Col xs={12} sm={3} className="person-wrapper">
                <div className="takeSpace">
                    <h3>Maks</h3>
                    <p>SCRUM master, Unity developer</p>
                </div>
            </Col>
            <Col xs={12} sm={3} className="person-wrapper" >
                <div className="takeSpace">
                    <h3>Maks</h3>
                    <p>SCRUM master, Unity developer</p>
                </div>
            </Col>
            <Col xs={12} sm={3} className="person-wrapper">
                <div className="takeSpace">
                    <h3>Maks</h3>
                    <p>SCRUM master, Unity developer</p>
                </div>
            </Col>
        </Row>
        <Row className="show-grid text-center" id="row-people">
            <Col xs={12} sm={3} className="person-wrapper">
                <div className="takeSpace">
                    <h3>Maks</h3>
                    <p>SCRUM master, Unity developer</p>
                </div>
            </Col>
            <Col xs={12} sm={3} className="person-wrapper" >
                <div className="takeSpace">
                    <h3>Maks</h3>
                    <p>SCRUM master, Unity developer</p>
                </div>
            </Col>
            <Col xs={12} sm={3} className="person-wrapper">
                <div className="takeSpace">
                    <h3>Maks</h3>
                    <p>SCRUM master, Unity developer</p>
                </div>
            </Col>
        </Row>
        <h1 id={"technologies-header"}>What do we use?</h1>
        <Row className="show-grid text-center" id="row">
            <Col xs={12} sm={4} className="person-wrapper">
                <Image src={reactLogo} id={"react"} rounded className="profile-pic"/>
                <h3>React</h3>
                <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper" >
                <Image src={firebaseLogo} rounded className="profile-pic"/>
                <h3>Firebase</h3>
                <p>Firebase gives you functionality like analytics, databases, messaging and crash reporting so you can move quickly and focus on your users.</p>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
                <Image src={unityLogo} rounded className="profile-pic"/>
                <h3>Unity</h3>
                <p>Unity is the ultimate game development platform. Use Unity to build high-quality 3D and 2D games, deploy them across mobile, desktop, VR/AR, consoles or the Web, and connect with loyal and enthusiastic players and customers.</p>
            </Col>
        </Row>
    </div>;

export default LandingPage;
