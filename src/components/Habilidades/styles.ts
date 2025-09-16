import styled from 'styled-components';

export const Container = styled.div`

.container-habilidades {
	display: flex;
	width: 100%;
	margin: 0 auto;
	max-width: 1400px;
	padding: 6em;
	justify-content: space-between;
	
}
#titulo-habilidades {
	align-items: center;
	text-align: center;
	font-size: 1.5em;
	h2{
		padding-top: 25px ;
	}
}

.icones-habilidades {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	text-align: center;
	gap: 2em;
	margin: 1em auto;
	width: 100%;
	max-width: 1100px;
}

.moldura-icone {
	background-color: var(--background);
	height: 115px;
	width: 90px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-bottom: solid 10px var(--text-night);
	box-sizing: border-box;
	transition: 0.2s;
	flex-direction: column;
	position: relative;
	cursor: pointer;
	color: var(--text-night);
	margin: 0.5em;
}
@media (max-width: 700px) {
	.icones-habilidades {
		gap: 1em;
		width: 100%;
		padding: 0 0.5em;
	}
	.moldura-icone {
		height: 70px;
		width: 70px;
		margin: 0.3em;
	}
}

.moldura-icone.background-day {
	background-color: var(--text-day);
	color: var(--text-day);
	border-bottom: solid 10px var(--green);
}

.moldura-icone.show-hab {
	border-bottom: solid 50px var(--blue-padrao);
	padding: 2em;
	transition: 0.3s;
}

.moldura-icone.show-hab:hover {
	border-bottom: solid 50px var(--blue-padrao);
	filter: brightness(0.8);
}
.moldura-icone > p {
	position: static;
	margin-top: 0.5em;
	font-weight: 700;
	font-size: 1em;
	letter-spacing: 1px;
	text-align: center;
	width: 100%;
}

.moldura-icone:hover {
	border-bottom: solid 10px var(--blue-padrao);
}

.html.show-hab,
.python.show-hab,
.javascript.show-hab,
.next.show-hab,
.css.show-hab {
	color: var(--shape);
}

`;