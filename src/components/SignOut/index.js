import React from 'react';

import { auth } from '../../firebase';

const SignOutButton = () =>
      <div
          onClick={auth.doSignOut}
      >
          Вихід
      </div>;

export default SignOutButton;
