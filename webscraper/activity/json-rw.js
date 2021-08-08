let fs = require("fs");

let inputArr = ["hi", "hello","how ru "];

//object / array to json with strings as keys elements
//write -> Stringify from string to json .. JSON.stringify

let jsonWritable = JSON.stringify(inputArr);
fs.writeFileSync("abc.json",jsonWritable);

//read -> from json to string JSON.parse

let content = fs.readFileSync("abc.json");
let jsonData = JSON.parse(content);



// append to json 
// by push to string then convert back to json 


jsonData.push("heyyyyyy");
let jsonWritable  = JSON.stringify(jsonData);
fs.writeFileSync("abc.json",jsonWritable);



