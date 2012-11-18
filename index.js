var http = require('http');

var options = {
  host: 'www.google.com',
  port: 80,
  path: '/recaptcha/api/verify',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
};

module.exports = function(privateKey, remoteIP, challenge, response, cb) {
  var error = null;
  
  if (!privateKey) {
    error = 'Private key is required';
  } else if (!remoteIP) {
    error = 'Remote IP is required';
  } else if (!challenge) {
    error = 'Challenge is required';
  } else if (!response) {
    error = 'Response is required';
  }
  
  if (error) {
    return cb(new Error(error));
  }
  
  var request = http.request(options, function(response) {
    var body = '';
    
    response.on('error', function(err) {
      return cb(new Error(err));
    });
    
    response.on('data', function(chunk) {
      body += chunk;
    });
    
    response.on('end', function() {
      var success = body.split('\n')[0] === "true";
      var error = body.split('\n')[1];
      if (!success) return cb(new Error(error));
      cb(null);
    });
    
  });
  
  request.on('error', function(err) {
    return cb(new Error(err));
  });
  
  var query = 'privatekey=' + privateKey + 
              '&remoteip=' + remoteIP + 
              '&challenge=' + challenge + 
              '&response=' + response;
              
  request.write(query);
  
  request.end();
  
};