// . Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.


class Employee{
            constructor(name,salary){
                 this.name=name;
                 this.salary=salary;
            }

            calculateAannualSalary(){
                  return this.salary*12;
            }
}
const e1=new Employee("Munna",27000)
console.log(e1.calculateAannualSalary());

class manager extends Employee{
         constructor(name,salary,bonuses){
              super(name,salary)
              this.bonuses=bonuses
         }
         calculateAannualSalary(){
          return (this.salary*12)+(this.bonuses);
    }
}

const m1=new manager("munnaThakur",27000,50000)
console.log(m1.calculateAannualSalary());
