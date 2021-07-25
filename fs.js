let fs = require("fs");
let content = fs.readFileSync("fs.txt");
console.log("content : "+content);
fs.writeFileSync("fs.txt","over ridden");
console.log("content : "+content);
fs.writeFileSync("madebyfs.txt","new content being put in");
fs.appendFileSync("madebyfs.txt","\nappended content ");
console.log
fs.writeFileSync("fs.txt","over ridden");
let content1 = fs.readFileSync("fs.txt");
console.log("content : "+content1);

// fs.unlinkSync("madebyfs.txt");

// console.log(" file removed");

fs.mkdirSync();
fs.rmdirSync();

fs.existsSync();
fs.unlinkSync();

