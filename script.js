var name = prompt("What is your full name?");
var home = prompt("Where are you from?");
var major = prompt("What is your major?");

function greeting() {
  document.querySelector(".name").innerHTML =
    "Hello, my name is " + name + ". ";
  document.querySelector(".home").innerHTML = "I am from " + home + ". ";
  document.querySelector(".major").innerHTML = "My major is " + major + ". ";
}

greeting();