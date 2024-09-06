// 11. Write a JavaScript program that creates a class called BankAccount with properties for account number, account holder name, and balance. Include methods to deposit, withdraw, and transfer money between accounts. Create multiple instances of the BankAccount class and perform operations such as depositing, withdrawing, and transferring money.


class Type{
       static Creadit='creadit'
       static Deposite='deposite'
}
class Statement{
           constructor(money,from,time,type){
            this.money=money;
            this.from=from;
            this.time=time
            this.type=type
            }

}




class BankAccount{
          statemenst=[]
          static instances=[]
          constructor(accNo,accHolderName,balance){
                this.accNo=accNo;
                this.accHolderName=accHolderName;
                this.balance=balance;
                this.statemenst.push(new Statement(balance,'self',new Date().toString(),Type.Deposite))
              BankAccount.instances.push(this)
          }

          deposite(money,from){
               this.balance+=money
            const statement=new Statement(money,from.accHolderName,new Date())  
            this.statemenst.push(statement);
            this.statemenst.push(new Statement(money,from,new Date().toString(),Type.Deposite))
              return `now your balance is:${this.balance}`
          }
          withdrawing(money){
            if(money>=this.balance){
              throw new Error("you money is not Enough for this Transactions...").message;
            }else{
              this.balance-=money;
              this.statemenst.push(new Statement(money,'self',new Date().toString(),Type.Creadit))
            }
               return `now your balance is:${this.balance}`
          }

          transfringMoney(money,to){
            if(money>=this.balance){
              throw new Error("you money is not Enough for this Transactions...").message;
            }else{
                BankAccount.instances.forEach((accounts)=>{
                          if(accounts.accNo===to){
                            accounts.balance+=money;
                            this.balance-=money
                            this.statemenst.push(new Statement(money,to,new Date().toString(),Type.Creadit))
                            return `Successfuly Send money to ${accounts.accNo,accounts.accHolderName}`
                          }

                })
                return `Not found this Acconut Number`;
            }
                
          }
          showTransactions(){
              return this.statemenst;
          }
}

const c1=new BankAccount(123,'druve',500);
const c2=new BankAccount(1234,'druve',500);
     c1.transfringMoney(300,1234)

//console.log(BankAccount.instances);
console.log(c1.showTransactions());



