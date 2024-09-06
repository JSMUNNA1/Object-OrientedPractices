// 9. Write a JavaScript program that creates a class called Bank with properties for bank names and branches. Include methods to add a branch, remove a branch, and display all branches. Create an instance of the Bank class and perform operations to add and remove branches.

class Bank{
        brances=[];
         constructor(bankName,branche){
             this.bankName=bankName;
             this.branches=this.brances.push(branche);
         }

         addBranches(brances){
            
              this.brances.push(brances)
         }
         revomeBrances(brances){

          let index=this.brances.indexOf(brances)
          if(index===-1)console.log("This Branche is Not Existing...");
          else  this.brances.splice(index,1);
         }

         displayAllBrances(){
              return `Brances is:${this.brances.join(",")}`
         }
}

const  b1=new Bank("Bank Of India",'gauridad')
b1.addBranches("Surat")
b1.addBranches("ludhiana")
b1.addBranches("vishakhapatam")
console.log(b1.displayAllBrances());

b1.revomeBrances("ludhiana")
console.log(b1.displayAllBrances());
b1.revomeBrances("ludhia")
console.log(b1.displayAllBrances());

