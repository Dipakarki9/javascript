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
// arr.splice(2,2,277,234);

// add element
// arr.splice(1,0,6);

// delete element
// arr.splice(3,1);

// replace element
arr.splice(3,1,107);

// practice questions

let companies = ["Bloomberg","Microsoft","uber","Google","IBM","Netflix"];
companies.shift();
companies.splice(1,1,"Ola");
companies.push("Amazon");