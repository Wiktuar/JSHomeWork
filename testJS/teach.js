//task1
let number1 = prompt("Введите первое число");
if(number1 <= 1)alert("Верное число!")

let number2 = prompt("Введите второе число");
if(number2 >= 1) alert("Верное число");

//task2

let test = true;
(test)?console.log("+++"):console.log("----");

//task3
let day = 5;

if (day >= 1 & day <= 10)alert("Первая декада");
else if (day >= 11 & day <= 20)alert("Вторая декада");
else alert("Третья декада");


//task4
let num = 71;
let data = num;
let array = [];
while(num>0){
    array.unshift(num%10);
    if(array.length === 3) break;
    num=num/10|0;
}

if(array.length === 2)array.unshift(0);

console.log(`В числе ${data} количество сотен: ${array[0]}, десятков: ${array[1]}, единиц: ${array[2]}`);



