var timerEl = document.querySelector("#time");
var startButton = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var endScreenEl = document.querySelector("#end-screen");
var submitButton = document.querySelector('#submit');

var quizEl = document.querySelector("#questions");
var questionEl = document.querySelector("#question-title");
var answerEl = document.querySelector("#choices");
var messageEl = document.querySelector("#message");
var finalScoreEl = document.querySelector("#final-score");
var initialsEl = document.querySelector("#initials");

var timer;
var timeLeft;

var randomQuestions;
var currentQuestion;

var questions = [
  {
    question: "What is the Concatenation Operator in JS?",
    answers: [
      { text: "=", correct: false },
      { text: "-", correct: false },
      { text: "+", correct: true },
      { text: "%", correct: false },
    ],
  },
  {
    question: "How do we connect an external JavaScript file to a HTML file?",
    answers: [
      { text: "With a link element in the head", correct: false },
      { text: "With a link element at the end of the body", correct: false },
      { text: "With a script element in the head", correct: false },
      { text: "With a script element at the end of the body", correct: true },
    ],
  },
  {
    question: "What is an Assignment Operator in JS?",
    answers: [
      { text: "=", correct: true },
      { text: "-", correct: false },
      { text: "+", correct: false },
      { text: "%", correct: false },
    ],
  },
  {
    question: "This primitive type of variable can be described as a series of charecter's surrounded by quotes.",
    answers: [
      { text: "number", correct: false },
      { text: "array", correct: false },
      { text: "string", correct: true },
      { text: ".length", correct: false },
    ],
  },
  {
    question: "console.log(100 % 10) expression would return what integer?",
    answers: [
      { text: "0", correct: true },
      { text: "4", correct: false },
      { text: "0.1", correct: false },
      { text: "-1", correct: false },
    ],
  },
  {
    question: "What is a collection of properties called?",
    answers: [
      { text: "string", correct: false },
      { text: "array", correct: false },
      { text: "object", correct: true },
      { text: ".length", correct: false },
    ],
  },
  {
    question: "This property returns the length of a string:",
    answers: [
      { text: "object", correct: false },
      { text: "string", correct: false },
      { text: "array", correct: false },
      { text: ".length", correct: true },
    ],
  },
  {
    question: "Described as operators that take in 2 or more expressions and return true or false.",
    answers: [
      { text: "arithmetic operators", correct: false },
      { text: "assignment operators", correct: false },
      { text: "logical operators", correct: true },
      { text: "conditional operators", correct: false },
    ],
  },
  {
    question: "What is the Logical Not operator in JS?",
    answers: [
      { text: "!", correct: true },
      { text: "$", correct: false },
      { text: "&", correct: false },
      { text: "%", correct: false },
    ],
  },
  {
    question: "What symbol is used to write a modulus expression?",
    answers: [
      { text: "$", correct: false },
      { text: "%", correct: true },
      { text: "&", correct: false },
      { text: "!", correct: false },
    ],
  },
];

// function to start game
function startQuiz() {
  timeLeft = 150;
  startButton.disabled = true;
  randomQuestions = questions.sort(function () {
    return Math.random() - 0.5;
  });
  console.log(randomQuestions);
  currentQuestion = 0;
  startScreen.classList.add("hide");
  quizEl.classList.remove("hide");
  startTimer();
  // add call to function that renders question
  goToNextQuestion();
}

// function to go to next question
function goToNextQuestion() {
  renderQuestion(randomQuestions[currentQuestion]);
}

function renderQuestion(question) {
  questionEl.textContent = question.question;
  console.log(question.answers);
  answerEl.textContent = " ";
  question.answers.forEach((answer) => {
    var choiceButton = document.createElement("button");
    choiceButton.textContent = answer.text;
    choiceButton.classList.add("btn");
    if (answer.correct) {
      choiceButton.dataset.correct = answer.correct;
    }
    answerEl.appendChild(choiceButton);
    choiceButton.addEventListener("click", pickTheAnswer);
  });
}

// function for selection answer
function pickTheAnswer() {
  var dataCorrect = this.dataset.correct;

  if (dataCorrect) {
    messageEl.textContent = "Correct";
  } else {
    messageEl.textContent = "WRONG";
    timeLeft = timeLeft - 10;
    if (timeLeft <= 0) {
      clearInterval(timer);
    }
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    goToNextQuestion();
  } else {
    endScreen();
  }
}

function endScreen() {
  clearInterval(timer);
  quizEl.classList.add("hide");
  endScreenEl.classList.remove("hide");
  finalScoreEl.textContent = timeLeft;
}

function saveHighScore(event) {
    var initials = initialsEl.value
    console.log(initials);  
    var highScore = [{name: initials, score: timeLeft}]
    console.log(highScore);
    localStorage.setItem('High-Scores',  JSON.stringify(highScore))
    initialsEl.value = '';

}

// timer
function startTimer() {
  timer = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft;
    // MAYBE: Set a condition for if the win condition is met before time is up

    if (timeLeft === 0) {
      // Clears interval
      clearInterval(timer);
    }
  }, 1000);
}

// event listerner to start the game
startButton.addEventListener("click", startQuiz);

// event listener for saving highscores
submitButton.addEventListener('click', saveHighScore)

