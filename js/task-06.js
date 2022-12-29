const input = document.querySelector('#validation-input');

input.addEventListener('blur', (event) => {
    console.log(event.currentTarget.value.length);
    console.log(input.dataset.length);
    if(event.currentTarget.value.length === 6)
    {
        input.classList.add("valid");
        input.classList.remove("invalid");
    }
    else {
        input.classList.add("invalid");
        input.classList.remove("valid");
    }
})