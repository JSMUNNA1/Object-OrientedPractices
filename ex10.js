// 10. Write a JavaScript program that creates a class called Product with properties for product ID, name, and price. Include a method to calculate the total price by multiplying the price by the quantity. Create a subclass called PersonalCareProduct that inherits from the Product class and adds an additional property for the warranty period. Override the total price calculation method to include the warranty period. Create an instance of the PersonalCareProduct class and calculate its total price.

class Product{
        
       constructor(productId,name,price){
         this.productId=productId;
         this.name=name;
         this.price=price  
         }
         calculatePrize(quantity){
          return this.price*quantity;
        }
}
class PersonalCareProduct extends Product{
         constructor(productId,name,price,warrantyperiod){
                   super(productId,name,price)
                 this.warrantyperiod=warrantyperiod;
         }
         
        calculatePrize(quantity){
          let totalPrize= super.calculatePrize(quantity);
           return totalPrize+this.warrantyperiod;
        }
}
const p1=new PersonalCareProduct('3011','iPhone',3200,3);
console.log(p1.calculatePrize(10));
  