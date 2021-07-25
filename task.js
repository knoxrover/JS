let path = require("path");
let fs = require("fs");

let inputArr = process.argv.slice(2);
let mainDir = inputArr[0];

// let firstMod = inputArr[1];
// let secMod  = inputArr[2];
// let thirdMod = inputArr[3];


let cwd = process.cwd();

let mainDirPath = path.join(cwd,mainDir);

// let firstModulePath = path.join(cwd,mainDir,firstMod)
// let secModulePath = path.join(cwd,mainDir,secMod)
// let thirdModulePath = path.join(cwd,mainDir,thirdMod)


let ismmodP = fs.existsSync(mainDirPath);
if(ismmodP){
    console.log("Main Directory already exists");
    return;
}
else{
    fs.mkdirSync(mainDirPath);
    console.log("main dir created",mainDir);
    
    let modnamesinp = inputArr.slice(1,4);

    for(let i=0;i<modnamesinp.length;i++){
        let modpath = path.join(mainDirPath,modnamesinp[i]);
        console.log(modnamesinp[i]," created");
        fs.mkdirSync(modpath);
        for(let j=1;j<=5;j++){
            let modpp = path.join(modpath,"Module"+j);
            fs.mkdirSync(modpp);    
            console.log("Module "+j, "created inside",modnamesinp[i]);
            let fpath = path.join(modpp,"content.md");
            fs.writeFileSync(fpath,"#hello");
        }

    }
}