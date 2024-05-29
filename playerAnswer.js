

function playerAnswer(e) {
    buttonClicked = e.target
    var playerAnswer = e.target.id
   

    var category = e.target.dataset.category
    var questionId = e.target.dataset.id
    var answer = getAnswer(category, questionId)

    var isCorrect = answerResult(answer, playerAnswer)

    const answerField = document.getElementById('answers')

    if(isCorrect){
        answerField.innerHTML = "<h3>" + playerAnswer + " is correct!</h3>"
       
    } else {
        answerField.innerHTML = "<h3>" + playerAnswer + " is NOT Correct! try again</h3>"
        

    }

    highlightButtons(buttonClicked, isCorrect)
}

function getAnswer(category, id){

    answer = questions.filter(questions => questions.category == category && questions.id == id)
    var correctAnswer = answer[0].answer

    return correctAnswer

}

function answerResult(answer, playerAnswer){

    if(playerAnswer == answer){
    return true
    } else {
    return false
}
}

function highlightButtons(btn, isCorrect) {
    console.log(isCorrect)
    answerButtons = document.getElementsByClassName('answer-button')
    for (i = 0; i < answerButtons.length; i++) {
        answerButtons[i].setAttribute(
            "style", "background-color: hsl(0, 0%, 0%)"
        )
    }

    if (isCorrect) {
        btn.setAttribute(
            "style", "background-color: hsl(100, 50%, 50%);"
        )
    } else {
        btn.setAttribute(
            "style", "background-color: hsl(0, 50%, 50%);"
        )
    }
}