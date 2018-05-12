import React, { Component } from 'react';
//import './style.css';
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/es/Col";
import Image from "react-bootstrap/es/Image";
import reactLogo from '../../images/react-logo.png';
import firebaseLogo from '../../images/logo_firebase_1920px_clr.png';
import unityLogo from '../../images/unity-logo.png';
import bootstrapLogo from '../../images/bootstrap-logo.png';
import nodeLogo from '../../images/node-express.png';
import wglLogo from '../../images/html5_logo.png';

class Technologies extends Component {
    render() {
        return (
            <div id={'t-main-container'}>
                <h1 id={"technologies-header"}><b>ЩО МИ ВИКОРИСТОВУЄМО?</b></h1>
                <div id={'grid'}>
                    <Row className="show-grid text-center" id="row">
                        <Col xs={12} sm={3} className="person-wrapper">
                            <Image src={reactLogo} id={"react"} rounded className="profile-pic"/>
                            <h3>React</h3>
                            <p>React(старі назви: React.js, ReactJS) — відкрита JavaScript бібліотека для створення інтерфейсів користувача, яка покликана вирішувати проблеми часткового оновлення вмісту веб-сторінки, з якими стикаються в розробці односторінкових застосунків. Розробляється Facebook, Instagram і спільнотою індивідуальних розробників.</p>
                        </Col>
                        <Col xs={12} sm={3} className="person-wrapper">
                            <Image src={bootstrapLogo} rounded className="profile-pic"/>
                            <h3>Bootstrap</h3>
                            <p>Bootstrap - це безкоштовний front-end фреймворк для швидкого та легшого веб-розробки. Bootstrap включає в себе шаблони дизайну на основі HTML та CSS для друку, форм, кнопок, таблиць, навігації, модалів, графічних каруселів та багатьох інших, а також додаткових плагінів JavaScript.</p>
                        </Col>
                        <Col xs={12} sm={3} className="person-wrapper" >
                            <Image src={firebaseLogo} rounded className="profile-pic"/>
                            <h3>Firebase</h3>
                            <p>Firebase надає вам функціональні можливості, такі як аналітика, бази даних, обмін повідомленнями та звіти про аварійне завершення роботи, тож ви можете швидко рухатися та зосередитися на своїх користувачів.</p>
                        </Col>
                    </Row>
                    <Row className="show-grid text-center" id="row">
                        <Col xs={12} sm={3} className="person-wrapper">
                            <Image src={nodeLogo} style={{width: '85%', height: '85%', margin:'auto'}} rounded className="profile-pic"/>
                            <h3>Node Express</h3>
                            <p>Express є мінімальним та гнучким фреймворком веб-додатків Node.js, яка забезпечує надійний набір функцій для веб-і мобільних додатків.</p>
                        </Col>
                        <Col xs={12} sm={3} className="person-wrapper" >
                            <Image src={wglLogo} rounded className="profile-pic"/>
                            <h3>WebGL</h3>
                            <p>WebGL (веб-графічна бібліотека) - це JavaScript API для відображення інтерактивної 3D та 2D-графіки в будь-якому сумісному веб-браузері без використання плагінів. WebGL це робить, ввівши API, який тісно відповідає OpenGL ES 2.0, який можна використовувати в елементах HTML5 {'<canvas>'}.</p>
                        </Col>
                        <Col xs={12} sm={3} className="person-wrapper">
                            <Image src={unityLogo} rounded className="profile-pic"/>
                            <h3>Unity</h3>
                            <p>Unity - це ультимативна платформа розробки ігор. Використовуйте Unity для створення високоякісних 3D та 2D-ігор, розгортання їх на мобільних пристроях, настільних комп'ютерах, VR / AR, консолях або в Інтернеті, а також зв'яжіться з лояльними та ентузіастичними гравцями та клієнтами.
                            </p>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Technologies;