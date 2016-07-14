var fs = require('fs');
var path = require('path');
var dir = process.argv[2]; //path name
var ext = '.' + process.argv[3]; //file extension

fs.readdir(dir, function (err, list) {
  list.forEach(function(item) {
      if (path.extname(item) === ext) {
          console.log(item)
      };
  });
});