$(document).ready(function() {

    // global variables set
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;
    let counter = 120;
    
    $("#game-start").hide();
    $('#results').hide();

    $('#start-button').on('click', function(){
        $('#start-button').remove();
        $('#game-start').show();
        gameTimer = setInterval(timer, 1000);
    });
    
    $('#done-button').on('click', function(){
        $('#results').show();
        $("#game-start").hide();
        done();
    });


    
    
    
    
    // function for checking the answers
    function checkAnswers(){
       
        const questionOne = document.getElementsByName('aOne');
        const questionTwo = document.getElementsByName('aTwo');
        const questionThree = document.getElementsByName('aThree');
        const questionFour = document.getElementsByName('aFour');
        const questionFive = document.getElementsByName('aFive');
        const questionSix = document.getElementsByName('aSix');

        const answerOne = document.getElementById('aOneButtonTwo');
        const answerOne2 = document.getElementById('aOneButton3');

        const answerTwo = document.getElementById('aTwoButtonFour');
        const answerThree = document.getElementById('aThreeButtonOne');
        const answerFour = document.getElementById('aFourButtonTwo');
        const answerFive = document.getElementById('aFiveButtonThree');
        const answerSix = document.getElementById('aSixButtonOne');
       
    

    // question 1
    if (answerOne.checked == true) {
        correct++;
        }
    if (questionOne.checked === false) {
        unanswered++;
        } 
    if (answerOne2.checked == true) {
        incorrect++;
    }
    // question 1

    if (answerTwo.checked == true) {
        correct++;
        }
    else if (questionTwo.checked === false) {
        unanswered++;
        } 
    else {
        incorrect++;
    }

    if (answerThree.checked == true) {
        correct++;
        }
    else if (questionThree.checked === false) {
        unanswered++;
        } 
    else {
        incorrect++;
    }

    if (answerFour.checked == true) {
        correct++;
        }
    else if (questionFour.checked === false) {
        unanswered++;
        } 
    else {
        incorrect++;
    }

    if (answerFive.checked == true) {
        correct++;
        }
    else if (questionFive.checked === false) {
        unanswered++;
        } 
    else {
        incorrect++;
    }

    if (answerSix.checked == true) {
        correct++;
        }
    else if (questionSix.checked === false) {
        unanswered++;
        } 
    else {
        incorrect++;
    }

            // jquery to update results once the game is done
            $('.correct').text("Correct Answers: " + correct);
            $('.incorrect').text("Incorrect Answers: " + incorrect);
            $('.unanswered').text("Unanswered: " + unanswered);
    }
    
    // function for the game timer
    function timer(){
        counter--;
        $('#counter').html("<h5>Time Remaining:"+ counter);
        if(counter <= 0){
            console.log('times up');
            done();
        }
    }
    
    
    // function for when the done button is clicked or timer runs out
    function done(){
        clearInterval(gameTimer);
        answers(checkAnswers);
        $('#results').show();
        $("#game-start").hide();
    }

    
    

});

function answers(checkAnswers) {
    checkAnswers();
}
