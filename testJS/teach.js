//task1
for (let i = 0; i < 11; i++) {
   if(i === 0) console.log(`${i} - это ноль`);
   else if(i % 2 !== 0) console.log(`${i} - нечетное число`);
   else if(i % 2 === 0) console.log(`${i} - четное ноль`);
}

//task2
let arr = [1, 2, 3, 4, 5, 6, 7];
arr.filter(a => a < 4 || a > 5).forEach(a => console.log(a));


// //task3
let filledArray = Array(10).fill(0);
filledArray = filledArray.map(f => Math.round(Math.random()*9));
let sum = filledArray.reduce((x, y) => x + y);
let min = filledArray.reduce((x, y) => Math.min(x, y));
let incl = filledArray.includes(3);

//task4
let k = "x";
for (let i = 1; i < 21; i++) {
    console.log(k);
    k+="X";
}