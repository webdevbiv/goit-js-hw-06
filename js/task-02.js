const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.getElementById('ingredients')
console.log(listRef);
const listItems = ingredients.map((ingredient) => `<li class="item">${ingredient}</li> `).join('')
console.log(listItems);
listRef.innerHTML = listItems