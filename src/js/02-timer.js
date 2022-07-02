import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const input = document.querySelector('input')
const valueTime = document.querySelectorAll('.value') 
 let isActive = false

const startBtn = document.querySelector('button[data-start]');
startBtn.addEventListener('click', startTimer)

startBtn.disabled = true;

flatpickr(input, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {


    if (selectedDates[0] < Date.now()) {
      startBtn.disabled = true;
      return Notiflix.Notify.failure('Please choose a date in the future')
     

    }

    startBtn.disabled = false;

 
  },
})


function startTimer(e) {
  if (isActive) {
    return
  }
  
  isActive = true;
  const dateFeature = new Date(input.value).getTime();
  


 const idSet = setInterval(() => {
    const currentTime = Date.now();

        const timeToFinish = dateFeature - currentTime;

    const timeComponents = convertMs(timeToFinish);
    const { days, hours, minutes, seconds } = timeComponents;

    valueTime[0].textContent = days;
    valueTime[1].textContent = hours;
valueTime[2].textContent = minutes;
valueTime[3].textContent = seconds;
    
    if (timeToFinish < 0) {
      clearInterval(idSet);
      Notiflix.Notify.success('Event happened');
      valueTime[0].textContent = '00';
    valueTime[1].textContent = '00';
valueTime[2].textContent = '00';
valueTime[3].textContent = '00';

    }
    
  }, 1000);

  
  }






// }
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function pad(value) {
  return String(value).padStart(2, '0')
  
}