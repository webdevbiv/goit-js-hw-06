const refs = {
    inputUser: document.getElementById('font-size-control'),
    outputSpan: document.getElementById('text'),
}
console.dir(refs.inputUser);
console.dir(refs.outputSpan);
console.log(refs.inputUser.value);
refs.outputSpan.style.fontSize = refs.inputUser.value + 'px'
console.log(refs.outputSpan.style.fontSize);
refs.inputUser.addEventListener('input', textSize)
function textSize(event) {
    refs.outputSpan.style.fontSize = event.target.value + 'px'
    console.log(event.target.value);
}