var express  = require('express');
var fs = require('fs');
// var Regex = require("regex");
var app = express();
// var aMatch = new Regex(/\^a\^/, 'gi');
// var bMatch = new Regex(/\^b\^/, 'gi');
app.engine('tipi', function(filepath, options, callback ){
  fs.readFile(filepath, function(err, content){
    if(err){
      return callback(new Error(err));
    }
    var rendered = content.toString().replace(/\^a\^/g, '<h1>' + options.sampleH + '</h1>')
      .replace(/\^b\^/g, '<p>' + options.sampleP + '</p>');
    return callback(null, rendered);
  });
});

app.set('views', './views');
app.set('view engine', 'tipi');

app.get('/', function (req, res) {
  res.render('test', { sampleH: 'Hello world!', sampleP: 'this is a paragraph'});
});

var port = process.env.PORT || 8080;
app.listen(port);
