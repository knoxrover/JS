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
    //get team name from the scraped scorecards data
    for(let i=0;i<elemsArr.length;i++){
        // scoreCard = searchTool(elemsArr[i]).html();
        let teamName = searchTool(elemsArr[i]).find("h5").text();
        teamName = teamName.split("INNINGS")[0];
        console.log("```````````````````````````````");
        console.log(teamName);
        console.log("```````````````````````````````");

        //get player name by gng to batsman table 
        //then to tbody then tr and then checking
        //for tr with 8 cols
        // then taking that and getting[0] for name
        let batsmenTableBodyArr = searchTool(elemsArr[i]).find(".table.batsman tbody tr");
        for(let i=0;i<batsmenTableBodyArr.length;i++){
            let numberOfTd = searchTool(batsmenTableBodyArr[i]).find("td");
            if(numberOfTd.length==8){
                // console.log("You are valid!");
                let playerName = searchTool(numberOfTd[0]).text();
                console.log(playerName);
            }
        }
        


     // fs.writeFileSync(`innings${i+1}.html`,scoreCard);
    }   
    // fs.writeFileSync("match.html",scoreCard);
    



}