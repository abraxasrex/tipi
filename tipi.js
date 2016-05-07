
var fs = require('fs');
module.exports = function(app){
  //define engine
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

}
