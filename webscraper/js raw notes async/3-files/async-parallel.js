let fs = require("fs");
console.log("before");
fs.readFile("file1.txt",cb);
fs.readFile("file2.txt",cb1);
fs.readFile("file3.txt",cb2);

//async -> so no sync word and needs cb
//parallel -> so each cb not linked with each other 

function cb(err,content){
    console.log("content "+content);
}
function cb1(err,content){
    console.log("content "+content);
}
function cb2(err,content){
    console.log("content "+content);
}

console.log("After");

