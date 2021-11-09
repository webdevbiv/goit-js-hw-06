const refs = {
    inputUser: document.getElementById('validation-input'),
    inputLength: Number(document.getElementById('validation-input').dataset.length)
}

console.log(refs.inputUser.dataset.length);
console.log(refs.inputLength);

refs.inputUser.addEventListener('blur', inputValidation)
function inputValidation(event) {
    console.log(event.target.value.length);
    if (event.target.value.length === refs.inputLength) {
        refs.inputUser.classList.add('valid')
        refs.inputUser.classList.remove('invalid')
        console.log('true');
    }
    else {
        refs.inputUser.classList.add('invalid')
    }

}