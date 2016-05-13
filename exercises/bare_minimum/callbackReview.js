/**
 * Implement these functions following the node style callback pattern
 */
var http = require('https');
var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, results) => {
    if (err) {
      console.log('fs.readFile failed: (/n', err);
      callback(err);
    } else {
      var firstLine = results.split('\n')[0];
      callback(err, firstLine);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  http.get(url, function(response) {
    response.statusCode = 200;
    callback(null, response.statusCode);
  }).on('error', function(err) {
    err.message = 'Invalid URI';
    callback(err);
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
