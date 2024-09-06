class Person{
       constructor(name,age,country){
           this.name=name;
           this.age=age;
           this.country=country;
       }

       display(){
        console.log(`Persone Name is:${this.name}
Person Age is:${this.age}
Person country is:${this.country}`);
        
       }
}


const p1=new Person('Munna',22,+916239402958)
const p2=new Person('Subham',21,+9162394029)
p1.display()
p2.display()
