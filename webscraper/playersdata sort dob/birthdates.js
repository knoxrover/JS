const cheerio = require("cheerio");
const fs = require("fs");
let request = require("request");

let url1 = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/full-scorecard";

let bowlersArr = [];
let count = 0;
console.log("before");

request(url1,cb);

// handle errors / function directive using cb function i.e calls to bowlers data which inturn calls to cb for profile links 

function cb(error,response,html){
    // console.log(error) //sdisplays if any error
    // console.log('body:',html) //displays html
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

//function to extract link of each bowler row from .table.bowler tbody tr and finds link from each row then calls to dob extractor

function dateExt(html){

let searchTool = cheerio.load(html);
let bowlers = searchTool(".table.bowler tbody tr");
for(let i=0;i<bowlers.length;i++){
    let cols = searchTool(bowlers[i]).find("td");
    if(cols.length>1){
        count++;
    }
}
for(let i=0;i<bowlers.length;i++){
    let cols = searchTool(bowlers[i]).find("td");
    if(cols.length>1){
        let aElem = searchTool(cols[0]).find("a");
        let link = aElem.attr("href");
        let fullLink = `https://www.espncricinfo.com/${link}`;
        console.log(fullLink); //async function
        request(fullLink,newCb);
    }
}
}

// dateExt will call to each profile link using cb and 

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
        //check 
        if(bowlersArr.length==count){
            console.table(bowlersArr);
            sortBD(bowlersArr);
        }
    }
}

//function to get dobs only .....no sorting applied
function getBd(html){
    let searchTool = cheerio.load(html);
    let headingsArr = searchTool(".player-card-description");
    let dob = searchTool(headingsArr[2]).text();
    // console.log(dob);
    let name  = searchTool(headingsArr[0]).text();

    bowlersArr.push({"name" : name,"age":dob});
    // console.table(bowlersArr);
    console.log(name,":- ",dob); ///sorting homework

}

console.log("After");

function sortBD(bowlersArr){
    //sort 
    //age -> convert

    let newArr = bowlersArr.map(singleFn);

    function singleFn(obj){
        let name  = obj.name;
        let age = obj.name;
        let ageArr = obj.age.split(" ");
        let years  = ageArr[0].slice(0,ageArr[0].length-1);
        let days = ageArr[1].slice(0,ageArr[1].length-1);
        let ageInDays = Number(years) *365 + Number(days);
        return {
            name : name,
            ageInDays:ageInDays,
            age : age,
        }

    }

    let sortedArray  =  newArr.sort(cb);

    function cb(objA, objB){
        return objB.ageInDays - objA.ageInDays;
    }
    let finalArr = sortedArray.map(removeageIndays);

    function removeageIndays(obj){
        return {
            name : obj.name,
            age : obj.age,
        }
    }
    console.table(finalArr);

}
