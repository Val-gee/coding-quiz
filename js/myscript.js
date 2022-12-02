// //global varibales to store DOM elements
var startButton = document.querySelector('#start-btn');

var questionContainerEl = document.querySelector('.questions-conatiner');
var questionElement = document.getElementById('question');
var answerElement = document.getElementById('answers');

var h1El = document.querySelector('#quiz-title');
var infoEl = document.querySelector('#quiz-info');
var timeEl = document.querySelector('#time');
var highscore = document.querySelector('#highscore');

var questionIndex = 0;
var timeLeft = 75;

// //array of questions
var questions = [
    {
        question: "Which of the following is used to apply a CSS attribute to the index.html file through JavaScript? ",
        answers: ['.setAttribute','setStyle','.setCSS','.setHTML'],
        correctAnswer: '.setAttribute'
    },
    {
        question: "Which Data Types are not used in JavaScript?",
        answers: ['Const','Boolean','Numbers','undefined'],
        correctAnswer: 'Const',
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: ['<scripting>','<javascript>','<script>','<js>'],
        correctAnswer: "<script>",
    },
    {
        question: "How do you create a function in JavaScript",
        answers: ['function myFunction()', 'function: myFunction()', 'function= myFunction()', 'function myFunction'],
        correctAnswer: "function myFunction()"   
    },
    {
        question: "How does a forLoop start?",
        answers: ['for (i= 1 to 5)','for(i=0; i<=5)', 'for (i<=5; i++)', 'for (i=0; i<=5; i++)'],
        correctAnswer: 'for (i=0; i<=5; i++)',  
    }
    ]


function getQuestion() {
var ans1 = document.createElement(questions[questionIndex].question.answers[0]);
var ans2 = document.createElement(questions[questionIndex].question.answers[0]);
var ans3 = document.createElement(questions[questionIndex].question.answers[0]);
var ans4 = document.createElement(questions[questionIndex].question.answers[0]);

questionElement.textContent = questions[questionIndex].question;

document.body.main.section.div.ul.appendChild(ans1);
document.body.main.section.div.ul.appendChild(ans2);
document.body.main.section.div.ul.appendChild(ans3);
document.body.main.section.div.ul.appendChild(ans4);


}

function startQuiz() {
    h1El.classList.add('hide');
    infoEl.classList.add('hide');
    startButton.classList.add('hide');
  
    var timeInterval = setInterval(function() {
        timeLeft--;
        timeEl.textContent = timeLeft + " seconds left";
        if (timeLeft === 0){
        endGame();
        return clearInterval(timeInterval);
    }
    }, 1000)

    getQuestion();

}


function check(event) {

    // var userChoice = event.target.innerHTML;
    console.log(event.target.innerHTML)    

    if (event.target.textContent === questions[questionIndex].correctAnswer){
        //event.preventDefault();
        console.log('correct');
    } else {
        console.log('wrong');
        timeLeft = timeLeft - 15;
    }

    for (var i = 0; i < questions[questionIndex].length; i++) {
        questions[questionIndex]++;
        console.log(questionIndex)
    }

    console.log(questionIndex);

    var nextQuestionIndex = questionIndex =+ 1;
    console.log(nextQuestionIndex);

    getQuestion(nextQuestionIndex);
}
 function endGame(){
    
 }

 startButton.addEventListener('click', startQuiz);
 answers.addEventListener('click', check)

 // //function to get question
//     //get current question(from the object array)

//     //update page to get current question

//     //clear out all question and answers

//     //use for loop to go over question choices
// // for (var i = 0; i < questionPrompt.choices.length; i++)

//     //display question to the page using like append, appendChild, or text



// function showAnswer() {
//     for (var i = 0; i < question.answers; i++) {
//         currentQuestionsIndex.innerText = question.answers.text;
//     }
// }

// //function to start your click event
//     //in here user should be able to choose answer to question if right, move on, if wrong we will decrement the time by a specific amount

//     //move to next question

//     //if time has run out or no more questions in the index de something
//     //if (time <= 0 || questionIndex === questionIndez.length){
//         // endQuiz();
//         //} else {
//         // getNextQuestion()
//         //}
    
// //end quiz function
//     //stop the timer
//     //show score
//     //hide the question from the user

// //highscore function
//     //grab the value from the score
//     //grab initials or name from user
//     //check to see if user entered a value if no initial or name was input, do something.
//     //create a new object to store current user information
//     // var nScore = {
//     //    initials: initials;
//     //    score: time
//     //};
//     //save the scores to the localstorage.setItem())(you are going to use JSON.stringify)
// h1El.setAttribute("style", "margin:auto; width: 50%; text-align: center; ");
// bodyEl.setAttribute("style", "margin:auto; width:50%; text-align: center;");
// startButton.setAttribute("style", "text-align: center; align-content: center;");
