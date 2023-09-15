var startBtn = document.querySelector(".startBtn")
var intro = document.querySelector(".intro")

startBtn.addEventListener("click", function() {
    intro.style.display = "none"
})

const questionsApi = [
    {
        question: "What does js file mean?",
        answer: ["A. Just Sayin", "B. JavaScript"],
        correct: "B. JavaScript"
    }
]

console.log(questionsApi[0].question)