const { Cheerio } = require("cheerio");
let request = require("request");

let url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/ball-by-ball-commentary';

request(url,cb);

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
dataExtr(html); //print html if no errors
}
}




//function cb executes after last console.log(after)
//request will call google and then wait for cb function to execute and return smtg 
// cb function takes response ,error, html as arguments from request output and executes at end

function dataExtr(html){
    //search tool
    let searchTool = Cheerio.load(html);
    //css selectors to spot elements
    let elemRepArr = searchTool(".match-comment-wrapper .match-comment-long-text"); // accessing whole element div class 

    // console.log(elemRep);

    let lbc = searchTool(elemRepArr[0]).text(); // from elemrep array load again top element to load commentary for last ball dynamic match updates
    
    console.log("lbc : ",lbc);

    //text extract
    // let moduleName = elemRep.text().trim();
    // console.log(moduleName);
}
console.log("After");