let fs = require("fs");
let path = require("path");



function treefn(src){
    console.log("Tree command executed with the command"+src);
    if(src == undefined)
        src = process.cwd();
    let content = fs.readdirSync(src);


    let parent = path.basename(src);

    let comPath = "|-----" + parent;

    for(let i=0;i<content.length;i++){
        comPath = comPath + "\n\t" + "|------"+content[i];
    }
    console.log(comPath);
 
}

module.exports = {
    treefxn : treefn
}