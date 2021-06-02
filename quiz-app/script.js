const quizData = [
    {
        question: "Who was the US president in 2020?",
        answers : [
            "Obama",
            "Biden",
            "Trump",
            "Rooseveld"
        ],
        correct: 2
    },
    {
        question: "what is the most used programming language in 2019?",
        answers: [
            "Java",
            "C",
            "Python",
            "Javascript"
        ],
        correct: 3
    }
]

let currentQuizQuestion = 0
let score = 0
const questionEl = document.getElementById("question")
const answersEl = document.getElementById("answers")
const submitBtn = document.getElementById("submit")
const quiz = document.getElementById("quiz")
loadQuiz()

function loadQuiz() {
    const currentQuizData = quizData[currentQuizQuestion]
    console.log(currentQuizData)

    questionEl.innerText = currentQuizData["question"]

    let answersHtml = ``
    currentQuizData.answers.forEach((element, index) => {
        answersHtml += `
        <li>
            <input type="radio" id="${index}" class="answer" name="answer">
            <label for="${index}">${element}</label>
        </li>
        `
    })
    answersEl.innerHTML = answersHtml
}

function getSelected() {
    const answersSelEl = document.querySelectorAll(".answer");
    let answer = undefined
    answersSelEl.forEach(element => {
        if (element.checked) {
            console.log(element.id)
            answer = element.id
        }
    })
    return answer
}

submitBtn.addEventListener("click", () => {
    
    const answer = getSelected()
    console.log(answer)

    if (answer){
        if (answer == quizData[currentQuizQuestion].correct) {
            score++
        }

        currentQuizQuestion++
        if (currentQuizQuestion < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2> You scored ${score}/${quizData.length} correct answers!</h2>
            <button onclick="location.reload()">Restart</button>`
        }
    } else {
        alert("Select one answer!")
    }
    
})