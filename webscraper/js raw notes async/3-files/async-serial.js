let fs = require("fs");
console.log("before");
fs.readFile("file1.txt",cb);

function cb(err,content){
    console.log("content "+content);
    fs.readFile("file2.txt",cb1);
}
function cb1(err,content){
    console.log("content "+content);
    fs.readFile("file99.txt",cb2);
}
function cb2(err,content){
    if(err){
        console.log("error "+err);
    }
    else{
    console.log("content "+content);
    }
}
console.log("After");