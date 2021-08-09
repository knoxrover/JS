const cheerio = require("cheerio");
const fs = require("fs");

let request = require("request");

let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard";


request(url,cb2);

function cb2(error,response,html){

    if(error){
        console.log(error);
    }
    else if(response.statusCode == 404){
        console.log("page not found")
    }
    else{
    scoreExt(html);
    }
    
    }

function scoreExt(html){
    let searchTool  = cheerio.load(html);
    let elemsArr = searchTool(".Collapsible");
    let scoreCard = "";
    for(let i=0;i<elemsArr.length;i++){
        scoreCard+= searchTool(elemsArr[i]).html();
    }
    // fs.writeFileSync("match.html",scoreCard);

    
}