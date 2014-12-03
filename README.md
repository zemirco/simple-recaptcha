# simple reCAPTCHA

[![Build Status](https://travis-ci.org/zeMirco/simple-recaptcha.png)](https://travis-ci.org/zeMirco/simple-recaptcha)

Implements Google's [reCAPTCHA](https://developers.google.com/recaptcha/) in node.js. Can be used with pure node.js or in combination with express.js. Doesn't require additional libraries, just core `http` module.

## Installation

- sign up for an [API key](https://www.google.com/recaptcha/admin/create)
- follow [instructions](https://developers.google.com/recaptcha/docs/display#Standard) to set up the client
- keep `recaptcha_challenge_field` and `recaptcha_response_field` as names for the input fields

```bash
$ npm install simple-recaptcha
```

## Usage with express.js

Returns an error when something is wrong. If no error is present just go ahead.

```js
var simple_recaptcha = require('simple-recaptcha');

app.post('/', function(req, res) {
  
  var privateKey = '1234567890abcdef'; // your private key here
  var ip = req.ip;
  var response = req.body['g-recaptcha-response'];
      
  simple_recaptcha(privateKey, ip, response, function(err) {
    if (err) return res.send(err.message);
    res.send('verified');
  });
});
```

## Test

Requires mocha and should.

```bash
$ make test
```

or

```bash
$ npm test
```

## License

Copyright (C) 2012 [Mirco Zeiss](mailto: mirco.zeiss@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.