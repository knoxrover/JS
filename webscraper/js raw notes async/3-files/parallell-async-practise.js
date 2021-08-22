let fs = require('fs');
const { exit } = require('process');

console.log("Before");

fs.readFile("file1.txt",cb);
fs.readFile("file2.txt",cb);            //asyn becoz no sync word
fs.readFile("file3.txt",cb);            // parallel becoz independent of each

function cb(err,content){
    console.log(""+content);
}

console.log("After");
