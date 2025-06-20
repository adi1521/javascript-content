const date = new Date();
// console.log(date);
console.log(date.toString());

console.log(date.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }));
// console.log(date.getTime());
// console.log(date.getSeconds());


// let myCreatedDate = new Date(2025, 5, 20)
// let myCreatedDate = new Date(2025, 5, 20, 7, 56)
// let myCreatedDate = new Date("2025-05-20")
let myCreatedDate = new Date("05-20-2025 07:56:00")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})