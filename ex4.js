class BankAccount{
           #accNo
        constructor(accNo,bal){
             this.#accNo=accNo;
             this.bal=bal;
        }
        deposite(bal){
            this.#accNo+=bal;   
            this.display() 
        }

        withdraw(bal){
          this.#accNo-=bal
          this.display()
        }

        display(){
          console.log(`your Balance is:${this.#accNo}`)
        }
}

const c1=new BankAccount(21022100,50000)
c1.display()
c1.withdraw(500)