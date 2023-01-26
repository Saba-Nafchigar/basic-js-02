let num1=document.querySelector("input#num1")
let num2=document.querySelector("input#num2")
let plus=document.querySelector("button#plus")
let minus=document.querySelector("button#minus")
let mul=document.querySelector("button#mul")
let div=document.querySelector("button#div")
plus.addEventListener("click",function(){
    document.querySelector("div#display").innerHTML=Number(num1.value)+Number(num2.value)
})
minus.addEventListener("click",function(){
    document.querySelector("div#display").innerHTML=Number(num1.value)-Number(num2.value)
})
mul.addEventListener("click",function(){
    document.querySelector("div#display").innerHTML=Number(num1.value)*Number(num2.value)
})
div.addEventListener("click",function(){
    document.querySelector("div#display").innerHTML=Number(num1.value)/Number(num2.value)
})