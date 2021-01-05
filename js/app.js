'use strict';
//
console.log('This is the app.js, connected to the index.');


//Create a counter to track right or wrong answers.
//Create 5 questions that prompt the user to answer based on the info they read about me. 
//Tell the user if they got a question right or wrong, and at the end tell them how many they got right in total.
var counter = 0;
var question1 = prompt('What month was I born?').toLowerCase();
if (question1 ==='october' || question1 === 'oct'){
    alert('You got that one right!');
    counter += 1;
} else{
    alert('Sorry, that wasn\'t the right answer');
}

var question2 = prompt('Did I graduate Xavier high school ins 2009 or 2010?').toLowerCase();
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

var question4 = prompt('True or False, I joined the Marine Corps in 2012').toLowerCase();
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

alert('You got ' + counter + ' answers right!')


