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



//else if :
let x = +prompt("x...")
if (x===1){
    console.log("shanbe");
}
else if(x===2){
    console.log("1shanbe");
}
else if (x===3){
    console.log("2shanbe");
}
else if(x===4){
    console.log("3shanbe");
}
else if(x===5){
    console.log("4shanbe");
}
else if (x===6){
    console.log("5shanbe");
}
else if(x===7){
    console.log("jome");
}
else{
    console.log("you should select between 1 - 7");
}
