class Employee
{
        constructor()
        {
            this.empno;
            this.empname;
            this.age;
            this.salary;
        }
        DisplayEmployee()
        {
            console.log("Employee No = ",this.empno);
            console.log("Employee Name = ",this.empname);
            console.log("Employee Age = ",this.age);
            console.log("Employee Salary = ",this.salary);
        }
}

let emp1 = new Employee();
emp1.empno = 2222;
emp1.empname = "Bangalore";
emp1.age = 66;
emp1.salary = 45678.88;
emp1.DisplayEmployee();