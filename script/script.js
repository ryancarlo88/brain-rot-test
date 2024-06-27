// script.js
const questions = [
    {
        question: '2 + 2 = ?',
        answers: [
            { text: '5', points: 2 },
            { text: '5', points: 2 },
            { text: '5', points: 2 },
            { text: '5', points: 9 }
        ]
    },
    {
        question: 'Pilih 1',
        answers: [
            { text: '1', points: 7 },
            { text: 'Satu', points: 5 },
            { text: 'Semua Salah', points: 1 },
            { text: 'Pilih', points: 0 }
        ]
    },
    {
        question: 'Ooga Booga ...',
        answers: [
            { text: 'Urgghh', points: 3 },
            { text: 'Urgh', points: 6 },
            { text: 'Urgh URgh', points: 9 },
            { text: 'Urg', points: 1 }
        ]
    },
    {
        question: 'e4e5Kf3Kc6Bc4Bc5b4!',
        answers: [
            { text: 'Bxb4', points: 9 },
            { text: 'Bb6', points: 3 },
            { text: 'Be7', points: 5 },
            { text: 'Bd6', points: 3 }
        ]
    },
    {
        question: 'Founder InvernoVirtulaLivingRoom',
        answers: [
            { text: 'Bjor', points: 100 },
            { text: 'Rjob', points: 2 },
            { text: 'Lyapunnov', points: 1 },
            { text: 'Bjir', points: 5 }
        ]
    },
    {
        question: 'Pilih 1 untuk jadi bodyguard anda.',
        answers: [
            { text: 'Naga Laut', points: 2 },
            { text: 'Raksasa Batu', points: 2 },
            { text: 'Tengkorak Joget', points: 7 },
            { text: 'Tiang Listrik.', points: 9 }
        ]
    },
    {
        question: 'Zombie Apocalypse terjadi, pilih 1 barang untuk MEMBANTU kamu.',
        answers: [
            { text: 'Selimut Kemana Saja', points: 5 },
            { text: 'Pintu Goyang', points: 5 },
            { text: 'Pistol Air', points: 5 },
            { text: 'Kunci Rumah Tetannga', points: 5 }
        ]
    },
    {
        question: 'torniarb hakapa adna',
        answers: [
            { text: 'aku sigma mewing.', points: 7 },
            { text: 'ayi.', points: 2 },
            { text: 'skibidi toilet rizz ohio gyat.', points: 5 },
            { text: 'ngingg ngingg', points: 7 }
        ]
    },
    {
        question: 'Seberapa suka kamu dengan tes ini?',
        answers: [
            { text: '1', points: 1 },
            { text: '10', points: 3 },
            { text: '100', points: 10 },
            { text: 'Aku Tomat', points: 7 }
        ]
    },
    {
        question: 'brainrotbrainrotbrainrotbrainrotbrainrot...',
        answers: [
            { text: 'Ya', points: 2 },
            { text: 'Y', points: 3 },
            { text: 'Ak gpp', points: 5 },
            { text: 'Brain Rot', points: 7 }
        ]
    }
];

let currentQuestionIndex = 0;
let madPoints = 0;

const infoButton = document.getElementById('info-button');
const popover = document.getElementById('popover');
const image = document.getElementById('image');
const closePopoverButton = document.getElementById('close-popover');
const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const resultContainer = document.getElementById('result-container');
const resultElement = document.getElementById('result');
const restartButton = document.getElementById('restart-button');

infoButton.addEventListener('click', () => {
    popover.classList.remove('hide');
});

closePopoverButton.addEventListener('click', () => {
    popover.classList.add('hide');
    image.classList.add('hide');
    startQuiz();
});

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setNextQuestion();
    } else {
        showResults();
    }
});

restartButton.addEventListener('click', startQuiz);

function startQuiz() {
    currentQuestionIndex = 0;
    madPoints = 0;
    infoButton.classList.add('hide');
    quizContainer.classList.remove('hide');
    questionContainer.classList.remove('hide');
    resultContainer.classList.add('hide');
    nextButton.classList.add('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    const shuffledAnswers = shuffle(question.answers);
    shuffledAnswers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(button, answer));
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(selectedButton, answer) {
    madPoints += answer.points;
    Array.from(answerButtonsElement.children).forEach(button => {
        button.classList.remove('selected');
    });
    selectedButton.classList.add('selected');
    nextButton.classList.remove('hide');
}

function showResults() {
    questionContainer.classList.add('hide');
    resultContainer.classList.remove('hide');
    nextButton.classList.add('hide'); // Hide the next button when showing results
    const result = calculateResult();
    resultElement.innerText = result;
}

function calculateResult() {
    if (madPoints <= 20) {
        return "Orang Normal.";
    } else if (madPoints > 20 && madPoints <= 30) {
        return "Pria/Wanita SIGMA";
    } else if (madPoints > 30 && madPoints <= 50) {
        return "Bocil Skibidi Rizz Ohio Fanum Taxx";
    } else if (madPoints > 50 && madPoints <= 70) {
        return "GYAAAAATTATATATTTTTTT";
    } else {
        return "Pasien RSJ";
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
