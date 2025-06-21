const arr1 = [1,2,3,4,5];
const arr2 = ["aditya","ankit","deepanshu"];
const newarr=arr1.concat(arr2);
// console.log(newarr);
const newarr2 = [...arr1,...arr2];
// console.log(newarr2);

// arr1.push(arr2);
// console.log(arr1);
// console.log(arr1[5][1]);

const arr3 = [1,2,3,4,[5,6,7],[7,8,[9,10]]];
// console.log(arr3.flat(Infinity));

console.log(Array.isArray([1,2]));
console.log(Array.of("aditya",1,2,3));
console.log(Array.from("aditya"))
console.log(Array.from({name:"aditya"}))