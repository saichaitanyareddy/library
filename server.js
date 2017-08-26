var express = require('express');
var path = require('path');
var crypto =require('crypto');


var app = express();  app.get('/', function (req, res) {
    
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/:fileName', function (req, res) {
  res.sendFile(path.join(__dirname, req.params.fileName));
});


app.listen(8080, function () {
  console.log('library app listening on port 8080!');
});