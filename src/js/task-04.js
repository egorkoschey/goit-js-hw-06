const upBtn = document.querySelectorAll("Button")[1];
const downBtn = document.querySelectorAll("Button")[0];

let counterValue = 0;
upBtn.addEventListener(`click`, (event) =>{
    counterValue +=1;
    const valueEl = document.querySelector(`span`);
    valueEl.textContent = counterValue;
})
downBtn.addEventListener(`click`, (event) =>{
    counterValue = counterValue - 1;
    const valueEl = document.querySelector(`span`);
    valueEl.textContent = counterValue;
})