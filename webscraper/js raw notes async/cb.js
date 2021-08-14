function smaller(x){
    return x*x;
}

function cuber(x){
    return x*x*x;
}

//functions can be passed as arguments

// implementation map js -> prexist


//calling function as argument and applying to each element of array ... just defined... wont be invoked until called
// by storing creating memory as new variable
function bigger(arr,cb){
    let newArr = [];
    for(let i=0;i<arr.length;i++){
        let newVal = cb(arr[i]);
        newArr.push(newVal);
    }
    return newArr;
}

let sqArr = bigger(arr,smaller); 

// ^^^^ invoking bigger function to create new array of new values with cb func 
// as square  function

console.log("arr", sqArr);


let qArr = bigger(arr,cuber);

// ^^^^ invoking bigger function to create new array of new values with cb func 
// as cube function


console.log("Cubed Array",qArr);


