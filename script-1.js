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
        question: "HTML stands for?",
        answers: [
            { text: "Hide Text Message Language", correct: false},
            { text: "Head Text Made Ligth", correct: false},
            { text: "HyperText Markup Language ", correct: true},
            { text: "Hand To Mouth Language", correct: false},
        ]   
    },
    {
        question: "CSS Is Used For?",
        answers: [
            { text: "Styling  A Webpage", correct: true},
            { text: "Eating", correct: false},
            { text: "Walking", correct: false},
            { text: "Playing", correct: false},
        ]
    },
    {
        question: "Where Is Kode-Hauz Located?",
        answers: [
            { text: "Lagos", correct: false},
            { text: "Uyo", correct: false},
            { text: "Oron", correct: false},
            { text: "Eket", correct: true},
        ]
    }
];

const questionElement  = document.getElementById("question");
const answerButtons  = document.getElementById("answer-buttons");
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
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();