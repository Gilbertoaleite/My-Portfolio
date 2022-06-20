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
	justify-content: space-around;
	align-items: center;
	text-align: center;
	flex-direction: row;
	margin: 1em auto;
	width: 80%;
}

.moldura-icone {
	background-color: var(--background);
	height: 90px;
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
	/* color: transparent; */
	color: var(--text-night);
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
	position: absolute;
	bottom: -35px;
	font-weight: 700;
	font-size: 16px;
	letter-spacing: 1px;
}

.moldura-icone:hover {
	border-bottom: solid 10px var(--blue-padrao);
}

.html.show-hab,
.python.show-hab,
.javascript.show-hab,
.react.show-hab,
.next.show-hab,
.css.show-hab {
	color: var(--shape);
}

`;