// 1.
let select = document.getElementById("para");
console.log(select);

// 2.
// let name = document.getElementsByClassName("head");
// console.log(name);

let subpara = document.getElementsByClassName("head");
// console.log(subtitle);
// let htmlcollectionLength = subtitle.length;
// console.log(htmlcollectionLength);
// for (let i = 0; i < htmlcollectionLength; i++) {
//     console.log(subtitle[i]);
// }
// 3.
let selector = document.getElementsByName("selectname");
// console.log(selector);
selector.forEach((element) => {
   console.log(element);
});

// 4.
let ptag = document.getElementsByTagName("p");
// console.log(ptag);
// or
let htmlcollectionLength = ptag.length;
console.log(htmlcollectionLength);
for(let i=0; i < htmlcollectionLength; i++){
    console.log(ptag[i]);
}

// 5.querySelector()

let message = document.querySelector("#para");
console.log(message);

let input = document.querySelector(".head");
console.log(input);

// 5.querySelectorAll()

let selected = document.querySelectorAll(".head");
// console.log(selected);

// by using for each method

selected.forEach((mess) => {
    console.log(mess);
});


// DOM PROPERTIES

// 1.innerHTML
let propert = document.getElementById("para");
console.log(propert.innerHTML);
propert.innerHTML = "<b>Are you enjoying</b>";


// 2.textContent
let text = document.getElementById("para");
console.log(text.textContent);

// 3.style
let button = document.getElementById("btn");
console.log(button);
 btn.style.color = "red";
btn.style.fontSize = "18x";
btn.style.backgroundColor = "yellow";

// 4.classList

// let listed = document.getElementById("para");

// console.log(listed);
// para.classList.add("red");      
// para.classList.remove("red");
// para.classList.toggle("dark");
// para.classList.contains("red");



