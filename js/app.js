'use strict';
//To do
console.log('This is the app.js, connected to the index.');

//prompt our user for input data
var userName = prompt('What is your username?');
console.log('The users name is: ' + userName);

//greet the user
alert('Hello ' + userName);

//Validate user input.
var toLowerCase = userName.toLowerCase();
console.log(toLowerCase);

//Validate the input using conditional logic using strict equals.


if(toLowerCase === 'craig' || toLowerCase === 'bob'){
    alert('Welcome back to the page, ' + userName);
} else {
    alert('Welcome new user to the page.');
}

