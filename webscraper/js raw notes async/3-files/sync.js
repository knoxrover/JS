let fs = require("fs");
console.log("Before");
let content = fs.readFileSync("file1.txt");
console.log("content "+content);
content = fs.readFileSync("file2.txt");
console.log("content "+content);
content = fs.readFileSync("file3.txt");
console.log("content "+content);
console.log("After");
