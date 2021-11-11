const refs = {
    inputUser: document.getElementById('validation-input'),
    inputLength: Number(document.getElementById('validation-input').dataset.length)
}

console.log(refs.inputUser.dataset.length);
console.log(refs.inputLength);

refs.inputUser.addEventListener('blur', inputValidation)

// function inputValidationLength() {
//     event.target.value.length === refs.inputLength ?
//         refs.inputUser.classList.remove('invalid') & refs.inputUser.classList.add('valid') :
//         refs.inputUser.classList.add('invalid')
// }

function changeClass(classAdd, classRemove) {
    refs.inputUser.classList.add(`${classAdd}`)
    refs.inputUser.classList.remove(`${classRemove}`)
}


function inputValidation(event) {
    if (event.target.value.length === refs.inputLength) {
        console.log('true');
        changeClass('valid', 'invalid')
    }
    else {
        changeClass('invalid')
    }


    // inputValidationLength()
    // event.target.value.length === refs.inputLength ?
    //     refs.inputUser.classList.remove('invalid') & refs.inputUser.classList.add('valid') :
    //     refs.inputUser.classList.add('invalid')
}
