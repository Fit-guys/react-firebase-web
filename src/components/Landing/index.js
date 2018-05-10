import React from 'react';
import Image from "react-bootstrap/es/Image";
import headerImage from '../../images/login-back.png';
import unicornLogo from '../../images/unicorn.png';
import './style.css';

const LandingPage = () =>
    <div id={"landing"}>
        <div id={"header-image-container"}>
            <div id={'big-logo-container'}>
                <Image src={headerImage} className="header-image" alt={"header image"} responsive/>
            </div>
            <div id="logo">
                <Image src={unicornLogo} id={"unicorn-logo"} alt={"unicorn-logo"}  responsive/>
                <span id={'big-logo-caption'}>
                    Cyber Unicorns
                    <br/>
                    FIT UNIVERSITY TEAM
                </span>
            </div>
        </div>
    </div>;

export default LandingPage;
