var express  = require('express');
var fs = require('fs');
var app = express();

require('./tipi.js')(app);
app.set('views', './views');
app.set('view engine', 'tipi');

app.get('/', function (req, res) {
  res.render('example', { sampleH: 'Hello world!', sampleP: 'this is a paragraph'});
});

var port = process.env.PORT || 8080;
app.listen(port);
