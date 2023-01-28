let a = +prompt("a...") //result : 10  -- result2 : 10 -- result3 : 15 -- result4: 10
let b = +prompt("b...") //result : 5  -- result2 : 15 -- result3 : 5 -- result4 : 10
//          true  &&    true   && true -> 1 * 1 * 1 = 1 
let result= a > b &&  a === 10 && b === 5 // true
console.log(result);
//            true  ||   true    || false 
let result2 = a < b || a === 10 || b === 5 // true
console.log(result2);
//              ( false  && true) = false -> !(false)=true
let result3 = !(a === b && b <= 10) // true
console.log(result3);
//                 (true  &&   true) || false -> true || false = true -> !(true)= false
let result4 = !((a === b && b <= 10) || a!==b) // false
console.log(result4);



let x = +prompt("x..."); // for example : 5
let y = +prompt("y..."); // for example : 6

if (x > 10 && y > 10 ){
    console.log("x and y is bigger than 10");
}
else if(x > 10 || y > 10){
 console.log("x or y is bigger than 10");
}
else if(x!=y){
    console.log("x is not equal to y!");
}

