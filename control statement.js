// control structure

// conditional statement 

//  1. if statement
/*let age=18;
if(age>=18){
    document.write("elligible to vote");
 } 
    */
// 2. if else 

    let age=18;
    if(age>18){
        document.write("eligible to vote");
    }
    else{
        document.write("not elligible");
    }

   /* 3.else if
   4.nested if
   */

    // switch statmenent


 let day=2;
 switch(day)
 {
    case 1:
      document.write("sunday");
         break;



         case 2:
            document.write("monday");
             break;
         default:
               document.write("invalid");
 }

//  loop statement 
// 1.for loop
 for(let i=1; i<=5; i++)
 {
 document.write(i +"<br>");
 }
//   2.while loop
//   example
  let i=1;
  while(i<=5)
  {
  document.write(i + "<br>");
  i++;
  }

//   3. do while loop
let i=1;
do{
    document.write(i+"<br>");
    i++;

}
while(i<=5);