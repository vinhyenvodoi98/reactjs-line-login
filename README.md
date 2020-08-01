# reactjs-line-login

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/reactjs-line-login.svg)](https://www.npmjs.com/package/reactjs-line-login) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save reactjs-line-login
```

## Demo

![](https://media.giphy.com/media/UV4u60zcGqpIocxn9u/giphy.gif)

## Usage

Please read LINE login document to fill out the fields and setup.

https://developers.line.biz/en/docs/line-login/integrate-line-login/

```jsx
import React, { useState } from 'react';

import { LineLogin } from 'reactjs-line-login';
import 'reactjs-line-login/dist/index.css';

const App = () => {
  const [payload, setPayload] = useState(null);
  const [idToken, setIdToken] = useState(null);

  /*
  Example:
    clientID='1854553430'
    clientSecret='deee1bf0ae8deg658e214b67b25f6ec3'
    state='b41c8fd15b895f0fc28bfwb9d7da89054d931e7s'
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
```

## License

MIT © [vinhyenvodoi98](https://github.com/vinhyenvodoi98)
