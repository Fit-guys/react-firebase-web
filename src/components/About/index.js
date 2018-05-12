import React, { Component } from 'react';
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/es/Col";
import Link from "react-router-dom/es/Link";
import Image from "react-bootstrap/es/Image";
import inIco from '../../images/linkedIn.ico';
import githubIco from '../../images/githubIco.png';
import facebookIco from '../../images/facebook-icon.png';

class About extends Component {

    render() {
        return (
            <div id={'about-us-container'}>
                <h1 id={"technologies-header"}><b>ХТО МИ?</b></h1>
                <Row className="show-grid text-center" id="row-people">
                    <Col xs={12} sm={3} className="person-wrapper" id={'maks'} >
                        <div className="takeSpace">
                            <h3>Maks</h3>
                            <span>Project Manager, Technical Researcher, Unity developer</span>
                            <br/>
                            <span>
                    ivasenko182@gmail.com
                    <Link target="_blank" to="https://www.linkedin.com/in/maksIvasenko">
                        <Image src={inIco} id={'link-icon'} />
                    </Link>
                </span>
                        </div>
                    </Col>
                    <Col xs={12} sm={3} className="person-wrapper" id={'anton'}>
                        <div className="takeSpace">
                            <h3>Anton</h3>
                            <span>Unity developer, Technical researcher</span>
                            <br/>
                            <span>
                        anton.gunko2013@gmail.com
                        <Link target="_blank" to="https://github.com/bageton2">
                            <Image src={githubIco} id={'link-icon'} />
                        </Link>
                    </span>
                        </div>
                    </Col>
                    <Col xs={12} sm={3} className="person-wrapper" id={'andrey'}>
                        <div className="takeSpace">
                            <h3>Andrey</h3>
                            <span>Game developer, Game designer</span>
                            <br/>
                            <span>
                        frntxacc@gmail.com
                        <Link target="_blank" to="https://github.com/andrew-zhuravlev">
                            <Image src={githubIco} id={'link-icon'} />
                        </Link>
                    </span>
                        </div>
                    </Col>
                </Row>
                <Row className="show-grid text-center" id="row-people">
                    <Col xs={12} sm={3} className="person-wrapper" id={'rostic'}>
                        <div className="takeSpace">
                            <h3>Rostislav</h3>
                            <span>Back-end developer, Unity developer</span>
                            <br/>
                            <span>
                        go.go.gg.rostislav@gmail.com
                        <Link target="_blank" to="https://www.linkedin.com/in/mapinc/">
                            <Image src={inIco} id={'link-icon'} />
                        </Link>
                        <Link target="_blank" to="https://www.facebook.com/Avowedly">
                            <Image src={facebookIco} id={'link-icon'} />
                        </Link>
                        <Link target="_blank" to="https://github.com/MindfulMe">
                            <Image src={githubIco} id={'link-icon'} />
                        </Link>
                    </span>
                        </div>
                    </Col>
                    <Col xs={12} sm={3} className="person-wrapper" id={'alexandr'}>
                        <div className="takeSpace">
                            <h3>Alexandr</h3>
                            <span>Full-stack developer, UX/UI web designer</span>
                            <br/>
                            <span>
                        sasha732sasha000@gmail.com
                        <Link target="_blank" to="https://www.linkedin.com/in/alexandr-dobrovolsky-340886154/">
                            <Image src={inIco} id={'link-icon'} />
                        </Link>
                        <Link target="_blank" to="https://www.facebook.com/sasha.dobrovolskiy.52">
                            <Image src={facebookIco} id={'link-icon'} />
                        </Link>
                        <Link target="_blank" to="https://github.com/AlexandrDobrovolskiy">
                            <Image src={githubIco} id={'link-icon'} />
                        </Link>
                    </span>
                        </div>
                    </Col>
                    <Col xs={12} sm={3} className="person-wrapper" id={'vlad'}>
                        <div className="takeSpace">
                            <h3>Vlad</h3>
                            <span>Front-end developer, Unity developer</span>
                            <br/>
                            <span>
                        gromvlad12@gmail.com
                        <Link target="_blank" to="https://github.com/orgs/Fit-guys/people/VladGrom">
                            <Image src={githubIco} id={'link-icon'} />
                        </Link>
                    </span>
                        </div>
                    </Col>
                </Row>
                <footer id={'t-footer'}>
                    <h2>
                        Маєте питання?
                    </h2>
                    <h3>
                        Пишіть нам <span>help.cyber@gmail.com</span>
                    </h3>
                </footer>
            </div>
        );
    }
}

export default About;