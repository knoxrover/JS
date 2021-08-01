let fs = require("fs");
let path = require("path");


let inputArr = process.argv.slice(2);
let filesArr=[];
let optionArr =[];


// *****files path , options diffrentiate *******************

for(let i=0;i<inputArr.length;i++){
    let firstChar = inputArr[i].charAt(0);
    if(firstChar=="-"){
        optionArr.push(inputArr[i]);
    }
    else{
        filesArr.push(inputArr[i]);
    }
}

// ********check if all     files are present*********

for(let i=0;i<filesArr.length;i++){
    let ans = fs.existsSync(filesArr[i])
    if(ans==false){
        console.log("File doesn't exist");
        return;
    }
}

// `````````content append```````````

let content="";
for(let i=0;i<filesArr.length;i++){
    let cFileContent = fs.readFileSync(filesArr[i])
    content = content + cFileContent+"\r\n";
}
// console.log(content);

let contentArr = content.split("\r");


console.log(contentArr);
//console.log(optionArr);

// -s check

let isSPresent = optionArr.includes("-s");
if(isSPresent){
    for(let i =1 ;i<contentArr.length;i++){
        if(contentArr[i]=="" && contentArr[i-1]==""){
        contentArr[i]=null
    }
    else if(contentArr[i]== "" && contentArr[i-1]==null){
        contentArr[i]=null;
    }
}

let tempArr = [];
for(let i=0;i<contentArr.length;i++){
    if(contentArr[i]!==null){
        tempArr.push(contentArr[i]);
    }
}
contentArr=tempArr;

}

//-n -b


let indexofN = optionArr.indexOf("-n");
let indexofB = optionArr.indexOf("-b");
let finalOpt = "";

//decide a final option and call modification based on option
if(indexofN > -1 &&indexofB > -1 ){ // both are present
    if(indexofN<indexofB){
        finalOpt = "-n";
    }
    else {
        finalOpt="-b";
    }
    
    }
    else{
        //if there is any one option -> -n,-b

        if(indexofN > -1){
            finalOpt="-n";
        }
        else if(indexofB>-1){
            finalOpt="-b";
        }
    }

    if(finalOpt!=""){
        if(finalOpt=="-n"){
            modifyContentbyN(contentArr);
        }
        else if(finalOpt=="-b"){
            modifyContentbyB(contentArr);
        }
    }

    function modifyContentbyN(contentArr){
        for(let i=1;i<=contentArr.length;i++){
            contentArr[i]= i +". "+contentArr[i];
        }
    }

    function modifyContentbyB(contentArr){
        let count=1;
        for(let i=0;i<=contentArr.length;i++){
            if(contentArr[i]!==""){
                contentArr[i] = count +". " + contentArr[i];
                count++;
            }

        }
    }


// console.log(contentArr);
//console.log("final option is",   finalOpt);
console.log(contentArr.join("\r\n"));