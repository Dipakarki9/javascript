/*function changeColor(color) {
  let body = document.getElementById("body");
  body.style.backgroundColor = color;
}
let greenbtn = document.getElementById("green");
let redbtn = document.getElementById("red");
let bluebtn = document.getElementById("blue");

greenbtn.addEventListener("click", () => {
  changeColor("green");
});
redbtn.addEventListener("click", () => {
  changeColor("red");
});
bluebtn.addEventListener("click", () => {
  changeColor("blue");
});
*/

// or
/*
let bgbutton = document.getElementsByName("color");
// console.log(bgbutton);
bgbutton.forEach((element) => {
  // console.log(element);
  element.addEventListener("click", () => {
    let elemValue = element.value;
    changeColor(elemValue);
  });
});
*/

// Q2.
let paragraph = document.getElementById("paragraph");

let paragraphText = paragraph.innerText;
console.log(paragraph);
let pArray = paragraphText.split(" ");
// console.log(pArray);
let newParagraph = "";
pArray.forEach((word) => {
  if (word.length >= 8) {
    newParagraph += `<span style="background-color: red; color:white">${word}</span> `;
  } else {
    newParagraph += `${word} `;
  }
});
paragraph.innerHTML = newParagraph;

/*2017.Q
write a javascript code to print smallest and largest numbers among 10 elements of a array.
*/
let numbers = [20,30,40,50,10,60,70,80,90,100];

let largest = Math.max(...numbers);
let smallest = Math.min(...numbers);

console.log("Largest number:", largest);
console.log("Smallest number:", smallest);