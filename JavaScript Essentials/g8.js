//Inheritance


var Employee = function (empno , empname)
{
  this.empno=empno;
  this.empname=empname;
  this.DisplayEmployeeDetails =  function ()
  {
   //==================
  };
};

var ASE = function (designation , relocationAllowance)
{
  this.designation=designation;
  this.relocationAllowance=relocationAllowance;
  this.DisplayASEDetails =  function ()
  {
   console.log("********** Employee Details **********************");
  //======================
  };
}; 
var emp = new Employee(1231,"Accenture");            // Parent Object Created
ASE.prototype = emp;                                 // Parent-Child Relationship Created between Employee-ASE
var ase = new ASE("ASE",2500);                       // Child Class Object Created

