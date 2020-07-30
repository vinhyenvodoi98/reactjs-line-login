# reactjs-line-login

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/reactjs-line-login.svg)](https://www.npmjs.com/package/reactjs-line-login) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save reactjs-line-login
```

## Usage

```jsx
import React, { useState } from 'react'

import { LineLogin } from 'reactjs-line-login'
import 'reactjs-line-login/dist/index.css'

const App = () => {
  const [payload, setPayload] = useState(null)
  const [idToken, setIdToken] = useState(null)

  /*
  Example:
    clientID='1868550780'
    clientSecret='5256dfegwca9674c3d15193155a1e3f76c'
    state='b41c8fd15b895f0fc28bf3b9d7da89054d931e7s'
    nonce='d78a51235f6ee189e831q9c68523cfa336917ada'

  recommend : save secret in .env
  */

  return (
    <div>
      <LineLogin
        clientID=''
        clientSecret=''
        state=''
        nonce=''
        setPayload={setPayload}
        setIdToken={setIdToken}
      />
      {console.log('payload', payload)}
      {console.log('idToken', idToken)}
    </div>
  )
}
```

## License

MIT © [vinhyenvodoi98](https://github.com/vinhyenvodoi98)
