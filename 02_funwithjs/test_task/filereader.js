let fs = require("fs");
let path = require("path");

let inputArr = input.slice(2);

let inputDir = inputArr[0];

//contents of dir read krle i.e entities in a dir

let entitties = fs.readdirSync(inputDir);

let content = "";

for(let i =0 ;i<entitties.length;i++){
   let entittyname = entitties[i];


   let fullpath = path.join(inputDir,entittyname);
   let statsOfAPath = fs.lstatSync(fullPath);
   if (statsOfAPath.isFile()) {
      let ext = path.extname(fullPath);
        console.log(ext);
        if (ext == ".txt") {
            content += fs.readFileSync(fullPath);

        }
    }
}      

let filePath = path.join(inputDir, "summary.txt");
fs.writeFileSync(filePath, content);
console.log("summary file created");