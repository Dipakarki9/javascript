// object

// example
let student = {
    name : "garima",
    age : 20, 
};
console.log(student.name);

// built -in obj

// 1. math Object

let a = -10;
console.log(Math.abs(a));

let b = 25;
console.log(Math.sqrt(b));

let x = 2;
    y = 3;

    console.log(Math.pow(x,y));

let c = 1.45;
console.log(Math.floor(c));   

console.log(Math.min(2, 10, 40, 20, 10, 1));

console.log(Math.random());


// date object

let dateobj = new Date();
// console.log(today);
// console.log(dateobj.getDay());
// console.log(dateobj.getFullYear());
console.log(dateobj.getHours());

// number object
let number = 123;
// console.log(number.toFixed(2));
// console.log(number.toString());
// console.log(number.valueOf());
// console.log(number.toExponential());

// string objects and its method
let strobject = new String("hello i am bca student");
// console.log("length:",strobject.length);
console.log("charAt:",strobject.charAt(4));
console.log("indexof:",strobject.indexOf("l"));
console.log("lastindexof:",strobject.lastIndexOf("l"));
// console.log("concat:",strobject.concat(" 4th semester"));
let str1 = "Apple";
let str2 = "Banana";
console.log(str1.localeCompare(str2));
// console.log(strobject.localeCompare("hello"));
console.log(strobject.match("student"));
console.log(strobject.replace("hello","hi"));
console.log(strobject.search("bca"));
console.log(strobject.slice(0,3));
console.log(strobject.split(","));
console.log(strobject.substr(0,5));
console.log(strobject.toUpperCase());
console.log(strobject.toLowerCase());
console.log(strobject.toLocaleLowerCase());
console.log(strobject.toLocaleUpperCase());
console.log(strobject.valueOf());

// html string

let string = "hello";
console.log(string.bold());
console.log(string.italics());
console.log(string.big());
console.log(string.small());
console.log(string.sub());
console.log(string.sup());
console.log(string.strike());
console.log(string.link("https://www.w3schools.com"));
console.log(string.fontcolor("red"));