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

/*`Vinayrajs-MacBook-Pro:fs-task vinayrajcheekoti$ node task.js webdevtask "react" "browser" "java"
main dir created webdevtask
react  created
Module 1 created inside react
Module 2 created inside react
Module 3 created inside react
Module 4 created inside react
Module 5 created inside react
browser  created
Module 1 created inside browser
Module 2 created inside browser
Module 3 created inside browser
Module 4 created inside browser
Module 5 created inside browser
java  created
Module 1 created inside java
Module 2 created inside java
Module 3 created inside java
Module 4 created inside java
Module 5 created inside java` */