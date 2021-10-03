//npm install pdf-lib
//node FirstFolderCreation.js --source="" --dest="";

let fs = require("fs");
let minimist = require("minimist");
let path = require("path");
let pdf = require("pdf-lib");

let args = minimist(process.argv);

let teamsJson = fs.readFileSync(args.source, "utf-8");
let teams = JSON.parse(teamsJson);

for (let i = 0; i < teams.length; i++) {
  let folderName = path.join(args.dest, teams[i].name);
  console.log(folderName);
 
//   fs.mkdirSync(folderName);
  for(let j=0;j<teams[i].length;j++){
      console.log(teams[i].matches[j]);
    //   let fileName = path.join(folderName,teams[i].matches[j].vs+".pdf");
    //   createScoreCard(teams[i].name,teams[i].matches[j],fileName);
  }
}

function createScoreCard(teamName,match,matchFileName){


}
