var fs = require('fs');

var contents = fs.readFileSync(process.argv[2]);
var result = contents.toString().split('\n');
console.log(result.length - 1);