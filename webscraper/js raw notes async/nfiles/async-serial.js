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
//can be solved using recrusion and without foor loop 

function serialReader(i){
if(i==files.length) return;

fs.readFile(files[i],function cb(err,data){
    console.log("data"+data);
serialReader(i+1);
});

}

serialReader(0);
console.log("after");


