const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "shark", correct: false},
            { text: "Blue whale", correct: true},
            { text: "shark", correct: false},
            { text: "shark", correct: false},
        ]
    },
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "shark", correct: false},
            { text: "Blue whale", correct: false},
            { text: "shark", correct: true},
            { text: "shark", correct: false},
        ]   
    },
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "shark", correct: true},
            { text: "Blue whale", correct: false},
            { text: "shark", correct: false},
            { text: "shark", correct: false},
        ]
    },
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "shark", correct: false},
            { text: "Blue whale", correct: false},
            { text: "shark", correct: false},
            { text: "shark", correct: true},
        ]
    }
];

const questionElement  = document.getElementById("question");
const answerButton  = document.getElementById("answer-buttons");
const nextButton  = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "next";
    showQuestion();
}

function showQuestion(){
    // resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}

startQuiz();