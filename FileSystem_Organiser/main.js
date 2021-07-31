let hobj = require("./commands/help.js");
let org = require("./commands/organize.js");
let treeObj = require("./commands/tree.js");



let inputArr = process.argv.slice(2); // 2 words skipped (input parameters seperated by space)
let command = inputArr[0];

switch(command){

    case "tree":
        treeObj.treefxn (inputArr[1]);
        break;
    case "organize":
        org.orgFxn(inputArr[1]);
        break;
    case "help":
        hobj.helpFxn();
        break;
    default:
        console.log("_/\\_ Please enter a proper command.")
        break;

}



