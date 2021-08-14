const cheerio = require("cheerio");
const fs = require("fs");

let request = require("request");

// let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/ball-by-ball-commentary";

let url1 = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/full-scorecard";

// request(url,cb);
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
// dataExtr(html); //print html if no errors from our extractor function
bowlExtr(html); 
}

}

//function cb executes after last console.log(after)
//request will call google and then wait for cb function to execute and return smtg 
// cb function takes response ,error, html as arguments from request output and executes at end

console.log();

// lbc function last ball commentary

console.log();
// function dataExtr(html){
//     //search tool
//     let searchTool = cheerio.load(html);
//     //css selectors to spot elements
//     let elemRepArr = searchTool(".match-comment-wrapper .match-comment-long-text"); // accessing whole element div class 

//     // console.log(elemRep);

//     let lbc = searchTool(elemRepArr[0]).text(); // from elemrep array load again top element to load commentary for last ball dynamic match updates
    
//     console.log("lbc : ",lbc);

//     //text extract
//     // let moduleName = elemRep.text().trim();
//     // console.log(moduleName);
// }

console.log();


//extract bowlers data name and wickets 
function bowlExtr(html){
    let searchTool1 = cheerio.load(html);
    let bowlers = searchTool1(".table.bowler tbody tr");
    // let elemArr = searchTool1(".table.bowler");



//hwt bowler highest wicket taker
    let bowler = "";
    let hwt = 0;
    
    // console.log(bowlers);

    // console.log(elemArr.length);


    // let htmlData = "";

    // for(let i=0;i<elemArr.length;i++){
    //   htmlData += searchTool1(elemArr[i]).html();
    // }

    // fs.writeFileSync("tabledata.html",htmlData);

    // console.log(htmlData);

    for(let i=0;i<bowlers.length;i++){
        let cols = searchTool1(bowlers[i]).find("td"); 
        let name = searchTool1(cols[0]).text();   /// whenever using index based variables, use searchTool
        let wickets = searchTool1(cols[4]).text();
        console.log("Name : "+name + "  |||  Wickets : ",wickets);


        if(wickets>=hwt){
            hwt = wickets;
            bowler = name;
        }

    }
    console.log('````````````````````');
    console.log(bowler+"    "+hwt);


}

// console.log("After");