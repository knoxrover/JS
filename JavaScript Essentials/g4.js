// json objects



let emp = {
    empno:111,
    empname: "ABC",
    age:33,
    salary:21134.12,
    hobbies:["singing","Swimming"],
    reportees:{empno:2233,empname:"Banglore",age:22,salary:68000,hobbies:["coding","Testing","Reading"]}
};

console.log(emp);

console.log("Employee No = ",emp.empno);
console.log("Employee Name = ",emp.empname);
console.log("Employee Age = ",emp.age);
console.log("Employee Salary = ",emp.salary);


console.log("Employee Hobbies:");
for (let i=0;i<emp.hobbies.length;i++)
{
    console.log(emp.hobbies[i]);
}


console.log("==========Reportee Details===============");
console.log("Reportee No = ", emp.reportees.empno);
console.log("Reportee Name = ", emp.reportees.empname);
console.log("Reportee age = ", emp.reportees.age);
console.log("Reportee Salary = ", emp.reportees.salary);

console.log("Reportee Hobbies:");
for (let i=0;i<emp.hobbies.length;i++)
{
    console.log(emp.reportees.hobbies[i]);
}
