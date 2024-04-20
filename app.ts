#! usr/bin/env node
import inquirer from "inquirer";

let myBalance = 1000000;   
let myPin: number = 195619; 

console.log("THIS IS WRITTEN BY\n.....AB_wahab.....")
 
let pinAnswere = await inquirer.prompt(

    [
        {name: "pin",
         message: "enter your pin",
         type: "numbers",
        }
    ]
);
if (pinAnswere.pin === myPin){
    console.log("correct your pin number!!")

    let operationAns = await inquirer.prompt(
        [
            {
                name:"operation",
                message:"please select your option",
                type:"list",
                choices:["withdraw","fast cash","check balanced"],
                
            }
        ]
    ) 
 if (operationAns.operation === "withdraw") {
    
 let amountAns = await inquirer.prompt(
    
    
        {
           name:"amount",
           message:"enter your amount",
           type: "number",         
        }
    
);
     

   if (amountAns.amount <= myBalance){

    let balance1 = myBalance - amountAns.amount;

    console.log(`Your remaining balance is  ${balance1}`);

}else {console.log("Your balance is unsufficent in your account");
   
}
 //if user fast cash:
 
}else if (operationAns.operation === "fast cash") {
    let FastcashAns = await inquirer.prompt(
        [
            {
                name:"amount",
                type:"list",
                message:"choose your option",
                choices:["2000","5000","10000","20000","50000"],
            }
        ]
);
if (FastcashAns.fastamount <= myBalance){
    let balance2 = myBalance - FastcashAns.fastamount;
    console.log(`the remaining balance is ${balance2}`)
}else{console.log(`This amount is unsufficent`);

}
}
else if(operationAns.operation === "check balanced"){
    console.log("Your balance is" + myBalance);
}
}

else{console.log("Incorrect your pin cord!!");
}
