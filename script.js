
/*
Author: Shayne Rushton
Date: May 23, 2024
App Name: General Trivia
*/


// populate and display category buttons

displayCategories()


// Populate questions based on id of category clicked
// Displays random question



// function setCategoryButton() { 

// }


// Show categories
function displayCategories() {
    let categoryField = document.getElementById('categories')
    let categories = [...new Set(questions.map(item => item.category))]
    

    categories.forEach((category) => categoryField.innerHTML += "<button id='" + category + "' class='btn-category'>" + category + "</button>")
    
    categoryField.addEventListener('click', function (e) {
   
        if (e.target.classList.contains('btn-category')) {
            
            setQuestion(e)

        }
    })

}

function setQuestion(e){

    answerField = document.getElementById('answers')
    answerField.innerHTML = ""

    category = e.target.id
    questionCount = getTotalQuestions(category)
    questionId = randQuestion(questionCount)
    // Get fields
    questionField = document.getElementById('question')

    // Get Question
    question = getQuestion(category, questionId)

    // Display Questions and Answer options
    questionField.innerHTML = "<h2>Category: " + category.charAt(0).toUpperCase() + category.slice(1) + "</h2><p>" + question.question + "</p>"
    
    displayAnswerOptions(category, questionId)
}

// Get Questions functions

function getQuestion(category, questionId){
    question = questions.filter(questions => questions.category === category && questions.id === questionId)
    return question[0]
}


// GEt total number of categories
function getTotalQuestions(category){
    counter = 0
        for(i = 0; i < questions.length; i++){
            if (questions[i].category == category){
            counter++
            }
    }
    return counter
}

// Random number gnerator for question ID generation
function randQuestion(categoryNumber) {

    randNum = Math.floor(Math.random() * categoryNumber) + 1
    return randNum
}
    
    

// Functionality for showing answers

function displayAnswerOptions(category, questionId){

    optionsField = document.getElementById('options')
    setAnswerButtons(optionsField)

    optionsField.addEventListener('click', function(e) {
        
        if (e.target.classList.contains('answer-button')) {

            playerAnswer(e)
        }
    })
}

// Returns the correct answer for the current question


function setAnswerButtons(optionsField) {

    optionsField.innerHTML = ""
        for(i = 1; i <= 4; i++){
        optionsField.innerHTML += "<button id='" + question.options[i] + "' class='answer-button' data-category='" + category + "' data-id='" + questionId + "'>" + question.options[i] + "</button>"
    }

}

