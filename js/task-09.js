function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector('body'),
  color: document.querySelector('.color'),
  button: document.querySelector('.change-color')
}
// console.log(refs.body);
// console.log(refs.color);
// console.log(refs.button);
refs.button.addEventListener('click', clickEventHandler)
function clickEventHandler(event) {
  // console.log('click');
  let randomColor = getRandomHexColor()
  console.log(randomColor);
  refs.color.innerText = `${randomColor}`
  refs.body.style.backgroundColor = `${randomColor}`

}