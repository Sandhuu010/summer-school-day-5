let name = "Sandhya";
var isCoding = true;
const marks_12th = 97;
let x;
let y = null;

console.log(typeof name);
console.log(typeof isCoding);
console.log(typeof marks_12th);
console.log(typeof x);
console.log(typeof y);

console.log(a);
var a = 4;//undefined (not assigned yet) it is not an error.
// reason: Variables declared with var are hoisted (means moved to top of scope) and initialized with undefined.

//console.log(b);
let b = 5;//reference error : can't access b before initialisation.
//it is also hoisted but not initialized.

let userName = prompt("Enter your Name:");
let age = parseInt(prompt("Enter your Age:"));

if (age < 18){
    alert(`hey ${userName}, you're a teen!`);
}else if (age >=18 && age <=60){
    alert(`Welcome ${userName}, you're an adult!`);
}else{
    alert(`Hello ${userName}, you're a senior citizen`);
}

for(i=0;i<=10;i++){
    console.log(`I am ${i}`);
}

let even= 2;
while (even <=20){
    console.log(even);
    even +=2;
}

let countdown = 10;
do{
    console.log(` Launching in .... ${countdown}`);
    countdown --;
} while(countdown >=1);


function add(c,d) {
    return c+d;
};
console.log("After adding c & d , Sum is :",add(10,20));

const square= function(n) {
    return n*n;
};
console.log("square is:",square(25));

const greet=(username) => {
    return `Hello ${username}!`;
};
console.log(greet("Sandhya"));

function processNumber(num, callback) {
    console.log(`Processing number: ${num}`);
    callback(num);
}
function arith(n) {
    console.log("square is:", n*n);
}
processNumber(9 , arith);

//bonus task
let num1 = parseFloat(prompt("Enter First Number:"));
let operator = prompt("Enter symbol of operation that you want to perform:");
let num2 = parseFloat(prompt("Enter 2nd number:"));
let result;

switch(operator) {
    case "+":
        result= num1 + num2;
        break;
    case "-": result = num1 - num2;
    break;
    case "*":
        result = num1*num2;
        break;
        case "/":
             if (num2 !== 0){
               result= num1/num2;
            }else{
                result = "Cannot divide by Zero";
            }    
            break;
            default:
                result ="Invalid Operator";
}
alert(`Result : ${result}`);