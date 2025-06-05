// Primitive datatypes(7 types)
// number,string,boolean,null,undefined,symbol,bigInt


// reference datatype(non-primitive)
// array,objects,functions
//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//***** 
//stack(primitive),heap(non-primitive)
let num1=12 // stored in stack
let num2=num1 // basically num2 variable is actually storing copy of the value of num1 but if we change the value in num2 then it will not change anything in num1
console.log(num2)
console.log(num1)
num2=67
console.table([num1 ,num2])

// heap(reference datatype)
  let mydetail= {
     name: "aditya",
     email:"a@google.com"

     }
     console.log(mydetail)
     console.log(mydetail.name)
     console.log(mydetail.email)
     mydetail.email="hello@google.com"
     console.log(mydetail)
    

// here object is stored in heap memory basically mydetail is the reference to the value which is stored in the heap memory. when you change it that basically means you are actually changing the value at that address.
