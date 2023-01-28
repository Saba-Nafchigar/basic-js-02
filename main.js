let x1 = +prompt("x1...") // for example : 3
let y1 = +prompt("y1...") // for example : 2
let sum = x1 + y1 
console.log(sum); // 5

let minus = x1 - y1
console.log(minus); // 1

let mul = x1 * y1 
console.log(mul); // 6

let division = x1 / y1
console.log(division); // 1.5

let rest = x1 % y1
console.log(rest); // 1

let power = x1 ** y1
console.log(power); // 9

// ++ and --
let z = +prompt("z....") // for example : 10
console.log(z); // 10
let w = z++ 
console.log(w); // 10 
console.log(z); // 11

let a = +prompt("a...") // for example : 10
console.log(a); // 10
let b = ++a
console.log(b); // 11
console.log(a); // 11
 
let c = +prompt("c...") // for example : 10
console.log(c); // 10
let d = c--
console.log(d); // 10
console.log(c); // 9

let e = +prompt("e...") // for example : 10
console.log(e); // 10
let f = --e
console.log(f); // 9
console.log(e); // 9

// olaviat -> () ++ -- / * + -


let xx =5
let yy = 10
let result2 = (x+y/2*5)*2/(x-y*2+5) 
console.log(result2); // -6

let x= +prompt("x...") // for example : 2
let y= +prompt("y...") // for example : 4
let result = (x/y*2+y/x)*2/((x+y)*2/5)
console.log(result); //2.5