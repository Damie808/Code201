'use strict';

let username = prompt('what is your name?');

alert( `Hello ${username}! please answer the following 5 yes or no questions`);

let question1 = prompt ('Did I serve in the military?').toLowerCase();

if(question1 === 'yes' || question1 === 'y'){
  alert('You got it right!');
} else if(question1 === 'no' || question1 === 'n'){
  alert('Sorry try again');
}

let question2 = prompt ('Was I born in Hawaii?').toLowerCase();

if(question2 === 'yes' || question2 === 'y'){
  alert('You got it right!');
} else if(question2 === 'no' || question2 === 'n'){
  alert('Sorry try again');
}

let question3 = prompt ('Do I live in Washington now?').toLowerCase();

if(question3 === 'yes' || question3 === 'y'){
  alert('You got it right!');
} else if(question3 === 'no' || question3 === 'n'){
  alert('Sorry try again');
}

let question4 = prompt ('Did I graduate from college?').toLowerCase();

if(question4 === 'no' || question4 === 'n'){
  alert('You got it right!');
} else if(question4 === 'yes' || question4 === 'y'){
  alert('Sorry try again');
}

let question5 = prompt ('Do I have a dog?').toLowerCase();

if(question5 === 'yes' || question5 === 'y'){
  alert('You got it right!');
} else if(question5 === 'no' || question5 === 'n'){
  alert('Sorry try again');
}

alert(`Thanks for visiting ${username}`);
