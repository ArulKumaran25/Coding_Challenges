function secondLargest(arr) {
    var firstNum = 0;
    var secondNum = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > firstNum) {
            secondNum = firstNum;
            firstNum = arr[i];
        }
        else if (arr[i] > secondNum && arr[i] != firstNum) {
            secondNum = arr[i];
        }
    }
    console.log(firstNum, secondNum);
}
secondLargest([2, 3, 5, 7, 8, 8]);
