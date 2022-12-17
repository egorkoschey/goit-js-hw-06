const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = document.querySelector('#ingredients');
const ingredientsList = ingredients => {
  return ingredients.map(ingredient => {
      const itemEl = document.createElement('li');
       itemEl.textContent = ingredient
       itemEl.classList.add('item');
      
      return itemEl;
})
};
      
const elements = ingredientsList(ingredients);
ingredientsEl.append(...elements);
console.log(ingredientsEl);