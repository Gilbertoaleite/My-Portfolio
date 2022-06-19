/** @format */
const itemsNav = document.querySelectorAll('.nav-li');
const itemsProjeto = document.querySelectorAll('.item-projeto');
const itemsHabilidade = document.querySelectorAll('.moldura-icone');
const sectOff = document.querySelectorAll('.sectOff');
const flexExperiencia = document.querySelectorAll('.flex-experiencia');

// tema claro e tema escuro
function dayMode() {
	document.querySelector('body').classList.toggle('background-day');
	document.querySelector('.header').classList.toggle('background-day-gray');
	document.querySelector('.nav-menu').classList.toggle('background-day-gray');

	for (var i = 0; i < sectOff.length; i++) {
		sectOff[i].classList.toggle('background-day-gray');
	}

	for (var i = 0; i < itemsNav.length; i++) {
		itemsNav[i].classList.toggle('text-day');
	}

	for (var i = 0; i < itemsProjeto.length; i++) {
		itemsProjeto[i].classList.toggle('background-day-gray');
	}

	for (var i = 0; i < itemsHabilidade.length; i++) {
		itemsHabilidade[i].classList.toggle('background-day');
	}

	for (var i = 0; i < flexExperiencia.length; i++) {
		flexExperiencia[i].classList.toggle('background-day-gray');
	}
}

function myFunction() {
	var x = document.getElementById('myLinks');
	if (x.style.display === 'block') {
		x.style.display = 'none';
	} else {
		x.style.display = 'block';
	}
}