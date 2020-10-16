



const decrementBtn = document.querySelector('[data-action="decrement"]');

const incrementBtn = document.querySelector('[data-action="increment"]');

const outEl = document.querySelector('#value');

let counterValue = 0;
  
  const onDecrementBtnClick = () =>
    (outEl.textContent = counterValue -= 1);
  const onIncrementBtnClick = () =>
    (outEl.textContent = counterValue += 1);
  
decrementBtn.addEventListener('click', onDecrementBtnClick);
incrementBtn.addEventListener('click', onIncrementBtnClick);

 

