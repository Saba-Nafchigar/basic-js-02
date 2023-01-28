let x = Number(prompt("x...")); //for example : 12
console.log(x); //12
console.log(typeof x); //number

console.log(typeof x.toString()); //string

console.log(typeof x); //number

console.log(String(x)); //12

console.log(Boolean(x)); //true

let data = []
console.log(Boolean(data)); //true ... empty array and empty object in js is true but in php is false!!
console.log(typeof data); //object

let u = Boolean(prompt("u..."));
console.log(u); //if empty or 0 : false , if not empty : true
console.log(typeof u); //boolean

let data2=null
console.log(Boolean(data2)); //false
console.log(typeof (data2)); //object

let dataUndifined
console.log(Boolean(dataUndifined)); //false
console.log(typeof (dataUndifined)); //undifined

let z =2
if (z){
    console.log(":D");
}
else{
    console.log("ignore!");
}
// z= 10 , 2 , ... -> :D
// z= 0 -> ignore
// z undifined -> ignore
// z= " " -> ignore
// z= null -> ignore