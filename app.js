let form=document.querySelector('form');
let btn=document.querySelector("#subt");
let p=document.querySelector('.lowOrHi');
let num=Math.floor(Math.random()*100 +1);
let prev=[];
let rem=10;
let prevguess=document.querySelector('.guesses')
let remno=document.querySelector('.lastResult')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let guess=parseInt(document.querySelector('#guessField').value);

     if (isNaN(guess) || guess < 1 || guess > 100) {
        p.innerText = "Please enter a valid number between 1 and 100.";
        return;
    }

    prev.push(guess);
    rem--;

  if(guess==num){
p.innerText="congratulation you won";
endgame();
  } 
  else if(rem===0)  {
p.innerText=`the correct number was ${num}`;

endgame()
  } 
  else if (guess>num) p.innerText="Try Lower Value";
  else{
    p.innerText="Try Higher Value";
  }
  remno.innerText=rem;
  prevguess.innerText=prev;
console.log(prev);


})

function endgame(){
    document.querySelector('#guessField').disabled=true;
    btn.disabled=true;

 let restartBtn = document.createElement('button');
    restartBtn.innerText = "🔁 Play Again";
    restartBtn.style.marginTop = "10px";
    restartBtn.classList.add('restart');
    document.querySelector('#wrapper').appendChild(restartBtn);

    restartBtn.addEventListener('click', () => {
        location.reload();
    });

}

