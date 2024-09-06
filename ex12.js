// 12. Write a JavaScript program that creates a class called University with properties for university name and departments. Include methods to add a department, remove a department, and display all departments. Create an instance of the University class and add and remove departments.
class University{
         constructor(name){
             this.name=name;
             this.deparments=[];
         }
         addDepartment(department){
              this.deparments.push(department);
              console.log(`Department "${department}" added to ${this.name}.`);
         }
         removeDepartment(department){
                    let index=this.deparments.indexOf(department);
                    this.deparments.splice(index,1);
                   // this.deparments.push(department);
                    console.log(`Department "${department}" remove to ${this.name}.`);
         }
}

const c1=new University('marwadi University')
c1.addDepartment('Computer')
c1.addDepartment('Electrict')
c1.addDepartment('Mechanical')
console.log(c1);
c1.removeDepartment('Computer')
console.log(c1);

