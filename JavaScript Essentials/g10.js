class Employee
{
        constructor(empno,empname,age,salary)
        {
            this.empno=empno;
            this.empname=empname;
            this.age=age;
            this.salary=salary;
        }
        DisplayEmployee()
        {
            console.log("Employee No = ",this.empno);
            console.log("Employee Name = ",this.empname);
            console.log("Employee Age = ",this.age);
            console.log("Employee Salary = ",this.salary);
        }
}

let emp1 = new Employee(2222,"Bangalore",66,45678.88);
emp1.DisplayEmployee();

