let ms = require('minimist');
let axios= require('axios');
let fs = require('fs');


let args = ms(process.argv);

console.log(args.url);
console.log(args.dest);

let downloadPromise = axios.get(args.url);

downloadPromise.then(function(response){
    let html = response.data;
    // console.log(html);
    fs.writeFileSync(args.dest,html,"utf-8");
}).catch(function(err){
    console.log(err);
})