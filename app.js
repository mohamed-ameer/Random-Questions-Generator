let cardTitle = document.querySelector('.card-title')
let cardBtn = document.querySelector('.card-button')
const min = 0 ;
const max = data.length -1;
cardBtn.addEventListener('click',()=>{
    const a = Math.floor(Math.random() * (max - min + 1)) + min;
    const d = data[a].question;
    cardTitle.innerHTML = `<span>${d}</span>`;
})
cardBtn.click();
