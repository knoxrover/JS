let fs = require('fs');
const { features } = require('process');

let files = ["f1.txt","f2.txt","f3.txt","f4.txt"];

//parallel read using async function

// start the work

//also give a cb function from which we can initimitate you after the work is completed

console.log("before");


//output
//first file read then -> cb call

/// deadlock wrong executed -> https://prnt.sc/1qnomqm

for(let i=0;i<files.length;){
fs.readFile(files[i],function cb(err,data){
    console.log("data"+data);
});
i++; //deadlock avoided coz no clash btwn for loop increments and cb waiting for ending 
}