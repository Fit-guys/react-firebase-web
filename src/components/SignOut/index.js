import React from 'react';

import { auth } from '../../firebase';
import Button from "react-bootstrap/es/Button";

const SignOutButton = () =>
      <div
          onClick={auth.doSignOut}
      >
          Sign Out
      </div>;

export default SignOutButton;
