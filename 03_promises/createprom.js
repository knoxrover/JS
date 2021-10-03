let promise = require('puppeteer');
let fs = require('fs');


function myPromisifiedFsReader(filePath){
    

    return new Promise(function cb(resolve, reject){
       fs.readFile(filePath,function cb(err,data){
           if(err){
               reject(err);
           }
           else{
               resolve(data);
           }
       })
    })
}

console.log('before');
// polyfill for fsreadfile
//consumer

let freadPromise = myPromisifiedFsReader("f1.txt");
console.log("promise",freadPromise);
// promise -> data -> will be resolved
//function pass -> resolve from promise

freadPromise.then(function cb(data){
    console.log("data "+data);
}
)

//funtion pass for reject 

//promise if resolved, we need to resolve by then , or else we have to reject by catch

freadPromise.catch(function cb(err){
    console.log(err);
})
//done
console.log("after");
