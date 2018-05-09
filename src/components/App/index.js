import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from '../Navigation/index';
import LandingPage from '../Landing/index';
import Project from '../Project/project';
import SignUpPage from '../SignUp/index';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import withAuthentication from '../Session/withAuthentication';
import * as routes from '../../constants/routes';
import Technologies from "../Technologies";
import About from "../About";

const App = () =>
  <Router>
    <div>
      <Navigation />
        <Route exact path={routes.LANDING} component={() => <LandingPage />} />
        <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
        <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
        <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
        <Route exact path={routes.HOME} component={() => <HomePage />} />
        <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
        <Route exact path={routes.PROJECT} component={() => <Project />} />
        <Route exact path={routes.TECHNOLOGIES} component={() => <Technologies />} />
        <Route exact path={routes.ABOUT} component={() => <About />} />
    </div>
  </Router>;

export default withAuthentication(App);