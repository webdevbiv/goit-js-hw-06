const refs = {
    inputUser: document.getElementById('name-input'),
    outputUser: document.getElementById('name-output'),
}
console.dir(refs.inputUser);
console.log(refs.outputUser);
refs.inputUser.addEventListener('input', userName)
function userName(event) {
    console.log(event, event.target, event.target.value);
    if (event.target.value === '') {
        return refs.outputUser.textContent = 'Anonymous'
    }
    refs.outputUser.textContent = event.target.value
}