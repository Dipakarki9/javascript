function changeColor(color) {
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

