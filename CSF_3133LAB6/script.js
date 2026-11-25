// Questions Array
const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlink and Text Markup Language",
            "Home Tool Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which tag is used to link a JavaScript file in HTML?",
        options: ["<js>", "<script>", "<javascript>", "<link>"],
        answer: "<script>"
    },
    {
        question: "Which CSS property changes the text color?",
        options: ["text-color", "font-color", "color", "background-color"],
        answer: "color"
    },
    {
        question: "Which JavaScript function displays a popup alert box?",
        options: ["msg()", "alert()", "prompt()", "popup()"],
        answer: "alert()"
    }
];

let currentIndex = 0;
let score = 0;
let timeLeft = 15;
let timer;

// 1. Randomly shuffle the questions
function shuffleQuestions() {
    questions.sort(function () {
        return Math.random() - 0.5;
    });
}

// 2. Countdown timer for each question
function startTimer() {
    clearInterval(timer);
    timeLeft = 15;
    document.getElementById("timer").innerHTML = `Time Left: ${timeLeft} seconds`;

    timer = setInterval(function () {
        timeLeft--;
        document.getElementById("timer").innerHTML = `Time Left: ${timeLeft} seconds`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById("feedback").innerHTML =
                `Time is up! Correct answer: ${questions[currentIndex].answer}`;
            document.getElementById("submit-btn").style.display = "none";
            document.getElementById("next-btn").style.display = "inline";
        }
    }, 1000);
}

// 3. Display the current question and options
function displayQuestion() {
    const q = questions[currentIndex];
    document.getElementById("question").innerHTML = q.question;
    document.getElementById("feedback").innerHTML = "";

    let optionsHTML = "";
    for (let i = 0; i < q.options.length; i++) {
        optionsHTML += `
            <label class="option-item">
                <input type="radio" name="choice" id="opt${i}" value="${q.options[i]}">
                ${q.options[i]}
            </label>
        `;
    }

    document.getElementById("options").innerHTML = optionsHTML;
    document.getElementById("submit-btn").style.display = "inline";
    document.getElementById("next-btn").style.display = "none";
}

// 4. Check the selected answer and update score
function checkAnswer() {
    let selectedAnswer = "";

    // Check which radio button is checked
    for (let i = 0; i < 4; i++) {
        const radio = document.getElementById(`opt${i}`);
        if (radio.checked) {
            selectedAnswer = radio.value;
        }
    }

    if (selectedAnswer === "") {
        alert("Please select an answer first!");
        return;
    }

    clearInterval(timer);

    if (selectedAnswer === questions[currentIndex].answer) {
        score++;
        document.getElementById("feedback").innerHTML = "Correct!";
        document.getElementById("feedback").style.color = "green";
    } else {
        document.getElementById("feedback").innerHTML =
            `Incorrect! The right answer is ${questions[currentIndex].answer}`;
        document.getElementById("feedback").style.color = "red";
    }

    document.getElementById("score").innerHTML = `Score: ${score}`;
    document.getElementById("submit-btn").style.display = "none";
    document.getElementById("next-btn").style.display = "inline";
}

// 5. Move to the next question and reset timer
function nextQuestion() {
    currentIndex++;

    if (currentIndex < questions.length) {
        displayQuestion();
        startTimer();
    } else {
        clearInterval(timer);
        document.getElementById("quiz-area").innerHTML = "<h3>Quiz Completed!</h3>";
        document.getElementById("feedback").innerHTML = "";
        document.getElementById("next-btn").style.display = "none";
        document.getElementById("score").innerHTML =
            `Final Score: ${score} out of ${questions.length}`;
    }
}

// 6. Start the quiz
function startQuiz() {
    currentIndex = 0;
    score = 0;
    shuffleQuestions();
    displayQuestion();
    startTimer();
}

// Run startQuiz when page opens
startQuiz();
