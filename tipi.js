
"use strict";
var fs = require('fs');

var sub_model = [
  {
    alias:'a',
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
    var arr = options.arr;
    fs.readFile(filepath, function(err, content){
      if(err){
        return callback(new Error(err));
      }
      var rendered = content.toString();
      arr.forEach(function(option){
        var regex = "/\^"+ option.alias + "\^/g";
    //    var regex = new RegExp('^' + option.alias + '^', 'g');
        // if(option !== 'settings' && option !== '_locals' && option !== 'cache'){
          rendered = rendered.replace("^" + option.alias + "^", '<' + option.tag + '>' + option.message + '</'+option.tag+'>')
        // }
        console.log(regex);
      });
              return callback(null, rendered);
    });
  });

}
