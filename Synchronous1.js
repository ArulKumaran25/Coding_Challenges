//Toll Plaza Example for Synchronous 

function processCar(carNumber) {
    console.log(`Car ${carNumber} is at the toll booth`);
    console.log(`Car ${carNumber} has paid the toll and is leaving`);
}

console.log("Start processing cars at the toll booth");

processCar(1);
processCar(2);
processCar(3);
processCar(4);

console.log("All cars have passed through the toll booth");


// Toll Plaza Example for Synchronous 

function insertCard() {
    console.log("Inserting card and verifying PIN...");
    for (let i = 0; i < 1e8; i++); // Simulating delay
    console.log("PIN verified.");
}

function selectAmount() {
    console.log("Selecting withdrawal amount...");
    for (let i = 0; i < 1e8; i++); // Simulating delay
    console.log("Amount selected.");
}

function dispenseCash() {
    console.log("Dispensing cash...");
    for (let i = 0; i < 1e8; i++); // Simulating delay
    console.log("Cash dispensed.");
}

function endTransaction() {
    console.log("Transaction completed. Please take your card.");
}

// Sequential, synchronous process
function processATMTransaction() {
    insertCard();
    selectAmount();
    dispenseCash();
    endTransaction();
    console.log("Ready for next customer.");
}

// Initiating ATM transaction
processATMTransaction();
