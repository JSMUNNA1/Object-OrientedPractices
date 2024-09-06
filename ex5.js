class Shape{
       
      calculateArea(){
       throw new Error("It is use Only for Overrited")
      }
}

class Circle extends Shape{
      constructor(r){
        super();
        this.r=r
      }
       calculateArea(){
         console.log(`Area of Circle is:${(Math.PI*this.r*this.r).toFixed(4)}`);
         
       }
      
}

class Rectangler extends Shape{
               constructor(width,hight){
                   super()
                  this.width=width;
                  this.hight=hight;
               }
               calculateArea(){
                console.log(`Area of Rectangler is:${(this.width*this.hight).toFixed(4)}`);
               }
}

const c1=new Circle(33)
c1.calculateArea()