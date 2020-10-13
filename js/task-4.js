

const counterValue = document.querySelector('#counter');

const decrementBtn = document.querySelector('[data-action="decrement"]');

const incrementBtn = document.querySelector('[data-action="increment"]');



  let outEl = document.querySelector('#value');
  
  const onDecrementBtnClick = () =>
    (outEl.textContent = Number(outEl.textContent) - 1);
  const onIncrementBtnClick = () =>
    (outEl.textContent = Number(outEl.textContent) + 1);
  
    decrementBtn.addEventListener('click', onDecrementBtnClick);
    incrementBtn.addEventListener('click', onIncrementBtnClick);