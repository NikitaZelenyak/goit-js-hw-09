import { Notify } from 'notiflix/build/notiflix-notify-aio';
const form = document.querySelector('.form');
const btnEl = document.querySelector('button');

form.addEventListener('submit', preventDefault)
form.addEventListener('submit' ,invokePromise)

const delayEl = form.elements.delay;
const stepEl = form.elements.step;
const amountEl = form.elements.amount;


function preventDefault(e) {
  e.preventDefault()


}



function createPromise( position, delay) {
  

   return new Promise((resolve,reject  ) => {

       setTimeout(() => {
           
       const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
resolve( {position, delay})
  } else {
   reject({position, delay})
  }
       }, delay);


})
 
  
}
function invokePromise() {
  let btnNumberCounter = 0;
  btnEl.disabled = true;
    for (let i = 0; i < amountEl.value; i += 1) {
   
     
  setTimeout(() => {
    createPromise(Number(i), Number(delayEl.value)).then(({ position, delay }) => {
        const queuePosTime = 1 + position;
      const timeCounter = (delay + i * stepEl.value)
        Notify.success(`✅ Fulfilled promise ${queuePosTime} in ${timeCounter}ms`)
    console.log(`Fulfilled promise ${queuePosTime} in ${timeCounter}ms`);
  }).catch(({ position, delay }) => {
    const queuePosTime = 1 + position;
    const timeCounter = (delay + i * stepEl.value)
     Notify.failure(` Rejected promise ${queuePosTime} in ${timeCounter}ms`)
    console.log(`❌ Rejected promise ${queuePosTime} in ${timeCounter}ms`);
  }) 
    btnNumberCounter += 1;

    if (btnNumberCounter == amountEl.value ) {
    
       btnEl.disabled = false;

      
    }    

  }, i * stepEl.value);
      
      
}
}




