import styled from 'styled-components';


export const Container = styled.div`

.container-experiencias {
	max-width: 1300px;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	text-align: center;
	align-content: center;
	margin: 3em auto;
	gap: 2em;
}

.container-experiencias > h2 {
	font-size: 1.5em;
	text-align: center;
	font-weight: 700;
}
.flex-experiencia {
	display: flex;
	justify-content: center;
	width: 98%;
	margin: 2em auto;
	/* background-color: #2c2c2c; */
	background: var(--background-containers);
	padding: 2rem;
	border-radius: 9px;
	transition: 0.5s;
}
/* .reverse {
	display: flex;
	width: 77%;
	justify-content: center;
	margin: 0 auto;
	gap: 1rem;
} */

.item-experiencia {
	/* width: 100%; */
	text-align: center;
	align-items: center;
	text-align: left;
	text-decoration: none;
}

.faixa-item-experiencia {
	border-bottom: 6px solid #1f36cd;
	/* font-size: 1em; */
}
.faixa-item-experiencia > h2 {
	text-align: center;
	font-size: 1.5em;
	margin: 0 auto;
}


`