import React from 'react';

import AuthUserContext from '../Session/AuthUserContext';
import SignOutButton from '../SignOut';
import * as routes from '../../constants/routes';
import Navbar from "react-bootstrap/es/Navbar";
import Nav from "react-bootstrap/es/Nav";
import NavItem from "react-bootstrap/es/NavItem";
import {LinkContainer} from "react-router-bootstrap";
import Image from "react-bootstrap/es/Image";
import smalLogo from '../../images/unicornBlue.png';
import './navigation.css';

const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>;

const NavHeader = () =>
    <Navbar.Header>
        <Navbar.Brand id={"nav-brand"}>
            <Image src={smalLogo} className="logo" alt={"logo"}  responsive/>
            <LinkContainer to={routes.LANDING}>
                <span>CyberUnicorns</span>
            </LinkContainer>
        </Navbar.Brand>
    </Navbar.Header>;

const NavigationAuth = () =>
    <Navbar inverse collapseOnSelect>
        <NavHeader />
        <Nav>
            <NavItem>
                <LinkContainer to={routes.HOME}>
                    <div>Home</div>
                </LinkContainer>
            </NavItem>
            <NavItem>
                <LinkContainer to={routes.ACCOUNT}>
                    <div>Account</div>
                </LinkContainer>
            </NavItem>
            <NavItem>
                Rules
            </NavItem>
        </Nav>
        <Nav pullRight>
            {/*<NavItem>
                <LinkContainer to={routes.LANDING}>
                    <div>Project</div>
                </LinkContainer>
            </NavItem>
            <NavItem>
                <LinkContainer to={routes.LANDING}>
                    <div>About us</div>
                </LinkContainer>
            </NavItem>
            <NavItem>
                <LinkContainer to={routes.LANDING}>
                    <div>Technologies</div>
                </LinkContainer>
            </NavItem>*/}
            <NavItem eventKey={2} href="#">
                <SignOutButton />
            </NavItem>
        </Nav>
    </Navbar>;

const NavigationNonAuth = () =>
    <Navbar inverse collapseOnSelect>
        <NavHeader />
        <Nav>
            {/*<NavItem>
                <LinkContainer to={routes.LANDING}>
                    <div>Project</div>
                </LinkContainer>
            </NavItem>
            <NavItem>
                <LinkContainer to={routes.LANDING}>
                    <div>About us</div>
                </LinkContainer>
            </NavItem>
            <NavItem>
                <LinkContainer to={routes.LANDING}>
                    <div>Technologies</div>
                </LinkContainer>
            </NavItem>*/}
        </Nav>
        <Nav pullRight>
            <NavItem eventKey={1}>
                <LinkContainer to={routes.SIGN_IN}>
                    <span>Sign In</span>
                </LinkContainer>
            </NavItem>
        </Nav>
    </Navbar>;

export default Navigation;
