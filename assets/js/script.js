var timerEl = document.querySelector("#time");
var startButton = document.querySelector("#start");

var questionEl = document.querySelector("#question-title");
var answerEl = document.querySelector("#choices");

var timer;
var timeLeft;

var randomQuestions;
var currentQuestion; 

var questions = [
    {
        question: 'whats 19 x 4215?',
        answers: [
            {text: '45654', correct: false},
            {text: '93543', correct: false},
            {text: '80085', correct: true},
            {text: '73336', correct: false}
        ]
    },
    {
        question: 'what?',
        answers: [
            {text: 'scrip', correct: false},
            {text: 'scramp', correct: false},
            {text: 'scromp', correct: true},
            {text: 'slamp', correct: false}
        ]
    },
    {
        question: 'when?',
        answers: [
            {text: 'blip', correct: false},
            {text: 'blop', correct: false},
            {text: 'bourg', correct: true},
            {text: 'bromp', correct: false}
        ]
    },
    {
        question: 'where?',
        answers: [
            {text: 'grom', correct: false},
            {text: 'grim', correct: false},
            {text: 'grem', correct: true},
            {text: 'glomp', correct: false}
        ]
    },
    {
        question: 'how?',
        answers: [
            {text: '45asd', correct: false},
            {text: '93asdfa', correct: false},
            {text: '80asdf', correct: true},
            {text: '73asdf', correct: false}
        ]
    },
    {
        question: 'why?',
        answers: [
            {text: '45ffff654', correct: false},
            {text: '9asdf3543', correct: false},
            {text: '800asdfa85', correct: true},
            {text: '73336', correct: false}
        ]
    },
    {
        question: 'for what reason?',
        answers: [
            {text: '456asdf54', correct: false},
            {text: '93543', correct: false},
            {text: '800asdf85', correct: true},
            {text: '73336', correct: false}
        ]
    },
    {
        question: 'whom?',
        answers: [
            {text: '45asdf654', correct: false},
            {text: '93543', correct: false},
            {text: '80085', correct: true},
            {text: '73336', correct: false}
        ]
    },
    {
        question: 'where art tho?',
        answers: [
            {text: '45654', correct: false},
            {text: '935sdaf43', correct: false},
            {text: '80085', correct: true},
            {text: '73336', correct: false}
        ]
    },
    {
        question: 'gwen stefani?',
        answers: [
            {text: '45654', correct: false},
            {text: '93543', correct: false},
            {text: 'asd', correct: true},
            {text: '73336', correct: false}
        ]
    }
]


// function to start game
function startQuiz() {
  timeLeft = 80;
  startButton.disabled = true;
  randomQuestions = questions.sort(function() {return Math.random() - .5})
  console.log(randomQuestions);
  currentQuestion = 0;
  startButton.classList.add('hide')
  startTimer();
  // add call to function that renders question
  goToNextQuestion();
}

// function to go to next question
function goToNextQuestion() {
    renderQuestion(randomQuestions[currentQuestion])
}

function renderQuestion(question) {
    questionEl.textContent = question.question
}

// function for selection answer
function pickTheAnswer() {

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
