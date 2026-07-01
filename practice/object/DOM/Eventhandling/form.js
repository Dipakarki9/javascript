let registationform = document.getElementById("studentForm");
registationform.addEventListener("submit",(event) => {
    event.preventDefault();

let name = document.getElementById("studentname");
console.log(name.value);

let hidden = document.getElementById("userId");
console.log(hidden.value);
hidden.value = "new hidden value";

let email = document.getElementById("studentemail");
console.log(email.value);

let number = document.getElementById("studentNumber");
console.log(number.value);

let genders = document.querySelectorAll('[name="gender"]');
genders.forEach(function(gender){
    if(gender.checked){
        console.log(gender.value);
    }
})
   
let selectfaculty = document.querySelector("#selectCourse");
// console.log(selectfaculty.value);
 selectfaculty.value = "CSIT";
   console.log( selectfaculty.selectedIndex);
    selectfaculty.selectedIndex = 3;
 console.log(selectfaculty.value);

let textarea = document.getElementById("message");
console.log(textarea.value);

let checkbox = document.getElementById("agree");
console.log(checkbox.checked);


})

