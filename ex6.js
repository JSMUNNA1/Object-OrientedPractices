class Book{
       constructor(title,author,publicYear){
        this.title=title;
        this.author=author;
        this.publicYear=publicYear;
           
       }

       display(){
          console.log(`Book Details=title:${this.title}author:${this.author}publicYear:${this.publicYear}`);
          
       }
}

class EBook extends Book{
  constructor(title,author,publicYear,bookprice){
                super(title,author,publicYear)
            this.bookprice=bookprice
  }

  display(){
    console.log(`Book Details--\nTitle:${this.title}\nAuthor:${this.author}\npublicYear:${this.publicYear}\nBookPrice:${this.bookprice}`);
    
 }
}

const b=new EBook("java","Munna","2022",2345)
b.display()

