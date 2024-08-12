// alert("Hello!");
// console.log("Hello!");
// console.log("Welcome!");
// console.log("World!");

// let word = "Hello"; = string
// const car = "Expander";
// word = 0; = number
// car = "ford";

// console.log(word);
// console.log(car);

// const isPlateValid = true; = boolean
// const ISCOLORRED = false;
// const IsPotato = true;

// const phone = null;
// const address = undefined;

// console.log("number", phone);
// console.log(address);

// let car;
// car = null;

// console.log(car);

// const username = document.getElementById("username");
// const password = document.getElementById("password");

// console.log(username);
// console.log(password);

// const username = document.getElementsByClassName("potato");

// console.log(username);

// const username = document.querySelector("#username");
// const username1 = document.querySelector(".potato");

// console.log(username);
// console.log(username1);

// const potatoes = document.querySelectorAll(".potato");

// console.log(potatoes);

const loginForm = document.getElementById("loginForm");
const result = document.getElementById("result");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  console.log("submit");
  console.log("My username", username);
  console.log("My password", password);

  result.textContent = `My username is ${username} My password is ${password}`;
});
