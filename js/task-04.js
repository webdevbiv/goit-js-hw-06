const refs = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    value: document.getElementById('#value'),
    valueCounter: 0,
}

refs.decrementBtn.addEventListener('click', onDecValue)
refs.incrementBtn.addEventListener('click', onIncValue)

function onDecValue() {
    refs.valueCounter -= 1
    value.innerText = refs.valueCounter
    console.log(refs.valueCounter);
}

function onIncValue() {
    refs.valueCounter += 1
    value.innerText = refs.valueCounter
    console.log(refs.valueCounter);
}