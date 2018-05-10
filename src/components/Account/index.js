import React from 'react';

import AuthUserContext from '../Session/AuthUserContext';
import PasswordChangeForm from '../PasswordChange/index';
import withAuthorization from '../Session/withAuthorization';

const AccountPage = () =>
  <AuthUserContext.Consumer>
    {authUser =>
      <div>
        <PasswordChangeForm />
      </div>
    }
  </AuthUserContext.Consumer>;

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);