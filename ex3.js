class Vehical{
      constructor(model,year){
            this.model=model;
            this.year=year;

      }

    display(){
      console.log(`Model:${this.model},Year:${this.year}`);
      
    }
}

class Car extends Vehical{
       constructor(model,year,doors){
            super(model,year)
            this.doors=doors;
       }
       display(){
        console.log(`Model:${this.model},Year:${this.year},Numbers Of Doors:${this.doors}`)
       }

}

const c1=new Car(1223,2024,4)
c1.display()