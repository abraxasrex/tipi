var express  = require('express');
var fs = require('fs');
var app = express();

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


require('tipi.js')(app);
app.set('views', './views');
app.set('view engine', 'tipi');

app.get('/', function (req, res) {
  res.render('example', { sampleH: 'Hello world!', sampleP: 'this is a paragraph'});
});

var port = process.env.PORT || 8080;
app.listen(port);
