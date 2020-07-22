const body = document.querySelector('body');
const input = document.querySelector('#userInput');
const div = document.querySelector('game');
const message = document.querySelector('.message');

const correctAnswer = Math.floor(Math.random() * 10) + 1;
let leftGuesses = 3;

const warningMessage = (text, color) => { 
  body.style.backgroundColor = color;
  message.textContent = text;
};

const refreshThePage = () => {
  window.location.href = window.location.href;
}

game.addEventListener('mousedown', (e) => {
  if (e.target.textContent === 'Tekrar Oyna') {
    refreshThePage();
  }
});

window.onkeydown=function(olay){
    if(olay.keyCode==13) {
      if (input.value !== '') {
      let guess = parseInt(input.value);
       leftGuesses--;

      if ((guess < 1 || guess > 10) && leftGuesses > 0) {
      warningMessage(`Enter a number from 1 to 10. ${leftGuesses} guesses left.`, );
      input.value = '';
      } else if (guess === correctAnswer) {
      input.disabled = true;

      "use strict";
      var button = document.createElement("button");
      button.innerHTML = "Tekrar Oyna";
       document.body.appendChild(button);

      warningMessage(`KAZANDIN!!! :) Doğru Cevap: ${guess}`, 'green');
      
        button.onclick = function(){
        button.textContent = 'Tekrar Oyna';
        refreshThePage();
      }

    } else if (guess !== correctAnswer && leftGuesses > 0) {
      warningMessage(`Yanlış Cevap! :| ${leftGuesses} guesses left.`, );
      input.value = '';
    } else if (leftGuesses <= 0) {
      input.disabled = true;
      
      
      var button = document.createElement("button");
      button.innerHTML = "Tekrar Oyna";
       document.body.appendChild(button);
      warningMessage(`KAYBETTİN!!! :( Doğru Cevap: ${correctAnswer}`, 'red');
    
      button.onclick = function(){
      
        refreshThePage();
      }

   
    } else {
      alert('Bir şeyler yanlış gitti!!! :(');
    }
  }
}

     
    
}

