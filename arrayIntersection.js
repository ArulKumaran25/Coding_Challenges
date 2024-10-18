function arrayIntersection(arr1, arr2) {
    return arr1.filter(function (num) { return arr2.includes(num); });
}
var array1 = [1, 2, 3, 4];
var arrar2 = [2, 3, 4, 5];
console.log(arrayIntersection(array1, arrar2));
