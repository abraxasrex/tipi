var express  = require('express');
var fs = require('fs');
var app = express();
var model = require('./models/example.js');

require('./tipi.js')(app);
app.set('views', './views');
app.set('view engine', 'tipi');

app.get('/', function (req, res) {
  res.render('example', model);
});

var port = process.env.PORT || 8080;
app.listen(port);
