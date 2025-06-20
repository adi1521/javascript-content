const str = "The quick brown fox jumps over the lazy dog.";

console.log(str.slice(31));
// Expected output: "the lazy dog."

let strlen = str.slice(4,19);
// Expected output: "quick brown fox"

console.log(str.slice(-4));
// Expected output: "dog."

console.log(str.slice(-9, 5));
console.log(str.substring(5,0));

// Expected output: "lazy"

console.log(str.length)
console.log(str.charAt(35))

console.log(strlen.length)

let Name = new String('aditya pandey');
console.log(Name);
console.log(Name.length)
console.log(Name.toUpperCase());
console.log(Name.toLowerCase())
console.log(Name.toLocaleUpperCase());


console.log(`hello my name is aditya pandey\ni am a software developer`)

// console.log("hello i am aditya\ni am 20 yrs old")

const newWay1 = `Line 1
 Line 2
Line 3`;
const newWay2 = `first line
line 2
line 3`

console.log(newWay1.replace("Line 1","first line"))
console.log(newWay2.includes("first line"))

console.log(newWay1.charAt(3))
console.log(newWay1.length)

// console.log(newWay.charAt(6));

// // loop

for(let i = 0; i<newWay1.length; i++){
    console.log(i,newWay1.charAt(i));

}
console.log(newWay1)
console.log(newWay1.trim());

let surname = ` pa n dey `
// console.log(surname.length);
console.log(surname.trim());

let trimmedsurname = surname.trim();
console.log(trimmedsurname);
console.log(trimmedsurname.length);

console.log(surname.trimEnd());

// // let anothername = surname.trimEnd();

// // console.log(anothername.length);
// // console.log(anothername.indexOf('n'))

console.log(surname.split("a"));
console.log(surname.substring(-4,7));


