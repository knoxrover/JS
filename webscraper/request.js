let request = require("request");
request('www.google.com',cb);

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
console.log(html); //print html if no errors
}
}

console.log("After");

//request will call google and then wait for cb function to execute and return smtg 
// cb function takes response ,error, html as arguments from request output and 