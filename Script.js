//1.display numbers

// function displayNumbers(num){
//     //document.querySelector("#inpt").value += num
//     inpt.value += num
// }

// in ArrayMethod
let displayNumbers = (num) => inpt.value += num

//2. get the results/answers (=)

// function evaluateExpression(){
//     let result = eval(inpt.value)
//     inpt.value = result
// }

//in ArrayMehtod
let evaluateExpression = () => inpt.value = eval(inpt.value)

// 3. clear text field/ all clear (C)

// function clearBox(){
//     inpt.value = ""
// }

//in ArrayMehtod
let clearBox = () => inpt.value = ""

//4. removing entered number/backspace from text field

// function removeNumbers(){
//     inpt.value = inpt.value.slice(0, -1)
// }

//in ArrayMehtod
let removeNumbers = () => inpt.value = inpt.value.slice(0, -1)

//5. pi value
let piRes = () => inpt.value += "3.14"