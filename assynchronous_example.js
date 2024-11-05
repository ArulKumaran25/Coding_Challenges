function task1() {
    setTimeout(() => {  //js Built-in function
        console.log("Task 1 done.");
    }, 5000); // Executes after 1 second
}

function task2() {
    console.log("Task 2 done.");
}

task1();
task2();  // Does not wait; executes immediately
