let fs = require('fs');
let path = require('path');

let currentDir = process.cwd();
console.log(currentDir);

let filesArr = fs.readdirSync(currentDir);
console.log(filesArr);

