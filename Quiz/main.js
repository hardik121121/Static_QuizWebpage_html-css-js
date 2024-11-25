const questions = [
    {
        question: "What is the Riemann Hypothesis?",
        options: ["A geometry problem", "A number theory problem", "A physics theory", "An economic model"],
        correctAnswer: "A number theory problem",
    },
    {
        question: "In quantum mechanics, what does Schrödinger's equation describe?",
        options: ["Wave-particle duality", "Quantum entanglement", "Quantum superposition", "Quantum tunneling"],
        correctAnswer: "Quantum superposition",
    },
    {
        question: "Who formulated the laws of motion and universal gravitation?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
        correctAnswer: "Isaac Newton",
    },
    {
        question: "What is the capital of Bhutan?",
        options: ["Thimphu", "Kathmandu", "Dhaka", "Male"],
        correctAnswer: "Thimphu",
    },
    {
        question: "Which literary work begins with the line 'It was the best of times, it was the worst of times'?",
        options: ["Moby-Dick", "Pride and Prejudice", "A Tale of Two Cities", "Crime and Punishment"],
        correctAnswer: "A Tale of Two Cities",
    },
    {
        question: "Who discovered the first antibiotic, penicillin?",
        options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Joseph Lister"],
        correctAnswer: "Alexander Fleming",
    },
    {
        question: "What is the main component of Earth's atmosphere by volume?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
        correctAnswer: "Nitrogen",
    },
    {
        question: "In which year did the Chernobyl nuclear disaster occur?",
        options: ["1986", "1979", "1991", "2000"],
        correctAnswer: "1986",
    },
    {
        question: "Who painted the famous work 'Guernica'?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        correctAnswer: "Pablo Picasso",
    },
    {
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        correctAnswer: "2",
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Osmium", "Oxygen", "Gold", "Silver"],
        correctAnswer: "Oxygen",
    },
    {
        question: "Who wrote 'The Great Gatsby'?",
        options: ["F. Scott Fitzgerald", "Ernest Hemingway", "Mark Twain", "George Orwell"],
        correctAnswer: "F. Scott Fitzgerald",
    },
    {
        question: "What is the boiling point of water in Fahrenheit?",
        options: ["212°F", "180°F", "100°F", "32°F"],
        correctAnswer: "212°F",
    },
    {
        question: "In computer science, what does the acronym 'HTTP' stand for?",
        options: ["Hypertext Transfer Protocol", "High-Tech Transfer Protocol", "Hyperlink and Text Transfer Protocol", "Hypertext and Text Transfer Protocol"],
        correctAnswer: "Hypertext Transfer Protocol",
    },
    {
        question: "Who developed the theory of relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileo Galilei"],
        correctAnswer: "Albert Einstein",
    },
];

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const scoreContainer = document.getElementById('score-container');
const scoreText = document.getElementById('score');
const remarkText = document.getElementById('remark');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    showQuestion(currentQuestionIndex);
}

function showQuestion(index) {
    const currentQuestion = questions[index];
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';
    
    for (const option of currentQuestion.options) {
        const button = document.createElement('button');
        button.textContent = option;
        button.setAttribute('onclick', 'checkAnswer(this)');
        optionsContainer.appendChild(button);
    }
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = currentQuestion.correctAnswer;

    if (selectedOption.textContent === correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        endQuiz();
    }
}

function endQuiz() {
    scoreText.textContent = `Your Score: ${score}/${questions.length}`;
    
    if (score < 5) {
        remarkText.textContent = "Better luck next time!";
    } else if (score >= 5 && score < 10) {
        remarkText.textContent = "Needs improvement";
    } else if (score >= 10 && score < 18) {
        remarkText.textContent = "Needs little improvement";
    } else if (score >= 18 && score < 20) {
        remarkText.textContent = "Almost there";
    } else if (score === 20) {
        remarkText.textContent = "Superb!";
    }

    scoreContainer.style.display = 'block';
    questionText.style.display = 'none';
    optionsContainer.style.display = 'none';
}

startQuiz();