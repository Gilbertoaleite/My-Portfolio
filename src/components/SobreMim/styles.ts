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
	width: 100%;
	max-width: 400px;
	display: flex;
	text-align: center;
	font-weight: 700;
	gap: 0.7em;
	margin: 2rem auto;
	justify-content: center;
}
@media (max-width: 700px) {
	.container-sobre {
		flex-direction: column;
		align-items: center;
		padding: 1rem 0.5rem;
	}
	.texto-sobre {
		width: 100%;
		max-width: 100vw;
		margin: 1rem 0 0 0;
		text-align: center;
		word-break: break-word;
		box-sizing: border-box;
	}
	.botoes-sobre {
		flex-direction: row;
		width: 100%;
		gap: 0.5em;
		margin: 1.5rem 0;
		align-items: center;
		justify-content: center;
	}
	.botoes-sobre .botao {
		width: 48%;
		min-width: 100px;
		max-width: 150px;
		font-size: 0.95em;
		padding: 0.4em 0.1em;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.15em;
		border-radius: 8px;
		margin: 0;
	}

	.botao img {
	width: 22px !important;
	height: 22px !important;
	min-width: 16px;
	min-height: 16px;
	max-width: 28px;
	max-height: 28px;
	object-fit: contain;
	}

	@media (max-width: 500px) {
		.botao img {
			width: 16px !important;
			height: 16px !important;
			min-width: 12px;
			min-height: 12px;
			max-width: 18px;
			max-height: 18px;
		}
		.botao {
			font-size: 0.92em;
			padding: 0.3em 0.1em;
			min-width: 80px;
			max-width: 120px;
		}
	}
}
}
`;