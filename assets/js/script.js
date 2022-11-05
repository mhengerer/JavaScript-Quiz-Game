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
    question: "whats 19 x 4215?",
    answers: [
      { text: "45654", correct: false },
      { text: "93543", correct: false },
      { text: "80085", correct: true },
      { text: "73336", correct: false },
    ],
  },
  {
    question: "what?",
    answers: [
      { text: "scrip", correct: false },
      { text: "scramp", correct: false },
      { text: "scromp", correct: true },
      { text: "slamp", correct: false },
    ],
  },
  {
    question: "when?",
    answers: [
      { text: "blip", correct: false },
      { text: "blop", correct: false },
      { text: "bourg", correct: true },
      { text: "bromp", correct: false },
    ],
  },
  {
    question: "where?",
    answers: [
      { text: "grom", correct: false },
      { text: "grim", correct: false },
      { text: "grem", correct: true },
      { text: "glomp", correct: false },
    ],
  },
  {
    question: "how?",
    answers: [
      { text: "45asd", correct: false },
      { text: "93asdfa", correct: false },
      { text: "80asdf", correct: true },
      { text: "73asdf", correct: false },
    ],
  },
  {
    question: "why?",
    answers: [
      { text: "45ffff654", correct: false },
      { text: "9asdf3543", correct: false },
      { text: "800asdfa85", correct: true },
      { text: "73336", correct: false },
    ],
  },
  {
    question: "for what reason?",
    answers: [
      { text: "456asdf54", correct: false },
      { text: "93543", correct: false },
      { text: "800asdf85", correct: true },
      { text: "73336", correct: false },
    ],
  },
  {
    question: "whom?",
    answers: [
      { text: "45asdf654", correct: false },
      { text: "93543", correct: false },
      { text: "80085", correct: true },
      { text: "73336", correct: false },
    ],
  },
  {
    question: "where art tho?",
    answers: [
      { text: "45654", correct: false },
      { text: "935sdaf43", correct: false },
      { text: "80085", correct: true },
      { text: "73336", correct: false },
    ],
  },
  {
    question: "gwen stefani?",
    answers: [
      { text: "45654", correct: false },
      { text: "93543", correct: false },
      { text: "asd", correct: true },
      { text: "73336", correct: false },
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
    var highScore = [initials, timeLeft]
    console.log(highScore);
    localStorage.setItem('High-Scores', highScore)
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

