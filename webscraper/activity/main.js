const cheerio = require("cheerio");
const fs = require("fs");

let request = require("request");

let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";

request(url,cb);

function cb(error,response,html){

if(error){
    console.log(error);
}
else if(response.statusCode == 404){
    console.log("page not found")
}
else{
dataExtr(html);
}

}

function dataExtr(html){
    let searchTool = cheerio.load(html);
    let anchorrep = searchTool('a[data-hover="View All Results"]');
    let link = anchorrep.attr("href");

    let fullPageLink = `https://www.espncricinfo.com${link}`;
    console.log(fullPageLink);

    request(fullPageLink,cb1);

}

function cb1(error,response,html){
    if(error){
        console.log(error);
    }
    else if(response.statusCode == 404){
        console.log("page not found")
    }
    else{
   
       getAllScoreCard(html);

    }
}

function getAllScoreCard(html){
    let searchTool = cheerio.load(html);
}

