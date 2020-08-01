import React, { useState } from 'react';

import { LineLogin } from 'reactjs-line-login';
import 'reactjs-line-login/dist/index.css';

const App = () => {
  const [payload, setPayload] = useState(null);
  const [idToken, setIdToken] = useState(null);

  /*
  Example:
    clientID='1654553430'
    clientSecret='deee1b60ae8de8658e214b67b25f6ec3'
    state='b41c8fd15b895f0fc28bf3b9d7da89054d931e7s'
    nonce='d78a51235f6ee189e831q9c68523cfa336917ada'
    redirectURI='http://localhost:3000/callback"
    scope='profile openid email'
  recommend : save secret in .env
  */

  return (
    <div>
      <LineLogin
        clientID=''
        clientSecret=''
        state=''
        nonce=''
        redirectURI=''
        scope=''
        setPayload={setPayload}
        setIdToken={setIdToken}
      />
      {payload && idToken ? (
        console.log('payload', payload, 'idToken', idToken)
      ) : (
        <></>
      )}
    </div>
  );
};

export default App;
