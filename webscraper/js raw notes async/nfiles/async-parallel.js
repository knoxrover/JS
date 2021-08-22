let fs = require("fs");

let files = ['./file1.txt','./file2.txt','./file3.txt','./file4.txt'];

for(let i = 0;i<files.length;i++){


    fs.readFile(files[i],cb);

}

function cb(err,content){
    console.log("content : "+content);

}

// home work  = same above n files to read in serial way