const INITIAL_TIME_IN_SECONDS = 25 * 60 //1500
let TIME_IN_SECONDS = INITIAL_TIME_IN_SECONDS;
let TIMER = null;
let isPlaying = false;

const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

playButton.addEventListener('click', play);
pauseButton.addEventListener('click', pauseCounter);
resetButton.addEventListener('click', resetCounter);

updateDom(); 

function play(){
  isPlaying = !isPlaying;
  startTimer();
  toogleButtons();
}

function startTimer(){
  TIMER = setInterval(() => {
    TIME_IN_SECONDS--;    
    updateDom();
  }, 1000);

  
  toogleButtons();
}

function toogleButtons(){ //toogleButtons
  playButton.disabled = isPlaying;
  pauseButton.disabled = !isPlaying;
}

function pauseCounter(){
  isPlaying = !isPlaying;
  clearInterval(TIMER);
  toogleButtons();
}

function resetCounter(){
  clearInterval(TIMER);
  TIME_IN_SECONDS = INITIAL_TIME_IN_SECONDS;
  updateDom();
  isPlaying = false;
  toogleButtons();
}

function updateDom(){
  const minutes = Math.floor(TIME_IN_SECONDS / 60);
  document.getElementById('minutes').innerHTML = String(minutes).padStart(2, 0);

  const seconds = TIME_IN_SECONDS % 60;
  document.getElementById('seconds').innerHTML = String(seconds).padStart(2, 0);

  if(minutes === 0 && seconds === 0) clearInterval(TIMER); toogleButtons();
}



//setTimeout - função do js para executar uma função depois de um determinado tempo
//set Interval - Ele sempre vai executar uma função depois de um certo tempo.

    //Math.round (arredonda pra cima ou pra baixo)
    //Math.ceil (arredonda pra cima)
    //Math.floor (arredonda pra baixo.)