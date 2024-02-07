// class TestClass {
//     constructor(name) {
//         this.name = name;
//     }
//
//     set name(value){
//         if(name.length < 3)console.log("Name is too short");
//         this._name = value;
//     }
//
//     setName(name, age){
//         this._name = name;
//         this._age = 15;
//     }
//
//     get name(){
//         return this._name;
//     }
//
//     get age(){
//         return this._age;
//     }
//
//     sayHi(){
//         return this.name;
//     }
// }
//
// const tc = new TestClass("Vi");
// console.log(tc.name);
// tc.name = "o";
// tc.setName("Petr")

// const firstFoo = (foo) => {
//     setTimeout(() => {
//         console.log("First function");
//         foo();
//     }, 3000);
// }
//
// const secondFoo = () => {
//     console.log("Second function");
// }
//
// firstFoo(secondFoo);
const userData = document.querySelector(".user");

async function getUsers(){
    const url = "https://jsonplaceholder.typicode.com/users";
    return await fetch(url).then(res => res.json());
}

getUsers().then(users => users.forEach(user => printUser(user)));

function printUser(user){
    userData.innerHTML +=
        `<p>Пользователь с номером ${user.id}</p>
          <p>Имя ${user.name}, логин ${user.username}</p>
          <ul> Контакты
            <li>Электронная почта: ${user.email}</li>
            <li>Телефон: ${user.phone}</li>
            <li>Вебсайт: ${user.website}</li>
        </ul>
        <ul> Адрес
            <li>Почтовый индекс: ${user.address.zipcode}</li>
            <li>Город: ${user.address.city}</li>
            <li>Улица: ${user.address.street}</li>
            <li>Апартаменты: ${user.address.suite}</li>
            Геоданные: широта ${user.address.geo.lat}, долгота ${user.address.geo.lng}
        </ul>
        <ul> Место работы
            <li>Компания ${user.company.name}</li>
            <li>Слоган: ${user.company.catchPhrase}</li>
            <li>Обязанности: ${user.company.bs}</li>
        </ul>
        <br><br>`;
}



