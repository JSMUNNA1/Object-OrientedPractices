class Rectangle{
       constructor(width,hight){
          this.width=width;
          this.hight=hight
       }
       calculateArea() {
        return this.width * this.height;
      }
    
      calculatePerimeter() {
        return 2 * (this.width + this.height);
      }
}

const c1=new Rectangle(22,11)
c1.calculateArea()
c1.calculatePerimeter()


