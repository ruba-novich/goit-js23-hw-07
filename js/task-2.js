
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsEl = document.querySelector('#ingredients');

const elements = ingredients.map( (ingredient) => {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;
  return itemEl;
});

 ingredientsEl.append(...elements);