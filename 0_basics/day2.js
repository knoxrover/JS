console.log("Test Console Log"); 

// function add(num1 =5, num2 =4){  //default values initialised 
//     return num1+num2;
// }

// console.log(add(5,99)); //104



const addn = (num1=1, num2=55)=>num1+num2; 


/* dont need () when only one parameter .... const addn = (num1=55) or num1 => num1+1111; output will be console.log(addn() or addn(55)) /// 1166 


/* no need of {} and return for single line functions with fat arrow '=>' because
 already assigning to addn as variable value*/

function addd(num9=111, num10 = 555){ return num9+num10} // need return and {} for normal function declaration 


console.log(addn());
console.log(addd());

function fn(){
    // console.log("output");
    return console.log(10);
}

// console.log("fcuntion",fn());




let arr = [1,2,3,4,fn];
// console.log(arr[arr.length-1]());

// console.log(fn());

// fn();

// console.log(typeof val);

function Person(firstName, lastName, dob,cb){

    this.firstName = firstName;
    this.lastName = `${lastName}`;

    this.dob=new Date(dob);

    this.cb = function(cb){ //callback function to set date 
        this.dob = new Date(cb);
        console.log("Date set successfully.")
        return this.dob;
    }

    this.getFullName= `${firstName} ${lastName}`

}




const Per1 = new Person('rajender','cheekoti','1995-12-16'); 
///Per1 is an object literal of type Person with values passed as parameters
console.log(Per1.lastName); 
console.log(Per1.dob.getMonth());
console.log(Per1.cb('1999-03-19'));
console.log(Per1.dob.getMonth()); //2 = index based months

/* Date accepts arugments in format of MMDDYY GMT  new Date(MM-DD-YY) .... UTC format
 without new Date() , it must be passed as string or else minus krdega*/ 



//  console.log(Per1.getBirthYear());
