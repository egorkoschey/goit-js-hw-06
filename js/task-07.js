const inputText = document.querySelector("#text");
const inputSize = document.querySelector("#font-size-control");

inputSize.addEventListener('input', (event) => {
    inputText.style.fontSize = `${inputSize.value}px`
})