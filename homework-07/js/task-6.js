


const inputEl = document.querySelector('#validation-input');

const onInputFocusChange = () => {
  if (
    Number(inputEl.value.length) === Number(inputEl.dataset.length)
  ) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
};

inputEl.addEventListener('change', onInputFocusChange);