const arr1 = [1,2,3,4,5,6];
// console.log(arr1);
arr1[0] = 9
// console.log(arr1);
arr1.push(7,"aditya",null);
// console.log(arr1)
// arr1.pop();
// console.log(arr1);
// console.log(arr1.length)
// console.log(typeof arr1);
// // arr1.unshift("hello",23);
// console.log(arr1);

// splice and slice

//slice:
const arr2 = arr1.slice(1,4);
console.log(arr2);
console.log(arr1);
// splice:
// const arr3 = arr1.splice(1,4);
// console.log(arr3);
// console.log(arr1);

const myarr = arr1.join();
console.log(myarr);//9,2,3,4,5,6,7,aditya
const myarr2 = arr1.map(String).join();
console.log(myarr2); // Output: 9,2,3,4,5,6,7,aditya,null
console.log(typeof myarr);
const value = null
const nam = String(value);
console.log(nam);
