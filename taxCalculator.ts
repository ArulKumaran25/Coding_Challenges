import { log } from "console";

function taxCalculator(grossSalary:number,totalSavings:number):number{
    const savingsDeduction=Math.min(totalSavings,100000);
    const taxableIncome=grossSalary-savingsDeduction;
    let tax=0;
    if(taxableIncome<=100000){
        tax=0;
    }
    else if(taxableIncome<=200000){
        tax=(taxableIncome-100000)*0.10;
    }
    else if(taxableIncome<=500000){
        tax=(100000*0.10)+((taxableIncome-200000)*0.20);
    }
    else{
        tax=(100000*0.10)+(300000*0.20)+((taxableIncome-500000)*0.30);
    }
    return tax;
}

function main(){
    const grossSalary=600000;
    const totalSavings=150000;

    const calculatedTax=taxCalculator(grossSalary,totalSavings);
    console.log(`The Calculated tax is: Rs. ${calculatedTax}`);
    
}
main();