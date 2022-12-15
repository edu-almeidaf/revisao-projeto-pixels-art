let fullCourt = document.getElementById('full-court');
let hitsMistakes = document.getElementById('hits-mistakes');
let clearBtn = document.getElementById('clear-btn');

let selectedColor;
let shot;

hitsMistakes.addEventListener('click', (event) => {
	if (event.target.innerText === 'ACERTOS') {
		selectedColor = 'green';
		shot = 'Acertou';
	}

	if (event.target.innerText === 'ERROS') {
		selectedColor = 'red';
		shot = 'Errou';
	}
	console.log(selectedColor, shot);
});

fullCourt.addEventListener('click', (event) => {
	if (shot !== undefined) {

	}
});

const addShotOnCOurt = (event) => {
	let div = document.createElement('div');
	div.style.position = 'absolute';
	div.style.top = `${event.pageX}px`;
	div.style.left = `${event.pageY}px`;
	div.style.width = '20px';
	div.style.height = '20px';
	div.style.borderRadius = '50%';
	div.style.backgroundColor = selectedColor;
}