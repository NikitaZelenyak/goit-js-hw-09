const startBtn = document.querySelector('button[data-start]');
const resetBtn = document.querySelector('button[data-reset]');
const pauseBtn = document.querySelector('button[data-pause]');
const bodyEl = document.querySelector('body')
startBtn.addEventListener('click', onStartChangeColor)
pauseBtn.addEventListener('click', onStopChangeColor)
resetBtn.addEventListener('click', onResetBkg)

let intervalChangeColor = null;
 pauseBtn.disabled = true;
resetBtn.disabled = true;

function onStartChangeColor() {
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    resetBtn.disabled = true;

intervalChangeColor=setInterval(() => {
 bodyEl.style.backgroundColor = getRandomHexColor()
}, 1000);
   
   
       
};
function onStopChangeColor() {

    pauseBtn.disabled = true;
    resetBtn.disabled = false;
     startBtn.disabled = false;
    clearInterval(intervalChangeColor)
}


function onResetBkg() {
      resetBtn.disabled = true;
     bodyEl.style.backgroundColor= 'inherit'
    
    
}




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}