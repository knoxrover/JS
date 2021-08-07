const cheerio = require("cheerio");
const { contents } = require("cheerio/lib/api/traversing");
const { getElementById } = require("domutils");
const fs = require("fs");
let request = require("request");



let url1 = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/full-scorecard";

request(url1,cb);

function cb(error,response,html){
    //console.log(error) displays if any error
    //console.log('body:',html) displays html

if(error){
    console.log(error);
}
else if(response.statusCode == 404){
    console.log("page not found")
}
else{
dateExt(html); 
}

}


function dateExt(html){

let searchTool = cheerio.load(html);

let bowlers = searchTool(".table.bowler tbody tr");


for(let i=0;i<bowlers.length;i++){
    let cols = searchTool(bowlers[i]).find("td");
    let aElem = searchTool(cols[0]).find("a");
    let link = aElem.attr("href");
    let fullLink = `https://www.espncricinfo.com/${link}`;
    request(fullLink,newCb);
}
}

function newCb(error,response,html){
    if(error){
        console.log(error);

    }
    else if(response.statusCode==404){
        console.log("page not found.");
    }
    else{
        // console.log(html);
        console.log("``````````````````````");
        getBd(html);
    }
}


function getBd(html){
    let searchTool = cheerio.load(html);
    let headingsArr = searchTool(".player-card-description");
    let dob = searchTool(headingsArr[2]).text();
    // console.log(dob);

    let name  = searchTool(headingsArr[0]).text();
    console.log(name,":- ",dob); ///sorting homework

}

console.log("After");