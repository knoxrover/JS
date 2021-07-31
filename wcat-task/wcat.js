let fs = require("fs");
let path = require("path");


let inputArr = process.argv.slice(2);
let filesArr=[];

for(let i=0;i<inputArr.length;i++){
    let fir
}




let filesArr = inputArr;

for(let i=0;i<filesArr.length;i++){
    let ans = fs.existsSync(filesArr[i])
    if(ans==false){
        console.log("File doesn't exist");
        return;
    }
}

let content="";
for(let i=0;i<filesArr.length;i++){
    content=content +"\n\n"+fs.readFileSync(filesArr[i]);
}

console.log(content);
