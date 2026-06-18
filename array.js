//  simple example of array
 
//  let marks = [20,30,49,50];
// console.log(marks);

// let name = ["garima","dipa","beepu"];
// // console.log(name);

// for (let i = 0; i < name.length; i++){
// // console.log(name[i]);
// // }

// practice
let marks = [50,60,78,88,90];
let sum = 0;
 for(let value of marks)
 {
    sum = sum + value;
 }
 let avg = sum / marks.length;
 console.log (`avg marks of the class = ${avg}`) ;
  
//  practice
 let items = [250,345,500,700,900];
 for(let i=0; i<items.length; i++) {
   let offer = items[i] /5;
   items[i] = items[i] - offer;
   
 }
 console.log(items);

// Array Method

// push () method-> add to end

let FruitName=["Apple","banana","Mango","litchi"];

// FruitName.push("alcha","jamun","graphes");
// console.log(FruitName);

//  Pop() Method->delete end
 FruitName.pop();
 console.log(FruitName);

//  toString() method->change to string but not original array change.

let Vege = ["potato","tomato","onion"];
console.log(Vege);
console.log(Vege.toString());

// concat () method->joint
let students = ["garima","deepa","beepana"];
let newStudents = ["namrata","Aashika"];
let totalStudents = students.concat(newStudents);
console.log(totalStudents);

// unshift () method->add to start
let NameBoy = ["manish","gaurav"];
NameBoy.unshift("Pralad","sandip");
console.log(NameBoy);

// shift () method ->delete at the begininng and return value.
let girlName = ["beepu","gareema"];
// girlName.shift();
// console.log(girlName);
let val = girlName.shift();
console.log("delted",val);

// Slice () method

let color = ["black","blue","red","brown"];
console.log( color.slice(1,3));

// Splice()method->to change original array(add,remove,replace).
let arr = [5,6,7,8,9];
arr.splice(2,2,277,234);
console.log(arr);
// add element
// arr.splice(1,0,6);

// delete element
// arr.splice(3,2);

// replace element
// arr.splice(3,1,107);

// practice questions

let companies = ["Bloomberg","Microsoft","uber","Google","IBM","Netflix"];
companies.shift();
companies.splice(1,1,"Ola");
companies.push("Amazon");

let stud = ["dipa","garima","beepu"];
// stud.splice(1,1,"namrata");
// stud.splice(1,0,"aashika");
stud.splice(1,1);
console.log(stud);

// indexOf()

// let book = ["javascript","DSA","DBMS","OS"];
// let result = book.indexOf("OS");
// let result = book.lastIndexOf("OS");
// console.log(result);

// include()
let books = ["OOP","NM","DL"];
let ans =  books.includes("NM");
console.log(ans);

//  find()
// let studentsData = [
//   { name: "Nihareeka", age: 20, city: "Bangalore" },
//   { name: "Satyarth", age: 21, city: "Delhi" },
//   { name: "Shivam", age: 22, city: "Mumbai" },
//   { name: "Rohit", age: 23, city: "Chennai" },
// ];
// let student = studentsData.find((student) => student.name === "Shivam");
//  console.log(student);
 
//  let numbers = [5,10,15,16];
//  let result = numbers.find(num => num >10);
//  console.log(result);


//  filter()
let wholeNumber = [0,1,2,3,4,5,6,7,8,9,10,11];
let res = wholeNumber.filter(Number => Number %2 ==0);
console.log(res);

// Reduce ()
let numberrs = [5,10,15];
// let ress = numberrs.reduce((total,num) => total + num);
// console.log(ress);

// map ()
let ress = numberrs.map(num => num * 2);
console.log(ress);

// reverse ()

let array = [2,3,4];
array.reverse();
console.log(array);

// toString ()

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let numbersAsString = numbers.toString();
//  console.log(numbersAsString);
 let numbersJoined = numbers.join("-");
 console.log(numbersJoined);
  
//  split ()

 let caste = "karki";
 let result = caste.split("");
 console.log(result);

// sort ()
let ascen = ["garima","bipana","Aashika"];
ascen.sort();
console.log(ascen);

// flat ()

let flattExample =[1,[2,3], [4,5]];
let result1 = flattExample.flat();
console.log(result1);

// multidimensional array ()

let markss = [
  [80,89],
  [90,95]
];
console.log(markss[0][1]);

// // dialog box
// alert()
// alert("welcome");

// confirm()

// let message = confirm("Do you want to continue?");

// prompt ()
let namess = prompt("enter your name:");
alert("thanks");