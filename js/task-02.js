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
// const listItems = ingredients.map((ingredient) => `<li class="item">${ingredient}</li> `).join('')
// console.log(listItems);
// listRef.innerHTML = listItems
function newList() {
  const listArray = []
  ingredients.map((ingredient) => {
    const newItem = document.createElement('li')
    newItem.classList.add('item')
    newItem.innerText = ingredient
    listArray.push(newItem)
  })
  // ingredients.forEach(ingredient => {
  //   const newItem = document.createElement('li')
  //   newItem.classList.add('item')
  //   newItem.innerText = ingredient
  //   listArray.push(newItem)
  // });

  console.log(listArray);
  listRef.append(...listArray)
}
newList()
