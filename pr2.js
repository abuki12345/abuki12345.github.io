let  shift = false
let resultEl = document.getElementById("result")
let num1=document.getElementById("num1-el")
let num2 = document.getElementById("num2-el")
var number1
let number2
let operator
let result = 0
let more = 0
let sum,difference,product,quotient
let operatorEl = document.getElementById("oprator")
let resultE2 = document.getElementById("result2")
let isMore = true
let initial = 0
let l = 0

function one(){
    if(shift === false){
      if(initial ===0)
     num1.innerText=""
    num1.innerText+=1
    number1 = num1.innerText
}
    else{
        num2.innerText+=1
        number2 = num2.innerText
        sum = Number(number1) + Number(number2)
        resultE2.innerHTML =sum
    }
    initial +=1
}
function two(){
    if(shift === false){
      if(initial ===0)
     num1.innerText=""
    num1.innerText+=2
    number1 = num1.innerText
}
    else{
        num2.innerText+=2
        number2 = num2.innerText
    }
    initial +=1
}
function three(){
    if(shift === false){
      if(initial ===0)
     num1.innerText=""
    num1.innerText+=3
    number1 = num1.innerText
}
    else{
        num2.innerText+=3
        number2 = num2.innerText
    }
    initial +=1
}
function four(){
    if(shift === false){
      if(initial ===0)
     num1.innerText=""
    num1.innerText+=4
    number1 = num1.innerText
}
    else{
        num2.innerText+=4
        number2 = num2.innerText
    }
    initial +=1
}

function five(){
    if(shift === false){
      if(initial ===0)
     num1.innerText=""
    num1.innerText+=5
    number1 = num1.innerText
}
    else{
        num2.innerText+=5
        number2 = num2.innerText
    }
    initial +=1
}

function six(){
    if(shift === false){
      if(initial ===0)
     num1.innerText=""
    num1.innerText+=6
    number1 = num1.innerText
}
    else{
        num2.innerText+=6
        number2 = num2.innerText
    }
    initial +=1
}

function seven(){
    if(shift === false){
     if(initial ===0)
      num1.innerText=""
    num1.innerText+=7
    number1 = num1.innerText
}
    else{
        num2.innerText+=7
        number2 = num2.innerText
    }
    initial +=1
}

function eight(){
    if(shift === false){
     if(initial ===0)
      num1.innerText=""
    num1.innerText+=8
    number1 = num1.innerText
}
    else{
        num2.innerText+=8
        number2 = num2.innerText
    }
    initial +=1
}

function nine(){
    if(shift === false){
        if(initial === 0)
    num1.innerText=""
    num1.innerText+=9
    number1 = num1.innerText
}
    else{
        num2.innerText+=9
        number2 = num2.innerText
    }
    initial +=1
}

function zero(){
    if(shift === false){
     if(initial === 0)
      num1.innerText=""
     num1.innerText+=0
     number1 = num1.innerText
}
    else{
        num2.innerText+=0
        number2 = num2.innerText
    }
    initial +=1
}
result = number1 + number2

function point() {
    if(shift === false){
        num1.innerText+="."
        number1 = num1.innerText
    }
        else{
            num2.innerText+="."
            number2 = num2.innerText
        }
}

function power( number1 ,number2 ){
    
    shift = true
    operator = 'p'
    operatorEl.innerText = 'P'
    return Math.pow(Number(number1),Number(number2))
}
function sqrt(number1){
    operator = 'r'
    num1.innerText = "sqrt(" +num1.innerText + ")"
    return Math.sqrt(Number(number1))
}
function log(number1){
    operator = 'l'
    num1.innerText = "log(" +num1.innerText+ ")"
    return Math.log10(Number(number1))
}
function lan(number1){
    operator = 'ln'
    num1.innerText = "ln(" + num1.innerText+ ")"
    return Math.l(Number(number1))
}
function cos(number1){
    operator = 'cos'
    num1.innerText = "cos" + num1.innerText 
    return Math.cos((Number(number1)*Math.PI)/180)
}
function sin(number1){
    operator = 'sin'
    num1.innerText = "sin(" + num1.innerText+ ")"
    return Math.sin((Number(number1)*Math.PI)/180)
}
function tan(number1){
    operator = 'tan'
    num1.innerText = "tan(" + num1.innerText + ")"
    return Math.tan((Number(number1)*Math.PI)/180)
}
function pi()
{
    operator = 'pi'
    num1.innerText = 'pi '
    return Math.PI
}

function add(){
   
   shift = true
   operator = '+'
   operatorEl.innerText = '+'
   if(more > 0 && l>0){
    number1 = result
    number2 = 0 
    num1.innerText=result
    num2.innerText=""
   }
   result = result + number2
   more = more + 1
}
function subtract(){
    shift = true
    operator = '-'
    operatorEl.innerText = '-'
    
   if(more > 0){
    number1 = result
    number2 = 0 
    num1.innerText=result
    num2.innerText = ""
   }   
    more = more + 1
}
function multiply(){ 
   
   shift = true
   operator = 'x'
   operatorEl.innerText = 'x'
   
   if(more > 0){
    number1 = result
    number2 = 0 
    num1.innerText=result
    num2.innerText=""
   }
   more = more + 1
}
function devide(){
    
    shift = true
    operator = '/'
    operatorEl.innerText = '/'
    
   if(more > 0){
    number1 = result
    number2 = 0 
    num1.innerText=result
    num2.innerText=""
   }
   more = more + 1
}


function Result () {
    document.getElementById("equal").innerHTML = "="
    sum = Number(number1) + Number(number2)
    difference = Number(number1) - Number(number2)
    product = Number(number1) * Number(number2)
    quotient = Number(number1) / Number(number2)

    if(operator === '+'){
    resultE2.innerHTML =sum
    resultEl.innerHTML = sum
    result = sum
    }
    else if(operator === '-'){
    resultEl.innerHTML =difference
    resultE2.innerHTML =difference
    result = difference
    }
    else if(operator === 'x'){
    resultEl.innerHTML = product
    resultE2.innerHTML =product
    result = product
    }
    else if(operator === '/'){
    resultEl.innerHTML = quotient
    resultE2.innerHTML =quotient
    result = quotient
    }
    else if(operator === 'p'){
    resultEl.innerHTML = power(number1,number2)
    resultE2.innerHTML =power(number1,number2)
    result = power(number1,number2)
    }
    else if(operator === 'r'){
    resultEl.innerHTML = sqrt(number1)
    resultE2.innerHTML = sqrt(number1)
    num1.innerText = `${number1}`
    result = sqrt(number1)
    }
    else if(operator === 'l'){
    resultEl.innerHTML = log(number1)
    resultE2.innerHTML = log(number1)
    num1.innerText = `${number1}`
    result = log(number1)
    }
    else if(operator === 'ln'){
    resultEl.innerHTML = lan(number1)
    resultE2.innerHTML = lan(number1)
    num1.innerText = `${number1}`
    result = lan(number1)
    }
    else if(operator === 'cos'){
    resultEl.innerHTML = cos(number1)
    resultE2.innerHTML = cos(number1)
    num1.innerText = `${number1}`
    result = cos(number1)
    }
    else if(operator === 'sin'){
    resultEl.innerHTML = sin(number1)
    resultE2.innerHTML = sin(number1)
    num1.innerText = `${number1}`
    result = sin(number1)
    }
    else if(operator === 'tan'){
    resultEl.innerHTML = tan(number1)
    resultE2.innerHTML = tan(number1)
    num1.innerText = `${number1}`
    result = tan(number1)
    }
    else if(operator === 'pi'){
        resultEl.innerHTML = pi()
        resultE2.innerHTML = pi()
        result = pi()
        }
}

function agregate(){

}

function cut(){
    document.getElementById("oprator").innerHTML = ""
    document.getElementById("result").innerHTML = ""
    document.getElementById("result2").innerHTML = ""
    document.getElementById("num1-el").innerHTML = "0"
    document.getElementById("num2-el").innerHTML = ""
    document.getElementById("equal").innerHTML = ""
    shift = false
    more = 0
    initial = 0
    y = number2.length
    x = 0
}
var x = 0
let y = number2.length
function delet() {
    if(shift === false){
        number1 = number1.replace(number1[number1.length-1],"")
        num1.innerHTML = number1
    }
    else
    {
        number2 = number2.replace(number2[number2.length-1],"")
        num2.innerHTML = number2
        y = 0
    }
    if(number2 === "" && x!=0 ){
    operator = ''
    y=1
    operatorEl.innerHTML = ""
    }

    if(number2 === "" ){
        x =x+1
        if(operator ==='' && x>(y+1)){
        number1 = number1.replace(number1[number1.length-1],"")
        num1.innerHTML = number1
        shift = false
        }
    }
}