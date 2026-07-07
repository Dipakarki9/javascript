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