function arrayIntersection(arr1:number[],arr2:number[]){
    return arr1.filter(num=> arr2.includes(num));
}
const array1=[1,2,3,4];
const arrar2=[2,3,4,5];
console.log(arrayIntersection(array1,arrar2));
