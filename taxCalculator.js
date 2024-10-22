"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function taxCalculator(grossSalary, totalSavings) {
    var savingsDeduction = Math.min(totalSavings, 100000);
    var taxableIncome = grossSalary - savingsDeduction;
    var tax = 0;
    if (taxableIncome <= 100000) {
        tax = 0;
    }
    else if (taxableIncome <= 200000) {
        tax = (taxableIncome - 100000) * 0.10;
    }
    else if (taxableIncome <= 500000) {
        tax = (100000 * 0.10) + ((taxableIncome - 200000) * 0.20);
    }
    else {
        tax = (100000 * 0.10) + (300000 * 0.20) + ((taxableIncome - 500000) * 0.30);
    }
    return tax;
}
function main() {
    var grossSalary = 600000;
    var totalSavings = 150000;
    var calculatedTax = taxCalculator(grossSalary, totalSavings);
    console.log("The Calculated tax is: Rs. ".concat(calculatedTax));
}
main();
