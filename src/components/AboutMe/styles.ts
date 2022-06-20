import styled from 'styled-components';

export const Container = styled.div`

#sobre-mim {
	.container-sobre {
	display: flex;
	width: 100%;
	margin: 0 auto;
	padding: 2em 0;
	display: flex;
	justify-content: space-between;
	max-width: 1400px;
}
.texto-sobre > h2 {
	font-size: 1.8em;
	text-align: center;
}

.imagem-sobre > img {
	border-radius: 50%;
	border: #5882fa solid 4px;
	background-color: #5882fa;
	width: 50%;
	margin: 4em 0 0 5rem;
}

.texto-sobre {
	width: 60%;
	display: flex;
	flex-direction: column;
	gap: 0.9em;
	margin-right: 1em;
	line-height: 1.5;
	/* font-size: 1.2em; */
	strong{
		color: var(--red);
	}
}

.botoes-sobre {
	width: 60%;
	display: flex;
	text-align: center;
	font-weight: 700;
	gap: 1.5em;
	margin: 0 auto;
}
}
`;