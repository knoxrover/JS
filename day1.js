console.log('Test intro');

let a;

a="vinayraj";

for(let i=0;i<=10;i++){
    console.log(i);
}

const arr = [ //arr is array of objext literals
    {
        id : 1,
        name : 'Vinayraj',
        roll_number : '17J41A1210'
    },
    {
        id : 2,
        name : 'shivam',
        roll_number : '17J41A1269'

    },
    {
        id : 3,
        name : 'rehan',
        roll_number : '17J41A1231'
    }
];

const arr1 = {  //arr1 is an object literal
    id:1,
    name : 'vinayraj',
    roll_number: '17J41A1210'
}

for(let key in arr1){
    console.log(arr1[key]);
}

// console.log(arr[0].name); // vinayraj
console.log("before");
console.log(arr); 

/*  (3) [{…}, {…}, {…}]
0: {id: 1, name: "Vinayraj", roll_number: "17J41A1210"}
1: {id: 2, name: "shivam", roll_number: "17J41A1269"}
2: {id: 3, name: "rehan", roll_number: "17J41A1231"}
length: 3
__proto__: Array(0)

*/

const jsf = JSON.stringify(arr);  // double quotes around keys and values

// JSON to string/array == JSON.parse()
console.log("sdd");
console.log(jsf);


// loops

let i=10;

// while(i>0){
//     console.log(i);
//     i--;
// }

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i].name);
// }

// for( let a of arr){
//     console.log(a.name);
// }


arr.forEach((x)=>{
    // console.log(arr);
});
// console.log(arr);

const a1 = arr.filter((x)=>{    //filter will return all objects with filtered condition 
    return x.name=="Vinayraj";
}).map((x)=>{
return x.roll_number;               // map will take output of filter and will map out(return) roll number only
});

console.log(a1);


for(let i=0;i<arr.length;i++){
    console.log(`${arr[i].name} ok `);
}


// let k=0;
// while(k<10){
//     console.log(`bokka ra babu : ${k}`);
//     k++;
// }



const arr11 = ["Banana", "Orange", "Apple", "Mango"];
let ans=arr11.join(" ");
console.log(ans);




// const todos=[{       print all objects titles whose isDone is false 
// 	title:'wake up',
// 	isDone:true,
// },{
// 	title:'c++',
// 	isDone:true,
// },{
// 	title:'Jave_SCript',
// 	isDone: false
// }];


// const thingsNotDone=todos.filter((any) =>any.isDone==false)
// for(let i=0;i<thingsNotDone.length;i++){
// console.log(thingsNotDone[i].title);
// }

