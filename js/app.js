'use strict';
//To do
console.log('This is the app.js, connected to the index.');

//prompt our user for input data
// var userName = prompt('What is your username?');
// console.log('The users name is: ' + userName);

// //greet the user
// alert('Hello ' + userName);

// //Validate user input.
// var toLowerCase = userName.toLowerCase();
// console.log(toLowerCase);

//Validate the input using conditional logic using strict equals.
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


