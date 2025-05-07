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
// how many visits
const countEl = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
	fetch('https://api.api-ninjas.com/v1/counter?id=test_id&hit=true',{
  		method: 'GET', // GET requests usually don't have a body
 		headers: {
    			'X-Api-Key': 'fA6tVTtYFvRu3BoyAayzpA==60n1Z7nifArbTggv'
  		}
	})
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML = res.value;
	})
}
