const authorField = document.getElementById("name-input");
const productField = document.getElementById("product-input");
const reviewArea = document.getElementById("review");
const sendBtn = document.getElementById("add-review");
const attention = document.querySelector(".attention");
const list = document.querySelector(".list_of_products");

document.addEventListener("DOMContentLoaded", getKeys);

const updateReviewList = () => {
    if(checkFields()) return;

    if(localStorage.getItem(productField.value) !== null){
        console.log("Есть ключ");
        const reviewList = JSON.parse(localStorage.getItem(productField.value));
        reviewList.push(new Review(authorField.value, reviewArea.value));
        localStorage.setItem(productField.value, JSON.stringify(reviewList));
        getKeys();
    } else {
        const array = [];
        array.push(new Review(authorField.value, reviewArea.value));
        localStorage.setItem(productField.value, JSON.stringify(array));
        getKeys();
    }
}

sendBtn.addEventListener("click", updateReviewList);

//метод получения всех ключей
function getKeys(){
    list.innerHTML = "";
    for(let i = 0; i < localStorage.length; i++){
        let listItem = document.createElement('li');
        listItem.textContent = localStorage.key(i);
        listItem.addEventListener("click", e=> getReviewsByKey(e.target.textContent));
        list.appendChild(listItem);
    }
}

// вывод отзывов
function getReviewsByKey(key){
    const listOfReviews = JSON.parse(localStorage.getItem(key));
    for(let review of listOfReviews){
        list.insertAdjacentHTML("beforeend", `
        <div>
            <p>Автор: ${review.authorName}</p>
            <br>
            <p class="text">Отзыв: ${review.review}</p>
            <button type="button" onclick="">Удалить</button>
        </div>`);
    }

}


//функция создания объекта отзыва
function Review(authorName, review){
    this.authorName = authorName;
    this.review = review;
}

//функция проверки пустых значений
function checkFields(){
   if(authorField.value === "" || productField.value === ""
        || reviewArea.value === "") {
       attention.style.display = "block";
       return true;
   }
}

