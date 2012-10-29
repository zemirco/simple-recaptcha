var should = require('should');

var simple_recaptcha = require('../index');

describe('simple_recaptcha', function() {
  
  it('should return an error when response is empty', function() {
    simple_recaptcha('privKey', '127.0.0.1', 'someChallenge', '', function(err) {
      err.message.should.equal('response must not be empty');
    });
  });
  
  it('should return an error when private key is wrong', function() {
    simple_recaptcha('privKey', '127.0.0.1', 'someChallenge', 'someResponse', function(err) {
      err.message.should.equal('invalid-site-private-key');
    });
  });
  
});