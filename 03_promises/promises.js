let fs = require('fs');
//callback way of doing async things;

fs.readFile("f1.txt",function cb(err,data){
    console.log(err);
    console.log(data);
});


console.log("before");
let freadPromise = fs.promises.readFile("f1.txt");
console.log("Promise ",freadPromise);


// promise if resolved -> data -> accepted
//function pass -> resolve

freadPromise.then(function cb(data){
    console.log("Data "+data);
})

//function passs for reject cases

freadPromise.catch(function cb(err){
    console.log("Error : "+err);
})

console.log("After");