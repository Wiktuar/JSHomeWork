// Запрос API Unsplash Images
const apiKey = 'RrEKzWyHBY56r9Tb0_-kkol_TGm8K6-kjw78KWe54C4';
const image = document.querySelector('.image');
const firstName = document.querySelector('.first_name');
const lastName = document.querySelector('.last_name');
const btn = document.querySelector(".btn");

fetch(`https://api.unsplash.com/photos/random?count=1&client_id=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        image.src = data[0].urls.regular;
        firstName.textContent = data[0].user.first_name;
        lastName.textContent = data[0].user.last_name;
    });

const likesCounter = function (){
    console.log("counter")
    let counter = 0;
    return function (){
        ++counter;
        console.log(counter);
        btn.textContent = `likes ${counter}`;
    }
}

btn.addEventListener("click", likesCounter());

