var express = require('express');
var path = require('path');

var app = express();

// To access static file such as CSS, JS, Images 
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {    
    res.sendFile(path.join(__dirname, 'ui/index.html'));
});

app.get('/signup', function (req, res) {    
    res.sendFile(path.join(__dirname, 'ui/s2.html'));
});

app.get('/app', function (req, res) {    
    res.sendFile(path.join(__dirname, 'ui/s3.html'));
});

app.listen(8080, function () {
  console.log('library app listening on port 8080!');
});
