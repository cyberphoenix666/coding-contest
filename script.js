// Sample questions object
const questions = {
    "c": {
        "easy": ["Question 1 for C - Easy", "Question 2 for C - Easy"],
        "medium": ["Question 1 for C - Medium", "Question 2 for C - Medium"],
        "hard": ["Question 1 for C - Hard", "Question 2 for C - Hard"]
    },
    "java": {
        "easy": ["Question 1 for Java - Easy", "Question 2 for Java - Easy"],
        "medium": ["Question 1 for Java - Medium", "Question 2 for Java - Medium"],
        "hard": ["Question 1 for Java - Hard", "Question 2 for Java - Hard"]
    },
    "python": {
        "easy": ["Question 1 for Python - Easy", "Question 2 for Python - Easy"],
        "medium": ["Question 1 for Python - Medium", "Question 2 for Python - Medium"],
        "hard": ["Question 1 for Python - Hard", "Question 2 for Python - Hard"]
    }
};

function startContest() {
    const language = document.getElementById('language').value;
    const difficulty = document.getElementById('difficulty').value;
    const question = getRandomQuestion(language, difficulty);
    alert(`Your question: ${question}`);
}

// Generate a random question based on the selected language and difficulty
function getRandomQuestion(language, difficulty) {
    const questionSet = questions[language][difficulty];
    return questionSet[Math.floor(Math.random() * questionSet.length)];
}

// Exit if the user switches tabs
document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
        alert("You left the contest tab. Returning to the homepage.");
        window.location.href = "index.html"; // Redirects back to the homepage
    }
});
