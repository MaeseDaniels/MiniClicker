let timerInterval = undefined;
let body = null;
let score = 0;
let time = 15;

window.onload = () => {
  body = document.body;
  let boss = document.getElementById("boss");
  let scoreScreen = document.getElementById("score");
  let timer = document.getElementById("timer");
  
  boss.style.top = randomNumber(0, 600-50);
  boss.style.left = randomNumber(0, 800-50);
  timer.innerText = `Time: ${time}s`;
  scoreScreen.innerText = `Score: ${score}`;
  
  boss.onclick = () => {
    boss.style.top = randomNumber(0, 600-50);
    boss.style.left = randomNumber(0, 800-50);
    score++;
    scoreScreen.innerText = `Score: ${score}`;

  };

  timerInterval = setInterval(()=>{
    time--;
    timer.innerText = `Time: ${time}s`;
    if(time<=0){
      finnishGame();
    }

  }, 1000);
}

const randomNumber = (min, max) => {
    return(Math.random() * max);
}

const finnishGame = () => {
  clearInterval(timerInterval);
  body.innerHTML = `<h1>Game Over</h1><h2>Score: ${score}</h2>`;
}