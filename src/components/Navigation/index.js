import React from 'react';
import { Link } from 'react-router-dom';

import AuthUserContext from '../Session/AuthUserContext';
import SignOutButton from '../SignOut';
import * as routes from '../../constants/routes';
import Navbar from "react-bootstrap/es/Navbar";
import Nav from "react-bootstrap/es/Nav";
import NavItem from "react-bootstrap/es/NavItem";

const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

const NavigationAuth = () =>
    <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <Link to={routes.HOME}>Home</Link>
            </Navbar.Brand>
        </Navbar.Header>
        <Nav>
            <NavItem>
                <Link to={routes.LANDING}>Landing</Link>
            </NavItem>
            <NavItem>
                <Link to={routes.ACCOUNT}>Account</Link>
            </NavItem>
        </Nav>
        <Nav pullRight>
            <NavItem eventKey={1} href="#">
                Rules
            </NavItem>
            <NavItem eventKey={2} href="#">
                <SignOutButton />
            </NavItem>
        </Nav>
    </Navbar>;
  //<ul>
  //  <li><Link to={routes.LANDING}>Landing</Link></li>
  //  <li><Link to={routes.HOME}>Home</Link></li>
  //  <li><Link to={routes.ACCOUNT}>Account</Link></li>
  //  <li><SignOutButton /></li>
  //</ul>

const NavigationNonAuth = () =>
    <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <Link to={routes.HOME}>Home</Link>
            </Navbar.Brand>
        </Navbar.Header>
        <Nav>
            <NavItem>
                <Link to={routes.LANDING}>Landing</Link>
            </NavItem>
            <NavItem>
                <Link to={routes.SIGN_IN}>Sign In</Link>
            </NavItem>
        </Nav>
    </Navbar>;
  //<ul>
  //  <li><Link to={routes.LANDING}>Landing</Link></li>
  //  <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
  //</ul>

export default Navigation;
