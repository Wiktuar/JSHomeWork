//task1
let func = x => Math.pow(x, 3);
console.log(func(3));
console.log(func(2));

//task2
let number = prompt("Введите число");

(isNaN(number))?console.log("введено не число"):
    console.log(sizeOfTax(1000));

function sizeOfTax(number){
    return Math.round(number - number*0.13);
}

//task3
let userString = prompt("Введите число");
let array = userString.split(" ");

let minimum = array.map(x => +x).reduce((x, y) => Math.max(x, y));
console.log(minimum);

//task4
let a = 15;
let b = 25;

let sum =  (a, b) => a+b;
let diff =  (a, b) => (a > b)? a - b : b - a;
let pow =  (a, b) => a * b;
let div =  (a, b) => (b !== 0)? a / b: "На ноль делить нельзя" ;

console.log(div(a, b));