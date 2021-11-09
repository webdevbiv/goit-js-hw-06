
const refs = {
    userForm: document.querySelector('.login-form'),
    userButton: document.querySelector('button')
}
// console.dir(refs.userForm);
// console.log(refs.userButton);

refs.userForm.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
    // console.log(email.value);
    // console.log(password.value);

    if (email.value === '' || password.value === '') {
        return alert(`Please fill in all the fields!`)
    }
    console.log(`Email: ${email.value}\nPassword: ${password.value}`)
    event.currentTarget.reset();
}