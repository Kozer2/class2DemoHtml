'use strict';
//
console.log('This is the app.js, connected to the index.');


//Create a counter to track right or wrong answers.
//Create 5 questions that prompt the user to answer based on the info they read about me. 
//Tell the user if they got a question right or wrong, and at the end tell them how many they got right in total.
// alert('You are about to take a quiz with the info you learned about me. All answers are Yes or No')
var counter = 0;

// Create a function that will run through the initial 5 questions for my about me quiz.
function generalQuestions(){
    var question1 = prompt('What month was I born?').toLowerCase();
    if (question1 ==='october' || question1 === 'oct'){
        alert('You got that one right!');
        counter += 1;
    } else{
        alert('Sorry, that wasn\'t the right answer');
    }

    var question2 = prompt('Did I graduate Xavier high school in 2009 or 2010?').toLowerCase();
    if (question2 ==='2009'){
        alert('You got that one right!');
        counter += 1;
    } else{
        alert('Sorry, that wasn\'t the right answer');
    }

    var question3 = prompt('True or False, I did 2.5 years at Kirkwood Community College').toLowerCase();
    if (question3 ==='True' || question3 === 'true'){
        alert('You got that one right!');
        counter += 1;
    } else{
        alert('Sorry, that wasn\'t the right answer');
    }

    var question4 = prompt('True or False, My number 1 favorite movie is Doom.').toLowerCase();
    if (question4 ==='false' || question4 === 'False'){
        alert('You got that one right!');
        counter += 1;
    } else{
        alert('Sorry, that wasn\'t the right answer');
    }

    var question5 = prompt('What degree did I graduate the University of Iowa with? Social Informatics or Computer Science').toLowerCase();
    if (question5 ==='social informatics'){
        alert('You got that one right!');
        counter += 1;
    } else{
        alert('Sorry, that wasn\'t the right answer');
    }
}

// generalQuestions();



// create a random number generator to pick a random number between 1 and 10. 
// create counters to track number of guesses and loop iterations. 

function randomizedQuestions(){
    var number = Math.floor(Math.random() * 10) + 1;   // Found the random generator on W3 schools (https://www.w3schools.com/js/js_random.asp)
    // console.log('The random number is: ', number);
    var guessCounter = 0;
    var loopCounter = 4;
    var wrong = false
    // create a while loop with if statements to check for correct answers.
    while(guessCounter < 4){
        var question6 = prompt('Guess a number between 1 and 10. You have ' + loopCounter + ' guesses remaining.');
        loopCounter -= 1;
        // console.log(question6)
        if(question6 !== number && question6 > number){
            alert("You guessed too high! Guess again!");
            guessCounter += 1;
        }else if(question6 !== number && question6 < number){
            alert("You guessed too low! Guess again!");
            guessCounter += 1;
        }
        else{
            alert('You got lucky! Good job.');
            counter += 1;
            guessCounter = 4;
            wrong = true
        }
        // console.log(guessCounter);
    } 
    if(wrong === false){
        alert('You did not guess the answer. The right answer was: ' + number);
    }
}

// // reset counters
// guessCounter = 0;
// loopCounter = 7;
// var userCorrect = false;
// // create an array with the right answers
// var answersFor7 =['pakistan', 'malawi', 'hong kong'];

// while(guessCounter < 7){
//     var question7 = prompt('Name 1 country I was stationed in overseas. You have ' + loopCounter + ' guesses remaining.').toLowerCase();
//     // console.log(question7);
//     loopCounter -= 1;
//     for(var i = 0; i <= answersFor7.length; i++ ){
//         if(answersFor7[i] === question7){
//             alert('You got lucky...Again. Good job!');
//             counter += 1;
//             guessCounter = 7;
//             userCorrect = true;
//         }
//     }
//     if(guessCounter !== 7){
//         alert('That was not the right answer!');
//     }
    
//     guessCounter += 1;

// }
// // if statement to alert the user they ran out of guesses
// if(userCorrect === false){
//     alert('You ran out of guesses!');
// }

alert('You got ' + counter + ' answers right!')


// Code below here is old yes/no questions. 


// var question1 = prompt('Was I born in the month of October?').toLowerCase();
// if (question1 ==='yes'){
//     alert('You got that one right!');
//     counter += 1;
// } else{
//     alert('Sorry, that wasn\'t the right answer');
// }

// var question2 = prompt('Ben graduated Xavier High School in 2010').toLowerCase();
// if (question2 ==='no'){
//     alert('You got that one right!');
//     counter += 1;
// } else{
//     alert('Sorry, that wasn\'t the right answer');
// }

// var question3 = prompt('Ben spent 2.5 years at Kirkwood Community College').toLowerCase();
// if (question3 ==='yes'){
//     alert('You got that one right!');
//     counter += 1;
// } else{
//     alert('Sorry, that wasn\'t the right answer');
// }

// var question4 = prompt('Ben joined the Marine Corps in 2012').toLowerCase();
// if (question4 ==='no'){
//     alert('You got that one right!');
//     counter += 1;
// } else{
//     alert('Sorry, that wasn\'t the right answer');
// }

// var question5 = prompt('Ben graduated the University of Iowa with a Computer Science degree').toLowerCase();
// if (question5 ==='no'){
//     alert('You got that one right!');
//     counter += 1;
// } else{
//     alert('Sorry, that wasn\'t the right answer');
// }
