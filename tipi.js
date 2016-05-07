
"use strict";
var fs = require('fs');

var sub_model = [
  {
    alias:'c',
    tag: "h1",
    message: "started from the bottom"
  },
    {
      alias:'b',
    tag: "button",
    message: "now we here"
  }
];

module.exports = function(app){
  //define engine
  app.engine('tipi', function(filepath, options, callback ){
    fs.readFile(filepath, function(err, content){
      if(err){
        return callback(new Error(err));
      }
      var rendered = content.toString();
      sub_model.forEach(function(option){
        if(option !== 'settings' && option !== '_locals' && option !== 'cache'){
          console.log('option key:', option.message, option.message, option.tag);
          rendered = rendered.replace('^' + option.alias + '^', '<' + option.tag + '>' + option.message + '</'+option.tag+'>')
        }
      });
              return callback(null, rendered);
    });
  });

}
