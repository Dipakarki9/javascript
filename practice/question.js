let questions = [
     { question: "Which programming language is known as the language of the web?", answer: "javascript" },
     { question: "which symbol is used for comments in javaScript?", answer: "//"},
     { question: "which method can add or remove elements from an array?", answer: "splice()"},
     { question: "which method returns all element that match a condition?", answer: "filter()"},
     { question: "Does slice() change the original array?", answer:"No"},
];
// for (let i = 0; i < questions.length; i++) {
//     let userAnswer = prompt(questions[i].question);
// }

let score = 0;

let results = [];

for (let i = 0; i < questions.length; i++) {
  let userAnswer = prompt(questions[i].question);
  if (userAnswer === questions[i].answer) {
    score++;
    results.push({ question: questions[i].question, correct: true });
  } else {
    results.push({ question: questions[i].question, correct: false });
  }
}


for (let i = 0; i < questions.length; i++) {
  let userAnswer = prompt(questions[i].question);
  if (userAnswer === questions[i].answer) {
    score++;
  }
}

if (score === 5) {
  alert("Congratulations! All answers correct! ");
} else if (score === 4) {
  alert("4 answers correct! You are almost there! ");
} else if (score === 3) {
  alert("3 answers correct! Try more for better! ");
} else if (score === 2) {
  alert("2 answers correct! Don't lose hope, try again! ");
} else if (score === 1) {
  alert("Only 1 answer correct! Learn hard and better try next! ");
}else {
  alert("No correct answer! Study more! 📚");
}

let passedList = results.filter(r => r.correct === true);
let wrongList = results.filter(r => r.correct === false);

let finalScore = passedList.reduce((sum, r) => sum + 1, 0);

alert("Your total score: " + finalScore + " out of 5 ");

