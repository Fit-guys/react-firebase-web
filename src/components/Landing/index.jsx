import React from 'react';
import Image from "react-bootstrap/es/Image";
import headerImage from '../../images/header-image.jpg';
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/es/Col";
import reactLogo from '../../images/react-logo.png';
import firebaseLogo from '../../images/logo_firebase_1920px_clr.png';
import unityLogo from '../../images/unity-logo.png';
import unicornLogo from '../../images/unicorn.png';
import bootstrapLogo from '../../images/bootstrap-logo.png';
import inIco from '../../images/linkedIn.ico';
import githubIco from '../../images/githubIco.png';
import facebookIco from '../../images/facebook-icon.png';
import './style.css';
import Jumbotron from "react-bootstrap/es/Jumbotron";
import Button from "react-bootstrap/es/Button";

const LandingPage = () =>
    <div id={"landing"}>
        <div id={"header-image-container"}>
            <Image src={headerImage} className="header-image" alt={"header image"}  responsive/>
            <div id="logo">
                <Image src={unicornLogo} id={"unicorn-logo"} alt={"unicorn-logo"}  responsive/>
            </div>
        </div>
        <Jumbotron id={"jumb-project"}>
            <h1>Our project</h1>
            <p>Our project description....</p>
            <p>Our project description....</p>
            <p>Our project description....</p>
            <p>Our project description....</p>
            <p>Our project description....</p>
            <Button bsSize="large" id="getStarted">Get Started</Button>
        </Jumbotron>
        <h1 id={"technologies-header"}><b>WHO WE ARE?</b></h1>
        <Row className="show-grid text-center" id="row-people">
            <Col xs={12} sm={3} className="person-wrapper" id={'maks'}>
                <div className="takeSpace" >
                    <h3>Maks</h3>
                    <span>Project Manager, Technical Researcher, Unity developer</span>
                </div>
                <span>
                    ivasenko182@gmail.com
                    <a href="https://www.linkedin.com/in/maksIvasenko">
                        <Image src={inIco} id={'link-icon'} />
                    </a>
                </span>
            </Col>
            <Col xs={12} sm={3} className="person-wrapper" id={'anton'}>
                <div className="takeSpace">
                    <h3>Anton</h3>
                    <span>Unity developer</span>
                    <br/>
                    <span>
                        anton.gunko2013@gmail.com
                        <a href="https://github.com/bageton2">
                            <Image src={githubIco} id={'link-icon'} />
                        </a>
                    </span>
                </div>
            </Col>
            <Col xs={12} sm={3} className="person-wrapper" id={'andrey'}>
                <div className="takeSpace">
                    <h3>Andrey</h3>
                    <span>Unity developer</span>
                    <br/>
                    <span>
                        frntxacc@gmail.com
                        <a href="https://github.com/andrew-zhuravlev">
                            <Image src={githubIco} id={'link-icon'} />
                        </a>
                    </span>
                </div>
            </Col>
        </Row>
        <Row className="show-grid text-center" id="row-people">
            <Col xs={12} sm={3} className="person-wrapper" id={'rostic'}>
                <div className="takeSpace">
                    <h3>Rostislav</h3>
                    <span>Back-end developer, Unity developer</span>
                </div>
                <span>
                    go.go.gg.rostislav@gmail.com
                    <a href="https://www.linkedin.com/in/mapinc/">
                        <Image src={inIco} id={'link-icon'} />
                    </a>
                    <a href="https://www.facebook.com/Avowedly">
                        <Image src={facebookIco} id={'link-icon'} />
                    </a>
                    <a href="https://github.com/MindfulMe">
                        <Image src={githubIco} id={'link-icon'} />
                    </a>
                </span>
            </Col>
            <Col xs={12} sm={3} className="person-wrapper" id={'alexandr'}>
                <div className="takeSpace">
                    <h3>Alexandr</h3>
                    <span>Full-stack developer, UX/UI web designer</span>
                </div>
                <span style={{marginLeft: '-10px'}}>
                    sasha732sasha000@gmail.com
                    <a href="https://www.linkedin.com/in/alexandr-dobrovolsky-340886154/">
                        <Image src={inIco} id={'link-icon'} />
                    </a>
                    <a href="https://www.facebook.com/sasha.dobrovolskiy.52">
                        <Image src={facebookIco} id={'link-icon'} />
                    </a>
                    <a href="https://github.com/AlexandrDobrovolskiy">
                        <Image src={githubIco} id={'link-icon'} />
                    </a>
                </span>
            </Col>
            <Col xs={12} sm={3} className="person-wrapper" id={'vlad'}>
                <div className="takeSpace">
                    <h3>Vlad</h3>
                    <span>Front-end developer, Unity developer</span>
                </div>
                <span>
                        gromvlad12@gmail.com
                        <a href="https://github.com/orgs/Fit-guys/people/VladGrom">
                            <Image src={githubIco} id={'link-icon'} />
                        </a>
                    </span>
            </Col>
        </Row>
        <h1 id={"technologies-header"}><b>WHAT DO WE USE?</b></h1>
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
        <Jumbotron id={"#jumb-contact"}>
            <h1>Any questions?</h1>
            <h3>
                Feel free to write us with any issue
                <p style={{color: 'darkmagenta', margin: '10px'}}>
                    help.cyber.unicorns@gmail.com
                </p>
            </h3>
        </Jumbotron>
    </div>;

export default LandingPage;
