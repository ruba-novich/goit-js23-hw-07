

const inputEl = document.querySelector('#name-input');
let nameOutEl = document.querySelector('#name-output');

const onChangeInputName = event => {
  
  if (event.target.value === '') {
    nameOutEl.textContent = 'незнакомец';
  }
  nameOutEl.textContent = event.target.value;
};

inputEl.addEventListener('input', onChangeInputName);