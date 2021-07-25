const { lstat } = require("fs");
const { platform } = require("os")

//makes code to be platform indepent

let path = require("path");
let fs = require("fs");

    // path.basename() /// gives file name simple last part of a FQ PATH

    // path.dirname() // returns directory name of the path;
    // path.extname(); //returns file extension type


    let inpArray = process.argv.slice(2); // slices input into array
    console.log(inpArray);
    let fname = inpArray[0];
    let contnt = inpArray[1];
    let wd = process.cwd();
    // console.log("current dir :"+wd);
    // console.log("name of the file : "+fname);
    // console.log("path of the file : "+contnt);

    let filePath = path.join(wd,"dir1",fname); // puts path as wd/dir1/fname
    fs.writeFileSync(filePath,contnt);
    let cn = fs.readFileSync(filePath);
    console.log("content : "+cn);
    // console.log("filePath : ",filePath)
    // fs.writeFileSync(filePath,contnt);