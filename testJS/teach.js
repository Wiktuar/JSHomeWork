//task1
const arr = [1, 5, 7, 9];

console.log(Math.min(...arr));

// task2
function createCounter(){
    let count = 0;

    return {
        increment(){
            count++;
            return count;
        },

        decrement(){
            if(count === 0) return 0;
            else return --count;
        }
    }
}

const counter = createCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());

//task3

let stroka = "";

function factorial(n){
    if(n === 0 || n === 1) return n;
    stroka += `${n} + `
    return n*factorial(n -1 );
}

console.log(`${factorial(5)}(${stroka}1)`);
