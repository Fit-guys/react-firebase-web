import React from 'react';
import { Link } from 'react-router-dom';

import AuthUserContext from '../Session/AuthUserContext';
import SignOutButton from '../SignOut';
import * as routes from '../../constants/routes';
import Navbar from "react-bootstrap/es/Navbar";
import Nav from "react-bootstrap/es/Nav";
import NavItem from "react-bootstrap/es/NavItem";
import {LinkContainer} from "react-router-bootstrap";
import './navigation.css';

const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>;

const NavigationAuth = () =>
    <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <LinkContainer to={routes.LANDING}>
                    <span>CyberUnicorns 🦄</span>
                </LinkContainer>
            </Navbar.Brand>
        </Navbar.Header>
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
            <NavItem eventKey={2} href="#">
                <SignOutButton />
            </NavItem>
        </Nav>
    </Navbar>;

const NavigationNonAuth = () =>
    <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <LinkContainer to={routes.LANDING}>
                    <span>CyberUnicorns 🦄</span>
                </LinkContainer>
            </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
                <NavItem eventKey={1} componentClass={Link} to={routes.SIGN_IN}>
                    <div>Sign In</div>
                </NavItem>
        </Nav>
    </Navbar>;

export default Navigation;
