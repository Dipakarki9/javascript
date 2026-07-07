let registationform = document.getElementById("studentForm");
let errorElement = document.getElementById("error");
registationform.addEventListener("submit",(event) => {
    event.preventDefault();

let name = document.getElementById("studentname").value.trim();
// console.log(name.value);

let hidden = document.getElementById("userId");
console.log(hidden.value);
hidden.value = "new hidden value";

let dob = document.getElementById("dateofbirth").value.trim();

let address = document.getElementById("address").value.trim();
// console.log(address.value);

let email = document.getElementById("studentemail").value.trim();
// console.log(email.value);

let number = document.getElementById("studentNumber").value.trim();
// console.log(number.value);

let genders = document.querySelectorAll('[name="gender"]:checked');
// genders.forEach(function(gender){
//     if(gender.checked){
//         console.log(gender.value);
//     }
// })
   
let selectfaculty = document.querySelector("#selectCourse").value;
// console.log(selectfaculty.value);
//  selectfaculty.value = "CSIT";
//    console.log( selectfaculty.selectedIndex);
//     selectfaculty.selectedIndex = 3;
//  console.log(selectfaculty.value);

let textarea = document.getElementById("message").value.trim();
// console.log(textarea.value);

let checkbox = document.getElementById("agree").checked;
// console.log(checkbox.checked);

console.log("name:",name);
console.log("dob:",dob);
 if (name === "") {
    errorElement.textContent = "full Name is required.";
  } 

  else if (!/^[a-zA-Z\s]+$/.test(name)) {
    errorElement.textContent = "Full Name should contain only letters (no numbers or symbols).";
  } 
  else if (name.length < 6) {
    errorElement.textContent = "full Name should be at least 6 characters long.";
  } 

 else if (address === "") {
    errorElement.textContent = "Address is required.";
  } 
  else if (dob === "") {
    errorElement.textContent = "Date of Birth is required.";
  } 
  else if (email === "") {
    errorElement.textContent = "Email is required.";
  } 
  else if (!email.includes("@")) {
    errorElement.textContent = "Please enter a valid email with '@'.";
  } 
  else if (number === "") {
    errorElement.textContent = "Contact number is required.";
  } 
  else if (number.length !== 10) {
    errorElement.textContent = "Contact number must be exactly 10 digits.";
  } 
  else if (!genders) {
    errorElement.textContent = "Please select a gender.";
  } 
  else if ( selectfaculty === "") {
    errorElement.textContent = "Please select a faculty.";
  } 
  else if (textarea === "") {
    errorElement.textContent = "Message cannot be empty.";
  } 
  else if (!checkbox) {
    errorElement.textContent = "You must agree to the terms and conditions.";
  } 
  
else {
    errorElement.setAttribute("id", "success");
    errorElement.textContent = "Your form has been submitted successfully.";
    
    setTimeout(() => {
      registationform.submit(); 
    }, 30000);
    // console.log(registationform);
  }
})

