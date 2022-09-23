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

// function OMG(){
//   let attempts = 5;
//   while(attempts > 0) }
//  { 
//   if(question6 === 20);
//   let question6 = prompt('What is my football number?');attempts--;
//   }
//     alert('You got it right!!!');

//       else if (question6 > 20);{
//       alert('Sorry try again');
//     }

function omg(){
  let attempts = 0;
  while(attempts < 5){
    attempts++;
    let question6 = prompt('What is my football number?');
    console.log(question6);
    if(question6 === '20'){
      alert('Good job you got it');
      return;
    }
    alert('Not quite try again');
  }
  alert('the answer is 20!');
}
omg();
