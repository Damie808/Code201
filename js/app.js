'use strict';
let score = 0;
let username = prompt('what is your name?');

alert( `Hello ${username}! please answer the following 5 yes or no questions`);

let question1 = prompt ('Did I serve in the military?').toLowerCase();

if(question1 === 'yes' || question1 === 'y'){
  alert('You got it right!');
  score++;
} else if(question1 === 'no' || question1 === 'n'){
  alert('Sorry try again');
}

let question2 = prompt ('Was I born in Hawaii?').toLowerCase();

if(question2 === 'yes' || question2 === 'y'){
  alert('You got it right!');
  score++;
} else if(question2 === 'no' || question2 === 'n'){
  alert('Sorry try again');
}

let question3 = prompt ('Do I live in Washington now?').toLowerCase();

if(question3 === 'yes' || question3 === 'y'){
  alert('You got it right!');
  score++;
} else if(question3 === 'no' || question3 === 'n'){
  alert('Sorry try again');
}

let question4 = prompt ('Did I graduate from college?').toLowerCase();

if(question4 === 'no' || question4 === 'n'){
  alert('You got it right!');
  score++;
} else if(question4 === 'yes' || question4 === 'y'){
  alert('Sorry try again');
}

let question5 = prompt ('Do I have a dog?').toLowerCase();

if(question5 === 'no' || question5 === 'n'){
  alert('You got it right!');
  score++;
} else if(question5 === 'yes' || question5 === 'y'){
  alert('Sorry try again');
}

alert(`Thanks for visiting ${username}`);

function omg(){
  let attempts = 0;
  while(attempts < 5){
    attempts++;
    let question6 = prompt('What is my football number?');
    if(question6 === '20'){
      alert('Good job you got it');
      score++;
      return;
    }
    alert('Not quite try again');
  }
  alert('the answer is 20!');
}
omg();

const anime = ['Naruto','Another','Jujutsu Kaisen','Toyko Revengers','Hunter x Hunter', 'Toyko Ghoul'];
console.log(anime);
function omg2(){
  let attempts = 0;
  while (attempts < 5){
    attempts++;
    let question7 = prompt('What are my top 6 anime?');
    for(let i = 0; i < anime.length; i++) {
      if(question7 === anime[i]){
        alert('Great Job here is the rest' , anime[i]);
        score++;
        return;
      }
    }
    alert('No sorry try again');
  }
  alert(`Nah here all all the best ones ${anime.join(', ')}`);
}
omg2();

alert('you scored ' + score );
