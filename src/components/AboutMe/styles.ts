import styled from 'styled-components';

export const Container = styled.div`

#sobre-mim {
	.container-sobre {
	display: flex;
	width: 100%;
	padding: 2rem 5rem 2rem 5rem;
	justify-content: space-between;
	max-width: 1400px;
	
}
.texto-sobre > h2 {
	font-size: 1.8em;
	text-align: center;
	margin-bottom: 2rem;
}

.imagem-sobre > img {
	width: 50%;
	border-radius: 50%;
	border: #5882fa solid 4px;
	background-color: #5882fa;
	margin-top: 25%;
	
	
}

.texto-sobre {
	width: 100%;
	text-align:left ;
	justify-items:center ;
	flex-direction: column;
	margin: 1.5rem 1.5rem 1.5rem 0 ;
	gap: 0.5em;
	
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
	margin: 2rem auto;
}
}
`;