const cheerio = require("cheerio");
const fs = require("fs");

let request = require("request");

let url1 = "https://coinmarketcap.com/";

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
priceExt(html); 
}

}



