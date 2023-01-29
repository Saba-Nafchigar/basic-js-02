debugger
let age = +prompt("age...")
if(age >=18){
    console.log(`your age is ${age} and you should go to univercity` );
}
else{
    console.log(`your age is ${age} and you must go to school`);
}
console.log("end of if statements!");

// which number is bigger? 
let a = +prompt("enter first number")
let b = +prompt("enter second number")
if(a>b){
    console.log(`${a} , ${b}`);
}else{
    console.log(`${b} , ${a}`);
}