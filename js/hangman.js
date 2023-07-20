let dataset = [
    {
        "Category": "Song",
        "Name": "Let it be",
        "Hint": "Beatles"
    },
    {
        "Category": "Song",
        "Name": "Thriller",
        "Hint": "Michael Jackson"
    },
    {
        "Category": "Song",
        "Name": "Your song",
        "Hint": "Elton John"
    },
    {
        "Category": "Song",
        "Name": "Shape of You",
        "Hint": "Ed Sheeran"
    },
    {
        "Category": "Song",
        "Name": "Gangnam Style",
        "Hint": "PSY"
    }
];
let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Get Elements
let nextBtn = document.getElementById('next-btn');
let answerSec = document.getElementById('answer-section');
let livesCount = document.getElementById('lives-left');
let hintBtn = document.getElementById('hint');
let hintDiv = document.getElementById('hint-text');
let letterBtns = document.getElementById('letters');

// Variables
let countQuiz = 0;
let hintText;

// Create the first quiz and alphabet buttons
document.addEventListener('DOMContentLoaded', () => {
    setQuiz(countQuiz);
    placeAlphabets();
})

// Hint Button
hintBtn.addEventListener('click', () => {
    hintDiv.innerHTML = hintText;
    hintBtn.hidden = true;
    hintDiv.hidden = false;
})

// Next Button
nextBtn.addEventListener('click', () => {
    // Reset Quiz
    if (countQuiz == dataset.length - 1) {
        // When user completes all quizes
        closeAlphabets();
        answerSec.style.fontSize = '25px'
        answerSec.style.letterSpacing = '1vw'
        answerSec.innerHTML = 'Complete all Quizes!';
    } else {
        countQuiz++;
        setQuiz(countQuiz);

        // Reset alphabets
        while (letterBtns.firstChild) {
            letterBtns.removeChild(letterBtns.firstChild);
        }
        placeAlphabets();
    }

    // Reset Hint
    hintDiv.innerHTML = '';
    hintBtn.hidden = false;
    hintDiv.hidden = true;
})

function setQuiz(num) {
    countGuess = 5;
    livesIndicate();
    answerText = dataset[num].Name;
    guessedText = '';
    for (let i = 0; i < answerText.length; i++) {
        if (answerText[i] == ' ') {
            guessedText += ' ';
        } else {
            guessedText += '_';
        }
    }
    answerSec.innerHTML = guessedText;

    hintText = dataset[num].Hint;
}

function livesIndicate() {
    livesCount.innerHTML = countGuess;
    if (countGuess <= 0) {
        answerSec.innerHTML = answerText;
        livesCount.innerHTML = 'You Lost!';
        closeAlphabets();
    }
}

function placeAlphabets() {
    for (var i = 0; i < alphabets.length; i++) {
        let letterButton = document.createElement('button');
        letterButton.style.fontSize = '20px';
        letterButton.innerHTML = alphabets[i];

        // Set onlick property
        letterButton.onclick = clickAlphabet;

        letterBtns.appendChild(letterButton);
    }
}

function clickAlphabet() {
    this.onclick = null;
    this.setAttribute("class", "clicked");

    let isCorrect = false;
    for (let i = 0; i < answerText.length; i++) {
        if (answerText[i].toLowerCase() == this.innerHTML) {
            guessedText = guessedText.slice(0, i) + answerText[i] + guessedText.slice(i + 1);
            answerSec.innerHTML = guessedText;
            isCorrect = true;
        }
    }
    checkResult(isCorrect);
}

function checkResult(isWin) {
    if (isWin) {
        // When User Win
        if (!guessedText.includes('_')) {
            livesCount.innerHTML = 'Congrats! <br> You Won!';
            closeAlphabets();
        }
    } else {
        countGuess--;
        livesIndicate();
    }
}

function closeAlphabets() {
    let btnArr = document.querySelectorAll('#letters>button');
    for (let i = 0; i < btnArr.length; i++) {
        btnArr[i].onclick = null;
        btnArr[i].setAttribute("class", "clicked");
    }
}


